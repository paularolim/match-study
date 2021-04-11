import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import authContext from '../contexts/authContext';

const Message = ({ message }) => {
  const { user } = useContext(authContext);

  const dateTimeFormat = (dateTime) => {
    const toFormat = new Date(dateTime);

    const date = toFormat.toLocaleDateString('pt-br', { dateStyle: 'short' });
    const hour = toFormat.getHours() <= 9 ? `0${toFormat.getHours()}` : toFormat.getHours();
    const minute =
      toFormat.getMinutes() <= 9 ? `0${toFormat.getMinutes()}` : toFormat.getMinutes();

    return `${date} - ${hour}:${minute}`;
  };

  return message.user.id == user.id ? (
    <View style={styles.containerFromUser}>
      <View style={styles.messageFromUser}>
        <Text style={styles.text}>{message.text}</Text>

        <View style={styles.messageFooter}>
          <Text style={styles.hour}>{dateTimeFormat(message.createdAt)}</Text>
          {message.read ? (
            <Icon
              name="checkmark-circle-outline"
              size={15}
              color="#FFCB3E"
              style={styles.statusIcon}
            />
          ) : (
            <Icon
              name="checkmark-circle-outline"
              size={15}
              color="#c4c4c4"
              style={styles.statusIcon}
            />
          )}
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.containerFromContact}>
      <View style={styles.messageFromContact}>
        <Text style={styles.text}>{message.text}</Text>

        <View style={styles.messageFooter}>
          <Text style={styles.hour}>{dateTimeFormat(message.createdAt)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFromContact: {
    display: 'flex',
    alignItems: 'flex-start',
    marginVertical: 2,
  },
  containerFromUser: {
    display: 'flex',
    alignItems: 'flex-end',
    marginVertical: 2,
  },
  messageFromContact: {
    backgroundColor: '#C1549C',
    maxWidth: '75%',
    borderRadius: 10,
    padding: 10,
  },
  messageFromUser: {
    backgroundColor: '#7E549F',
    maxWidth: '75%',
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: '#f2f2f2',
    fontSize: 15,
  },
  messageFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
  },
  hour: {
    textAlign: 'right',
    fontSize: 12,
    color: '#c4c4c4',
  },
  statusIcon: {
    marginLeft: 10,
  },
});

export default Message;
