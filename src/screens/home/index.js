import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../../res/drawables';



export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={{ color: COLOR_WHITE }}>This is a mp3player app!</Text>

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
