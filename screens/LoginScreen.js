//googleauth
import * as Google from 'expo-google-app-auth';
import bgImage from '../images/background.jpg'
import firebase from "firebase/app";
import 'firebase/auth'
import logo from '../images/logo.png'
import google from '../images/google.jpg'
//initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyBx4IhmJfyLdO8XFMWN-I0GqWPdnQnV8X0",
    authDomain: "fitness-97.firebaseapp.com",
    projectId: "fitness-97",
    storageBucket: "fitness-97.appspot.com",
    messagingSenderId: "438755422462",
    appId: "1:438755422462:web:f3e9fa32418991a260f5af"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
import React, { useState } from 'react'
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import {
    Alert,
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
  } from 'react-native';
  

const IOS_CLIENT_ID = "774652347586-fbeikpoptb8lsbi8iavdj236n6hpeelk.apps.googleusercontent.com"


const Login1 = ({ navigation }) => {
    const [authentication, setAuthentication] = useState({
        email: '',
        password: ''
    })

    const handleEmailChange = (event) => {
        console.log(event)
        setAuthentication((previousState) => {
            return {
                ...previousState,
                email: event
            }
        })
    }

    const handlePasswordChange = (event) => {
        console.log(event)
        setAuthentication((previousState) => {
            return {
                ...previousState,
                password: event
            }
        })
    }

    const signUpUser = (email, password) => {
        try {
            if (password.length < 6) {
                alert("Please enter atleast 6 characters")
                return;

            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
            alert("Sign up successfully")

        }
        catch (error) {
            console.log(error.toString())
        }
    }

    const loginUser = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
                console.log(user)
                Alert.alert(
                    'Alert Title',
                    'Login Successfully: ',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => navigation.navigate('MyDrawer') }
                    ],
                    { cancelable: false }
                )
            }

            )
        } catch (error) {
            console.log(error.toString())
        }
    }


    const isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                }
            }
        }
        return false;
    }

    const onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.getAuthResponse().id_token);

                // Sign in with credential from the Google user.
                firebase.auth().signInWithCredential(credential).catch((error) => {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // ...
                });
            } else {
                console.log('User already signed-in Firebase.');
            }
        });
    }

    const signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                behavior: 'web',
                iosClientId: IOS_CLIENT_ID,
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {

                navigation.navigate('Sex')
                return result.accessToken;

            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={bgImage} style={styles1.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles1.logo}

                    />
                </View>
                <View style={{ marginTop: 50 }}>

                    <View>
                        <Item floatingLabel>
                            <Label style={{ color: 'white' }}>Email</Label>
                            <Input
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={handleEmailChange}
                                value={authentication.email}
                            />
                        </Item>

                        <Item floatingLabel>
                            <Label style={{ color: 'white' }}>Password</Label>
                            <Input
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize="none"
                                onChangeText={handlePasswordChange}
                                value={authentication.password}
                            />
                        </Item>

                        <Button style={{ marginTop: 10 }}
                            full
                            rounded
                            success
                            onPress={() => loginUser(authentication.email, authentication.password)}
                        >
                            <Text>Login</Text>
                        </Button>

                        <Button style={{ marginTop: 10 }}
                            full
                            rounded
                            primary
                            onPress={() => signUpUser(authentication.email, authentication.password)}
                        >
                            <Text>Sign Up</Text>
                        </Button>
                        

                        <Button style={styles5.googlebutton}
                            onPress={() => signInWithGoogleAsync()}
                        >
                            <Image source={google} style={styles1.google}></Image>
                            <Text style={{ color: '#424242', fontWeight: 'bold' }}>Sign In With Google Account</Text>
                        </Button>

                        {/* <Button title="Go to Mydrawer"
                        onPress={() => navigation.navigate('MyDrawer')}
                        >
                            <Text style={{ color: '#424242', fontWeight: 'bold' }}>Go to Mydrawer</Text>
                        </Button> */}
                        
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login1;

const styles5 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'silver',
        justifyContent: 'center',
        padding: 10
    },
    googlebutton: {
        height: 50,
        width: 300,
        marginTop: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
    }
})

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
      height: 30,
      borderRadius: 0,
      fontSize: 16,
      paddingLeft: 0,
      color: 'rgba(38, 38, 38, 0.7)',
      marginHorizontal: 25,
    }
  
  
  })
  

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
    google: {
        width: 30,
        height: 30,
        marginRight: 20,
        zIndex: 1
    }  
  })
  
