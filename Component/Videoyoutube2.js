import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

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
        height={300}
        play={playing}
        videoId={"2pLT-olgUJs"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      <Button
        title="15 Seconds"
        onPress={() => {
            playerRef.current.seekTo(15)
        }}
      />

    </View>
  );
}
