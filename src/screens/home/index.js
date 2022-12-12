import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR_BLACK, COLOR_ROSE_WHITE } from '../../../res/drawables';
import TrackPlayer, {Capability, Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvents} from 'react-native-track-player';





export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={{color:COLOR_ROSE_WHITE}}>This is a mp3player app!</Text>
      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
