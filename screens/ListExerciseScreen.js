import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import 'react-native-gesture-handler';

const { width: WIDTH } = Dimensions.get('window')
//icon
import Icon from 'react-native-vector-icons/Ionicons'

//image
import glutes from '../images/glutes.jpg'
import chest from '../images/chest.jpg'
import abs from '../images/abs.jpg'
import legs from '../images/legs.jpg'
import arms from '../images/arms.png'
import { ScrollView } from 'react-native-gesture-handler';

function ListExercise({ navigation }) {
    return (
      <View style={{ flex: 1 }}>
        

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>List Exercise</Text>
            <Icon name="ios-search-outline" size={24} color="black" />
          </View>
          <ScrollView style={styles.scrollView}>

            <Image source={glutes} style={styles.ListExercise}></Image>
            <Image source={chest} style={styles.ListExercise}></Image>
            <Image source={abs} style={styles.ListExercise}></Image>
            <Image source={legs} style={styles.ListExercise}></Image>
            <Image source={arms} style={styles.ListExercise}></Image>
          
          </ScrollView>

      </View>
    );
  }

  export default ListExercise

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'rgb(214, 174, 123)'
    },
    
    ListExercise: {
      width: '91%',
      height: 120,
      marginLeft: 17,
      marginTop: 9,
      borderRadius: 16
    },
    
    avatar: {
      zIndex: 2,
      width: 100,
      height: 110,
      alignItems: 'center',
      marginTop: -100,
      marginLeft: 20
    },
    Status: {
      width: 295,
      height: 110,
      marginTop: -110,
      borderRadius: 35,
      marginLeft: 120,
    },
    
    scrollView: {
      width: '100%',
      height: '100%'
    }
  
  
  })