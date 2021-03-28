import React, { useContext } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Avatar, Title, Subheading, Paragraph, List, Divider } from 'react-native-paper';

import authContext from '../contexts/authContext';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  profileInfoText: {
    marginLeft: 12,
  },
  subjectsInfo: {
    marginTop: 10,
    marginBottom: 30,
  },
  subjectTitle: {
    fontSize: 18,
  },
  subjectText: {
    fontSize: 15,
  },
});

const Profile = () => {
  const { user, signOut } = useContext(authContext);

  const handlerLogout = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#7E549F" />

      <View style={styles.profileInfo}>
        <Avatar.Image size={70} source={require('../assets/img/profile/man1.png')} />
        <View style={styles.profileInfoText}>
          <Title>{user.name}</Title>
          <Subheading>{user.schooling}</Subheading>
        </View>
      </View>

      <View style={styles.subjectsInfo}>
        <Title style={styles.subjectTitle}>Precisa de uma força em:</Title>
        <Paragraph>Português, Geografia e História</Paragraph>

        <Title style={styles.subjectTitle}>Fera em:</Title>
        <Paragraph>Matemática, Física e Química.</Paragraph>
      </View>

      <List.Item
        title="Editar matérias"
        left={(props) => <List.Icon {...props} icon="pencil-outline" />}
        onPress={() => alert('Editar matérias')}
      />
      <List.Item
        title="Configurações"
        left={(props) => <List.Icon {...props} icon="cog-outline" />}
        onPress={() => alert('Configurações')}
      />
      <Divider />
      <List.Item
        title="Sair"
        left={(props) => <List.Icon {...props} icon="logout-variant" />}
        onPress={handlerLogout}
      />
    </View>
  );
};

export default Profile;
