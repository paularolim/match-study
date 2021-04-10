import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, Avatar, Badge, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 12,
    marginRight: 8,
  },
  hour: {
    marginBottom: 4,
  },
  badge: {
    backgroundColor: '#7E549F',
    fontSize: 16,
    alignSelf: 'center',
  },
});

const ChatListItem = ({ name, message, hour, quantity }) => {
  const navigation = useNavigation();

  return (
    <View>
      <List.Item
        onPress={() => {
          navigation.navigate('Chat', { name });
        }}
        title={name}
        description={message}
        left={() => (
          <Avatar.Image
            size={58}
            source={require('../assets/img/profile/man1.png')}
            style={styles.avatar}
          />
        )}
        right={() => (
          <View>
            <Text style={styles.hour}>{hour}</Text>
            <Badge style={styles.badge} size={25} visible={true}>
              {quantity}
            </Badge>
          </View>
        )}
      />
      <Divider />
    </View>
  );
};

export default ChatListItem;
