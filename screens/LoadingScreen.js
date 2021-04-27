import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  Button,
  Dimensions,

} from 'react-native';
import 'react-native-gesture-handler';

const { width: WIDTH } = Dimensions.get('window')
//ProgressBar and Youtube
import ProgressBar from '../Component/ProgressBar';

function Loading({ navigation }) {

    componentDidMount = () => {
      this.checkIfLoggedIn();
    }
  
    checkIfLoggedIn = () => {
  
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          this.props.navigation.navigate('Mydrawer')
        }
        else {
          this.props.navigation.navigate('Login1')
        }
      }.bind(this)
      )
    }
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
  
        <View style={styles.container}>
          <Image source={require('../images/loading1.jpg')}
            style={{ width: '100%', height: '65%' }}
          />
  
          <Text>
  
          </Text>
          <View style={{ height: "5%", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
            <ProgressBar />
  
            <Text style={{ fontSize: 22, marginTop: 0 }}>
              Loading... <ActivityIndicator size="small" color="black" style={{}} />
            </Text>
            
          </View>
        </View>
        <View>
          
          <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
          />
          
        </View>
  
      </SafeAreaView>
    );
  }
  export default Loading
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'rgb(214, 174, 123)'
    },
    footer: {
      width: 100,
      height: 50,
      backgroundColor: 'red'
    },
    Ex1Image: {
      width: '100%',
      height: '26%',
      marginLeft: 10,
      marginTop: 10,
      
    },
    SizeImage: {
      width: '95%',
      height: '100%',
      borderTopRightRadius: 84
    },
    ListExercise: {
      width: '91%',
      height: '17%',
      marginLeft: 17,
      marginTop: 9,
      borderRadius: 16
    },
    ProfileTop: {
      width: 415,
      height: 350,
      justifyContent: 'flex-start',
      zIndex: -1
    },
    ProfileBot: {
      width: 420,
      height: 420,
      zIndex: -1,
      marginTop: -50,
      marginLeft: -2,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50
  
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
    inputProfile: {
      width: WIDTH - 180,
      height: 20,
      borderRadius: 0,
      fontSize: 16,
      paddingLeft: 0,
      backgroundColor: 'white',
      color: 'rgba(38, 38, 38, 0.7)',
      marginHorizontal: 25,
      marginTop: 0
    },
    inputStatus: {
      marginTop: -90,
      marginLeft: 15,
      width: WIDTH - 180,
      height: 30,
      borderRadius: 0,
      fontSize: 16,
      paddingLeft: 0,
      color: 'rgba(38, 38, 38, 0.7)',
      marginHorizontal: 25,
    }
  })