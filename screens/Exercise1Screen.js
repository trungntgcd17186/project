import React from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Text,
  Button
} from 'react-native';
import 'react-native-gesture-handler';

//icon
import Icon from 'react-native-vector-icons/Ionicons'

//ProgressBar and Youtube
import YoutubePlayer from '../Component/Videoyoutube'


function Exercise1({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#828543' }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Absolute Fitness</Text>
        <Icon name={'person-circle'} size={45} color={'black'}></Icon>


      </View>
      <Text style={{ marginLeft: 10, fontSize: 20, marginTop: -10, marginBottom: 10 }}>Your Program: 10 Mins Toned Arms</Text>

      <YoutubePlayer />
      <View style ={{marginTop: -120}}>
      <Button
        title="Go to Exercise 2 >"
        onPress={() => navigation.navigate('Exercise2')}
      />
      </View>
      

    </View>



  )
}

export default Exercise1


