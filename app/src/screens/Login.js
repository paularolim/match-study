import React, { useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import style from '../assets/style/LoginRegisterStyler';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    navigation.replace('Nav');
  };

  return (
    <View style={style.body}>
      <StatusBar backgroundColor="#7E549F" />
      <Text style={style.title}>Login</Text>
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
      <TouchableHighlight style={style.button} onPress={login}>
        <Text style={style.buttonText}>Entrar</Text>
      </TouchableHighlight>

      <View style={style.actions}>
        <Text style={style.actionText}>Esqueci minha senha</Text>
        <Text style={style.actionText}>
          Ainda não possui conta?{' '}
          <Text
            style={style.actionLink}
            onPress={() => navigation.navigate('Register')}
          >
            Cadastrar
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
