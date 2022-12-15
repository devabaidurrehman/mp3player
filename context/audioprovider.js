import React, { useEffect, createContext } from "react";
import { Alert } from "react-native";
import * as MediaLibrary from 'expo-media-library'


export const AudioContext = createContext()

const AudioPlayer = (props) => {

    permissionAlert = () => {
        Alert.alert("Permission Required", "This app need approval to read audio files for local storage",
            [{
                test: "I am ready",
                onPress: () => this.getPermissions()
            },
            {
                text: "cancel",
                onPress: () => this.getPermissions()
            }
            ])
    }

    getAudioFiles = async () => {
        let media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio'
        });

         media = await MediaLibrary.getAssetsAsync({
            mediaType: 'audio',
            first:media.totalCount
        });

        //console.log(media.assets.length)
    }

    getPermissions = async () => {
        const permission = await MediaLibrary.getPermissionsAsync()

        if (permission.granted) {
            //get all audio file
            getAudioFiles()
        }

        if (!permission.granted && permission.canAskAgain) {
            const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync();
            if (status === 'denied' && canAskAgain) {
                //user must allow the permission
                this.permissionAlert()
            }
            if (status === 'granted') {
                //get all audio files
                getAudioFiles()
            }
            if (status === 'denied' && !canAskAgain) {
                //display error
            }
        }
    }

    useEffect(() => {
        getPermissions()
    }, [])


    return (
      <AudioContext.Provider value={{}}>
        {props.children}
      </AudioContext.Provider>
    )
}

export default AudioPlayer