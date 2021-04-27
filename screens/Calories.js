 import * as React from 'react';
 import { Text, StatusBar, View, StyleSheet } from 'react-native';
 import Constants from 'expo-constants';
 import Donut from '../screens/Donut'
 
 const data = [{
   percentage: 300,
   color: 'tomato',
   max: 300
 }, {
   percentage: 250,
   color: 'skyblue',
   max: 250
 }, {
   percentage: 290,
   color: 'gold',
   max: 290
 }, {
   percentage: 500,
   color: '#222',
   max: 500
 }, {
    percentage: 1340,
    color: '#222',
    max: 1800,
    radius: 150,
  }, 
]
 
 export default function Calories() {
   return (
     <View style={{backgroundColor: '#fff'}}>

       <View style={{ alignItems: 'center'}}>
        <Text style={{ fontSize: 40 , fontWeight: 'bold' }}>Calories</Text>
       </View>

       <View style={styles.container}>

        <StatusBar hidden/>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'center'}}>
          {data.map((p, i) => {
            return <Donut key={i} percentage={p.percentage} color={p.color} radius={p.radius} delay={500 + 100 * i} max={p.max}/>
          })}
        </View>

       </View>
       
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     justifyContent: 'center',
     paddingTop: Constants.statusBarHeight,
     marginTop: 70,
     padding: 8,
   },
   
 });
 