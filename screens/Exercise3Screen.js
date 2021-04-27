import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import 'react-native-gesture-handler';

//icon
import Icon from 'react-native-vector-icons/Ionicons'

//ProgressBar and Youtube
import YouTubePlayer from '../Component/Videoyoutube3';

function Exercise3({ navigation }) {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgba(217, 179, 129, 0.7)' }}>
  
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Absolute Fitness</Text>
          <Icon name={'person-circle'} size={45} color={'black'}></Icon>
  
  
        </View>
        <Text style={{ marginLeft: 10, fontSize: 20, marginTop: -10 }}>Your Program:</Text>
  
        <YouTubePlayer />
  
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
  
      </View>
  
      //export default class App extends Component {
  
  
    )
  }

  export default Exercise3