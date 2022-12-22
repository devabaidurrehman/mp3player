import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';

import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { AudioContext } from '../../../context/audioprovider';
import { COLOR_BLACK, COLOR_WHITE, COLOR_ASH_GREY} from '../../../res/drawables';






export default function Library() {
    const { audioFiles } = useContext(AudioContext);
    console.log(audioFiles);



    return (
        
        <ScrollView style={styles.container}>
            <StatusBar style='light' backgroundColor='#000000'/>
            <View>
                {audioFiles.assets.map(item =>
                    <Text style={styles.itemText} key={item.id}>{item.filename}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_BLACK,
        marginTop:30
    },
    itemText:{
        borderBottomWidth:1,
        borderBottomColor:COLOR_ASH_GREY,
        color:COLOR_WHITE,
        padding:8
    }
});
