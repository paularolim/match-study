import React from 'react';
import {StatusBar, Image, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import home from '../assets/style/HomeStyler.js';

const Home = () => (
  <View style={home.home}>
    <StatusBar backgroundColor="#7E549F" />
    <View style={home.header}>
      <Image
        source={require('../assets/img/LOGO.png')}
        style={home.logo}
        resizeMode="stretch"
      />
    </View>

    <View style={home.cardProfile}>
      <View style={home.imageProfileContainer}>
        <Image
          source={require('../assets/img/profile/man1.png')}
          style={home.imageProfile}
          resizeMode="contain"
        />
      </View>

      <View style={home.infoProfile}>
        <Text style={home.infoProfileTitle}>
          Esse pode ser seu próximo colega de estudos!
        </Text>

        <View style={home.infoSubjects}>
          <Text style={home.subjectTitle}>Precisa de uma força em:</Text>
          <Text style={home.subjectText}>Matemática, Física e Química.</Text>
        </View>

        <View style={home.infoSubjects}>
          <Text style={home.subjectTitle}>Fera em:</Text>
          <Text style={home.subjectText}>Português, Geografia e História.</Text>
        </View>
      </View>
    </View>

    <View style={home.buttonGroup}>
      <TouchableHighlight
        onPress={() => alert('Tudo bem, você achará outro colega de estudos.')}>
        <View style={home.actionButton}>
          <Icon name="close-outline" size={50} color="#E84D33" />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => alert('Ebaa! Novo colega de estudos encontrado!')}>
        <View style={home.actionButton}>
          <Icon name="checkmark-outline" size={50} color="#2FAD2C" />
        </View>
      </TouchableHighlight>
    </View>
  </View>
);

export default Home;
