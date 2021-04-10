import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, LogBox } from 'react-native';
import { IconButton, Avatar, Title } from 'react-native-paper';
import { Bubble, Send, GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';

import authContext from '../contexts/authContext';
import { firebase } from '../services/firebase';

LogBox.ignoreAllLogs();

const Chat = ({ navigation, route }) => {
  const { user } = useContext(authContext);
  const { name } = route.params;

  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    await firebase
      .database()
      .ref('messages')
      .limitToLast(20)
      .orderByChild('createdAt')
      .on('value', (snapshot) => {
        snapshot.forEach((obj) => {
          const { _id, text, createdAt, read, user } = obj.val();
          const message = {
            _id,
            text,
            createdAt: new Date(createdAt - 3000).toISOString(),
            read,
            user,
          };
          console.log(message);
          setMessages((prev) => GiftedChat.append(prev, message));
        });
      });
  }, []);

  const onSend = ([messages]) => {
    console.log(messages);
    firebase
      .database()
      .ref('messages')
      .push({
        _id: Math.floor(Math.random() * 9999) - 1,
        text: messages.text,
        createdAt: new Date().getTime(),
        user: messages.user,
        read: false,
      })
      .then()
      .catch((err) => console.error(err));
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: { backgroundColor: '#7E549F' },
          left: { backgroundColor: '#C1549C' },
        }}
        textStyle={{ right: { color: '#f2f2f2' }, left: { color: '#f2f2f2' } }}
      />
    );
  };

  const renderSend = (props) => (
    <Send {...props}>
      <View>
        <Icon name="send" size={26} color="#7E549F" style={styles.iconSend} />
      </View>
    </Send>
  );

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

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{ _id: user.id, name: user.name }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        scrollToBottom
        placeholder={'Escreva sua mensagem....'}
        renderAvatar={null}
      />
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
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 10,
  },
  footerInput: {
    flex: 1,
  },
  iconSend: {
    marginBottom: 5,
    marginRight: 5,
  },
});

export default Chat;
