import React, { useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

import style from '../assets/style/LoginRegisterStyler';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
    setError('');

    if (email.length === 0 || password.length === 0) {
      setError('Preencha email e senha!');
      return;
    }

    try {
      const data = { email, password };
      const response = await api.post('/login', data);

      await AsyncStorage.setItem('@MatchStudy:token', response.data.token);

      navigation.replace('Nav');
    } catch (Exception) {
      setError('Houve um problema ao tentar realizar o login');
    }
  };

  return (
    <View style={style.body}>
      <StatusBar backgroundColor="#7E549F" />
      <View>
        <Text style={style.title}>Login</Text>

        <Text style={error === '' ? style.none : style.alertDanger}>
          {error}
        </Text>

        <Text style={style.label}>Email</Text>
        <TextInput
          style={style.input}
          placeholder="email@exemplo.com"
          placeholderTextColor="#f2f2f2"
          autofocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={style.label}>Senha</Text>
        <TextInput
          style={style.input}
          placeholder="**************"
          placeholderTextColor="#f2f2f2"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
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

      <View style={style.footer}>
        <TouchableHighlight style={style.buttonBorder}>
          <Text style={style.buttonBorderText}>Saiba mais sobre nós!</Text>
        </TouchableHighlight>
        <Image source={require('../assets/img/landing_draw.png')} />
      </View>
    </View>
  );
};

export default Login;
