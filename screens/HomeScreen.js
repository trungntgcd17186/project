import React from 'react';
import {

  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet

} from 'react-native';
import 'react-native-gesture-handler';


//icon
import Icon from 'react-native-vector-icons/Ionicons'

//image

import Ex1Image from '../images/Ex1Image.jpg'
import Ex2Image from '../images/Ex2Image.jpg'
import Ex3Image from '../images/Ex3Image.jpg'
import Ex4Image from '../images/Ex4Image.jpg'
const { width: WIDTH } = Dimensions.get('window')

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgba(217, 179, 129, 0.8)' }}>
  
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Absolute Fitness</Text>
          <Icon name={'person-circle'} size={45} color={'black'}></Icon>
  
        </View>
        <Text style={{ marginLeft: 10, fontSize: 20, marginTop: -10 }}>Your Program:</Text>
        
        <ScrollView style={styles.scrollView}>
          <View style={styles.borderImage}>
            <TouchableOpacity onPress={() => navigation.navigate('Exercise1')}>
              <Image source={Ex1Image} style={styles.SizeImage}  ></Image>
    
            </TouchableOpacity>
          </View>
          
        
  
          <View style={styles.borderImage}>
            <TouchableOpacity onPress={() => navigation.navigate('Exercise2')}>
              <Image source={Ex2Image} style={styles.SizeImage} ></Image>
    
            </TouchableOpacity>
          </View>
  
          <View style={styles.borderImage}>
            <TouchableOpacity onPress={() => navigation.navigate('Exercise3')}>
              <Image source={Ex3Image} style={styles.SizeImage} ></Image>
    
            </TouchableOpacity>
          </View>

          <View style={styles.borderImage}>
            <TouchableOpacity onPress={() => navigation.navigate('Exercise3')}>
              <Image source={Ex4Image} style={styles.SizeImage} ></Image>
    
            </TouchableOpacity>
          </View>
          
        </ScrollView>
        
      </View>
    )
  }
  export default HomeScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'rgb(214, 174, 123)'
    },
    SizeImage: {
      width: '100%',
      borderTopRightRadius: 84,
      
    },
    scrollView: {
      width: '100%',
      height: '100%',
      
    },
    borderImage: {
      marginLeft: 10,
      marginTop: 10,
      width: '95%',
      borderWidth: 3,
      borderColor: 'silver',
      borderTopRightRadius: 84,
    }
  
  
  })
  
  