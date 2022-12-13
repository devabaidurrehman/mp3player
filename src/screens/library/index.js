import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR_BLACK } from '../../../res/drawables';





export default function Library() {
    return (
        <View style={styles.container}>
            <Text>This is a library  screen!</Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
backgroundColor:COLOR_BLACK,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
