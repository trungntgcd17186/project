import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Button, Image, View, Platform,TouchableOpacity, TextInput, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'react-native';
import ProfileTop from '../images/ProfileTop.jpg'
import ProfileBot from '../images/ProfileBot.jpg'
import Status from '../images/Status.jpg'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ImagePickerExample() {
  
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage2(result.uri);
    }
  };

  const [shouldShow, setShouldShow] = useState(true);


  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

         <View style={{ flex: 1 }}>
            {/* ảnh image profile */}
                    <SafeAreaView>
                        
                        <TouchableOpacity onPress={pickImage2} >
                        {/* <Image source={ProfileTop} style={styles.ProfileTop}></Image> */}
                            {shouldShow ? (
                                <Image
                                    source={ProfileTop}
                                    style={{ width: 250, height: 250 }}
                                />
                                ) : null}
                                <Button
                                title="Hide"
                                onPress={() => setShouldShow(!shouldShow)}
                                />
                            {image2 && <Image source={{ uri: image2 }} style={{ width: '100%', height: 270 }} />}
                            <StatusBar style="auto" />
                            

                        </TouchableOpacity>
                        <View style={styles.container}>
                            {/*Here we will return the view when state is true 
                            and will return false if state is false*/}
                            
                        </View>
                    </SafeAreaView>

      <View style={{ flexDirection: 'row', zIndex: 1 }}>
        <TouchableOpacity onPress={pickImage} >
            
            {image && <Image source={{ uri: image }} style={{ width: 95, height: 95, borderRadius: 50, marginTop:-90, marginLeft: 20 }} />}
            <StatusBar style="auto" />
            <Text>      Upload Avatar</Text>

         </TouchableOpacity>
        
        <TextInput
          style={styles.inputStatus}
          placeholder={'Status'}
          placeholderTextColor={'rgba(38, 38, 38, 0.7)'}
          underlineColorAndroid='transparent'
        />
      </View>
      <Image source={Status} style={styles.Status}></Image>

      <View>
        <Image source={ProfileBot} style={styles.ProfileBot}></Image>

        {/* account infor - Height */}
        <View style={{ flexDirection: 'row', marginTop: -360  }}>
          <MaterialCommunityIcons name="human-male-height" size={40} color="black" style={{ marginTop: 20, marginLeft: 45 }} />
          <View style={{ flexDirection: 'colum', marginLeft: -10 }}>
            <Text style={{ zIndex: 1, fontWeight: 'bold', fontSize: 20, marginLeft: 25, marginTop: 15 }}>Height: </Text>
            <TextInput
              style={styles.inputProfile}
              placeholder={'176cm'}
              placeholderTextColor={'rgba(38, 38, 38, 0.7)'}
              underlineColorAndroid='transparent'
            />
          </View>

            {/* account infor - mobile */}
            <View style={{ flexDirection: 'row', marginLeft: -20}}>
            <Icon2 name="mobile" size={40} style={{ marginTop: 17, marginLeft: 50 }}></Icon2>
            <View style={{ flexDirection: 'colum' }}>
                <Text style={{ zIndex: 1, fontWeight: 'bold', fontSize: 20, marginLeft: 25, marginTop: 15 }}>Mobile: </Text>
                <TextInput
                style={styles.inputProfile}
                placeholder={'0123456789'}
                placeholderTextColor={'rgba(38, 38, 38, 0.7)'}
                underlineColorAndroid='transparent'
                />
            </View>
            </View>

        </View>

        {/* account infor - Weight */}
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name="weight-kilogram" size={40} color="black" style={{ marginTop: 20, marginLeft: 45 }} />
          <View style={{ flexDirection: 'colum', marginLeft: -10 }}>
            <Text style={{ zIndex: 1, fontWeight: 'bold', fontSize: 20, marginLeft: 25, marginTop: 15 }}>Weight:</Text>
            <TextInput
              style={styles.inputProfile}
              placeholder={'65kg'}
              placeholderTextColor={'rgba(38, 38, 38, 0.7)'}
              underlineColorAndroid='transparent'
            />
          </View>

        </View>

        {/* account infor - Email */}
        <View style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name="email" size={40} style={{ marginTop: 20, marginLeft: 45 }}></MaterialCommunityIcons>
          <View style={{ flexDirection: 'colum', marginLeft: -10 }}>
            <Text style={{ zIndex: 1, fontWeight: 'bold', fontSize: 20, marginLeft: 25, marginTop: 15 }}>Email:    </Text>
            <TextInput
              style={styles.inputProfile}
              placeholder={'trungntgcd17186@fpt.edu.vn'}
              placeholderTextColor={'rgba(38, 38, 38, 0.7)'}
              underlineColorAndroid='transparent'
            />
          </View>
        </View>

        
        
      </View>
    </View>

      
      
    // </View>
  );
}
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
      width: 385,
      height: 170,
      marginLeft: 10,
      marginTop: 20,
      borderTopRightRadius: 84
  
    },
    ListExercise: {
      width: 380,
      height: 120,
      marginLeft: 17,
      marginTop: 10,
      borderRadius: 16
    },
    ProfileTop: {
      width: 420,
      height: 50,
      justifyContent: 'flex-start',
      zIndex: 2
    },
    ProfileBot: {
      width: '101%',
      height: 420,
      zIndex: -1,
      marginTop: -60,
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
      width: '73%',
      height: 110,
      marginTop: -110,
      borderRadius: 35,
      marginLeft: 110,
    },
    inputProfile: {
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
      marginTop: -80,
      marginLeft: 25,
      height: 40,
      borderRadius: 0,
      fontSize: 16,
      paddingLeft: 0,
      color: 'rgba(38, 38, 38, 0.7)',
      marginHorizontal: 25,
    }
  
  
  })