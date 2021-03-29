import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { IconButton, Avatar, Title, TextInput } from 'react-native-paper';
import { Bubble, Send, GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';

import firebase from 'firebase';
import firebaseConfig from '../../firebaseConfig';

const Chat = ({ navigation, route }) => {
  const { name } = route.params;

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        _id: 2,
        text: 'How are you?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        _id: 3,
        text: 'I am fine',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{ right: { backgroundColor: '#7E549F' } }}
      textStyle={{ right: { color: '#f2f2f2' } }}
    />
  );

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
        user={{ _id: 1 }}
        renderBubble={renderBubble}
        renderSend={renderSend}
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
  },
});

export default Chat;
