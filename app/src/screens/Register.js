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

import api from '../services/api';

import style from '../assets/style/LoginRegisterStyler';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [schooling, setSchooling] = useState('');
  const [error, setError] = useState('');

  const register = async () => {
    console.log('register');
    setError('');

    if (
      name.length === 0 ||
      birthDate.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      schooling.length === 0
    ) {
      setError('Preencha todos os campos!');
      return;
    }

    try {
      const data = { name, birth_date: birthDate, email, password, schooling };
      await api.post('/register', data);

      navigation.replace('Login');
    } catch (Exception) {
      setError('Houve um problema ao tentar realizar o cadastrar');
      console.log(Exception);
    }
  };

  return (
    <SafeAreaView style={style.body}>
      <ScrollView>
        <StatusBar backgroundColor="#7E549F" />

        <Text style={style.title}>Cadastro</Text>

        <Text style={error === '' ? style.none : style.alertDanger}>
          {error}
        </Text>

        <Text style={style.label}>Nome</Text>
        <TextInput
          style={style.input}
          placeholder="Nome Sobrenome"
          placeholderTextColor="#f2f2f2"
          autofocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={style.label}>Data de nascimento</Text>
        <TextInput
          style={style.input}
          placeholder="dd/mm/aaaa"
          placeholderTextColor="#f2f2f2"
          type="text"
          value={birthDate}
          onChangeText={(text) => setBirthDate(text)}
        />

        <Text style={style.label}>Email</Text>
        <TextInput
          style={style.input}
          placeholder="email@exemplo.com"
          placeholderTextColor="#f2f2f2"
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

        <Text style={style.label}>Escolaridade</Text>
        <TextInput
          style={style.input}
          placeholder="Ensino médio, superior..."
          placeholderTextColor="#f2f2f2"
          type="text"
          value={schooling}
          onChangeText={(text) => setSchooling(text)}
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
