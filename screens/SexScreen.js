import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  ImageBackground,
  TextInput,
  Dimensions,
} from 'react-native';
import 'react-native-gesture-handler';


//image
import bgImage from '../images/background.jpg'

const { width: WIDTH } = Dimensions.get('window')

function Sex({ navigation }) {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={bgImage} style={styles1.backgroundContainerSex}>
  
          <Text style={styles1.Text2}>Step 1 of 2</Text>
          <Text style={styles1.Text3}>Please follow these steps to plan your fitness</Text>
          <Text style={styles1.Text3}>Let us know about you:</Text>
  
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
  
            <TouchableOpacity>
              <View style={styles2.BoxSexItem1}>
                <Text style={styles1.Text2}>Female</Text>
  
              </View>
  
            </TouchableOpacity>
  
            <TouchableOpacity >
              <View style={styles2.BoxSexItem2}>
                <Text style={styles1.Text2} >Male</Text>
  
              </View>
  
            </TouchableOpacity>
  
  
  
          </View>
  
          <View style={{ flex: 1, flexDirection: 'column' }} >
            <View style={{ flex: 1, flexDirection: 'row', marginTop: -50 }} >
              <Text style={styles1.row} style={{ marginTop: 5, fontSize: 20, }}>Weight</Text>
              <TextInput
  
                style={styles1.input2}
                placeholder={'0kg'}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid='transparent'
              />
            </View>
  
            <View style={{ flex: 1, flexDirection: 'row', marginTop: -180 }} >
              <Text style={{ marginTop: 5, marginLeft: 3, fontSize: 20 }}>Height</Text>
  
              <TextInput
  
                style={styles1.input3}
                placeholder={'0cm'}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid='transparent'
              />
  
            </View>
          </View>
          <Button
            title="Go to Goal"
            onPress={() => navigation.navigate('Goal')}
          />
        </ImageBackground>
  
  
      </View>
  
  
    )
  }

  export default Sex
  
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
  
  const styles2 = {
    BoxSex: {
      width: 300,
      height: 120,
      padding: 3,
      borderColor: '#AAA',
      borderWidth: 3,
      borderRadius: 20,
  
    },
    BoxSexItem1: {
      width: 150,
      height: 60,
      padding: 3,
      borderColor: '#AAA',
      borderWidth: 3,
      borderTopLeftRadius: 30, borderBottomLeftRadius: 30
    },
    BoxSexItem2: {
      width: 150,
      height: 60,
      padding: 3,
      borderColor: '#AAA',
      borderWidth: 3,
      borderTopRightRadius: 30, borderBottomRightRadius: 30
    }
  }