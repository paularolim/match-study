import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import style from '../assets/style/LoginRegisterStyler';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {};

  return (
    <SafeAreaView>
      <ScrollView style={style.body}>
        <StatusBar backgroundColor="#7E549F" />

        <Text style={style.title}>Cadastro</Text>

        <Text style={style.label}>Nome</Text>
        <TextInput
          style={style.input}
          placeholder="Nome Sobrenome"
          autofocus
          type="text"
          value={name}
          onChange={(text) => setName(text)}
        />

        <Text style={style.label}>Data de nascimento</Text>
        <TextInput
          style={style.input}
          placeholder="dd/mm/yyyy"
          autofocus
          type="text"
          value={birthDate}
          onChange={(text) => setBirthDate(text)}
        />

        <Text style={style.label}>Email</Text>
        <TextInput
          style={style.input}
          placeholder="email@exemplo.com"
          autofocus
          type="email"
          value={email}
          onChange={(text) => setEmail(text)}
        />

        <Text style={style.label}>Senha</Text>
        <TextInput
          style={style.input}
          placeholder="**************"
          secureTextEntry
          type="password"
          value={password}
          onChange={(text) => setPassword(text)}
        />

        <TouchableHighlight style={style.button} onPress={register}>
          <Text style={style.buttonText}>Cadastrar</Text>
        </TouchableHighlight>

        <View style={style.actions}>
          <Text style={style.actionText}>
            Já possui conta?{' '}
            <Text
              style={style.actionLink}
              onPress={() => navigation.navigate('Login')}
            >
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
