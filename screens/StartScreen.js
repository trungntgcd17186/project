import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Dimensions
} from 'react-native';
import 'react-native-gesture-handler';
import StartImage from '../images/start.jpg'

const { width: WIDTH } = Dimensions.get('window')

function Start({ navigation }) {
    return (
  
      <View style={{ flex: 1 }}>
        <ImageBackground source={StartImage} style={styles1.backgroundContainerStart}>
  
        </ImageBackground>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('MyDrawer')}
        />
  
      </View>
      //export default class App extends Component {
  
  
    )
  }

  export default Start

  const styles1 = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundContainerSex: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    backgroundContainerStart: {
      flex: 1,
      width: null,
      height: null,
      marginBottom: -150,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    logoContainer: {
      marginTop: 30
    },
    logo: {
      width: 130,
      height: 130,
      marginTop: 30
    },
    inputContainer: {
      marginTop: -280
    },
    input: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
      color: 'rgba(255, 255, 255, 0.7)',
      marginHorizontal: 25,
      marginTop: 10
    },
    input2: {
      width: WIDTH - 250,
      height: 40,
      fontSize: 16,
      paddingLeft: 120,
      //backgroundColor: 'rgba(0, 0, 0, 0.35)',
      padding: 5,
      borderBottomColor: "red",
      borderBottomWidth: StyleSheet.hairlineWidth,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    input3: {
      width: WIDTH - 250,
      height: 40,
      fontSize: 16,
      paddingLeft: 120,
      //backgroundColor: 'rgba(0, 0, 0, 0.35)',
      padding: 5,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    inputIcon: {
      position: 'absolute',
      top: 15,
      left: 35
    },
    btnEye: {
      position: 'absolute',
      top: 15,
      right: 50
    },
    btnLogin: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      backgroundColor: '#432577',
      justifyContent: 'center',
      marginTop: 20
    },
    text: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 16,
      textAlign: 'center'
    },
    Text2: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 25,
      textAlign: 'center'
    },
    Text3: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 20,
      marginTop: 10
    },
    Text4: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 40,
      marginTop: 10
    },
  
  
  
  })
