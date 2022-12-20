import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';

import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AudioContext } from '../../../context/audioprovider';
import { COLOR_BLACK } from '../../../res/drawables';






export default function Library() {
    const { audioFiles } = useContext(AudioContext);

    const renderItem = ({item})=>(
        <Text>{item.filename}</Text>
    );

    console.log(audioFiles);
    // let arr = audioFiles.map(function (d) {
    //     return d;
    // });



    return (
        <View style={styles.container}>
            <FlatList data={audioFiles} renderItem={renderItem} keyExtractor={(item)=>item.id} numColumns={1}></FlatList>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: COLOR_BLACK,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
