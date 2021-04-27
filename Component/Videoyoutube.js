import React, { useState, useCallback, useRef } from "react";
import { Image, View, Alert, StyleSheet, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Play from '../images/Play.jpg'
import Pause from '../images/Pause.jpg'
import Forward from '../images/Forward.jpg'
import Finish from '../images/Finish.jpg'
export default function App() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const playerRef = useRef();
  return (
    <View>
      <YoutubePlayer
        ref={playerRef}
        height={235}
        play={playing}
        videoId={"j64BBgBGNIU"}
        onChangeState={onStateChange}
        initialPlayerParams={{
          preventFullScreen: false,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0
        }}


      />

      {/* <View style={styles.Button}>
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        <Button 
          title="15 Seconds"
          onPress={() => {
              playerRef.current.seekTo(15)
          }}
        />
      </View> */}


      <View style={styles.ControlContainer}>
        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity onPress={togglePlaying}>
            <View style={styles.ControlItem1}>

              <Image source={Play} style={styles.SizeImage}  ></Image>


            </View>
          </TouchableOpacity>
          
          <View style={{width: 20, height: 200, backgroundColor: 'black' , marginLeft: -85, marginRight: 20}}></View>

          <TouchableOpacity onPress={togglePlaying} >
            <View style={styles.ControlItem2}>
              <Image source={Pause} style={styles.SizeImage}  ></Image>

            </View>
          </TouchableOpacity>

          
        </View>

        <View style={{ width: 210, height: 20, backgroundColor: 'black' , marginTop: -110, marginLeft: 70 }}></View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>

          <TouchableOpacity onPress={() => { playerRef.current.seekTo(15) }}  >
            <View style={styles.ControlItem3}>

              <Image source={Forward} style={styles.SizeImage}></Image>

            </View>
          </TouchableOpacity>
          
          <TouchableOpacity  >
            <View style={styles.ControlItem4}>
              <Image source={Finish} style={styles.SizeImage} ></Image>

            </View>
          </TouchableOpacity>
          



        </View>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  
  ControlContainer: {
    marginLeft: 15,
    marginTop: 0,
    width: 350,
    height: 350,
    flexDirection: 'column'
  },
  ControlItem1: {
    marginLeft: 70,
    marginTop: 0,

    width: 180,
    height: 180
  },
  ControlItem2: {
    marginLeft: -10,
    marginTop: 0,

    width: 180,
    height: 180
  },
  ControlItem3: {
    marginLeft: 70,
    marginTop: 0,

    width: 180,
    height: 180
  },
  ControlItem4: {
    marginLeft: -55,
    marginTop: 0,

    width: 180,
    height: 180
  },
  SizeImage: {
    width: '45%',
    height: '45%',
    borderRadius: 20
  }
})


