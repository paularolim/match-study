import React from 'react';
import { StatusBar, Image, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import match from '../assets/style/MatchStyler.js';

const Home = () => (
  <View style={match.match}>
    <StatusBar backgroundColor="#7E549F" />

    <View style={match.cardProfile}>
      <View style={match.imageProfileContainer}>
        <Image
          source={require('../assets/img/profile/man1.png')}
          style={match.imageProfile}
          resizeMode="contain"
        />
      </View>

      <View style={match.infoProfile}>
        <Text style={match.infoProfileTitle}>
          Esse pode ser seu próximo colega de estudos!
        </Text>

        <View style={match.infoSubjects}>
          <Text style={match.subjectTitle}>Precisa de uma força em:</Text>
          <Text style={match.subjectText}>Matemática, Física e Química.</Text>
        </View>

        <View style={match.infoSubjects}>
          <Text style={match.subjectTitle}>Fera em:</Text>
          <Text style={match.subjectText}>Português, Geografia e História.</Text>
        </View>
      </View>
    </View>

    <View style={match.buttonGroup}>
      <TouchableHighlight
        onPress={() => alert('Tudo bem, você achará outro colega de estudos.')}
      >
        <View style={match.actionButton}>
          <Icon name="close-outline" size={50} color="#E84D33" />
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => alert('Ebaa! Novo colega de estudos encontrado!')}
      >
        <View style={match.actionButton}>
          <Icon name="checkmark-outline" size={50} color="#2FAD2C" />
        </View>
      </TouchableHighlight>
    </View>
  </View>
);

export default Home;
