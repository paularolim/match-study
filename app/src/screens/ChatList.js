import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import ChatListItem from '../components/ChatListItem';

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
  },
  fab: {
    backgroundColor: '#7E549F',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

const Chat = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ChatListItem
          name="Astolfo Nascimento"
          message="Olá, tudo bem?"
          hour="17:22"
          quantity={5}
        />
        <ChatListItem name="Malu Oliveira" message="Oi sumida!" hour="17:22" quantity={1} />
        <ChatListItem name="Robrigo Cunha" message="Até breve" hour="15:18" quantity={4} />
        <ChatListItem name="João Silva" message="Tchau" hour="11:50" quantity={1} />
      </ScrollView>
      <FAB style={styles.fab} icon="plus" onPress={() => alert('Novo chat')} />
    </SafeAreaView>
  );
};

export default Chat;
