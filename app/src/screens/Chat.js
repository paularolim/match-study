import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
  LogBox,
} from 'react-native';
import { IconButton, Avatar, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import Message from '../components/Message';

import authContext from '../contexts/authContext';
import { db } from '../services/firebase';

const Chat = ({ navigation, route }) => {
  const { user } = useContext(authContext);
  const { name } = route.params;

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    LogBox.ignoreAllLogs();

    db.ref('messages').on('value', (snapshot) => {
      let messagesFromFireBase = [];
      snapshot.forEach((snap) => {
        const { _id, text, createdAt, read, user } = snap.val();
        const message = {
          _id,
          text,
          createdAt,
          read,
          user,
        };
        messagesFromFireBase.push(message);
      });
      setMessages(messagesFromFireBase.reverse());
    });
  }, []);

  const onSend = () => {
    const message = {
      _id: Math.floor(Math.random() * 9999) - 1,
      text: input,
      createdAt: new Date().getTime(),
      user: user,
      read: false,
    };

    db.ref('messages')
      .push(message)
      .then()
      .catch((err) => console.error(err));

    setInput('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.customHeader}>
        <IconButton
          icon="arrow-left"
          color="#f2f2f2"
          size={28}
          onPress={() => navigation.goBack()}
        />

        <TouchableOpacity
          style={styles.profileInfo}
          onPress={() => alert('Astolfo Nascimento')}
          activeOpacity={1}
        >
          <View style={styles.profileInfo}>
            <Avatar.Image
              size={40}
              source={require('../assets/img/profile/man1.png')}
              style={styles.avatar}
            />
            <Title style={styles.headerName}>{name}</Title>
          </View>
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.chatArea}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return <Message message={item} />;
          }}
          inverted
          contentContainerStyle={styles.chatWrapper}
        />
      </SafeAreaView>

      <View style={styles.footer}>
        <TextInput
          style={styles.footerInput}
          placeholder="Escreva sua mensagem..."
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <TouchableOpacity onPress={onSend}>
          <Icon name="send" size={30} color="#7E549F" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  customHeader: {
    backgroundColor: '#7E549F',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  avatar: {
    backgroundColor: '#C1549C',
    marginLeft: 15,
  },
  headerName: {
    marginLeft: 12,
    color: '#f2f2f2',
  },
  chatArea: {
    flex: 1,
  },
  chatWrapper: {
    padding: 15,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  footerInput: {
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7E549F',
    paddingHorizontal: 10,
  },
});

export default Chat;
