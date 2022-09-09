// expo install @expo-google-fonts/comfortaa

import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

export default () => {
    let [fontsLoaded] = useFonts({
        Comfortaa_300Light,
        Comfortaa_400Regular,
        Comfortaa_500Medium,
        Comfortaa_600SemiBold,
        Comfortaa_700Bold,
    });

    let fontSize = 24;
    let paddingVertical = 6;

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text
                    style={{
                        fontSize,
                        paddingVertical,
                        // Note the quoting of the value for `fontFamily` here; it expects a string!
                        fontFamily: 'Comfortaa_300Light',
                    }}>
                    Comfortaa Light
                </Text>

                <Text
                    style={{
                        fontSize,
                        paddingVertical,
                        // Note the quoting of the value for `fontFamily` here; it expects a string!
                        fontFamily: 'Comfortaa_400Regular',
                    }}>
                    Comfortaa Regular
                </Text>

                <Text
                    style={{
                        fontSize,
                        paddingVertical,
                        // Note the quoting of the value for `fontFamily` here; it expects a string!
                        fontFamily: 'Comfortaa_500Medium',
                    }}>
                    Comfortaa Medium
                </Text>

                <Text
                    style={{
                        fontSize,
                        paddingVertical,
                        // Note the quoting of the value for `fontFamily` here; it expects a string!
                        fontFamily: 'Comfortaa_600SemiBold',
                    }}>
                    Comfortaa Semi Bold
                </Text>

                <Text
                    style={{
                        fontSize,
                        paddingVertical,
                        // Note the quoting of the value for `fontFamily` here; it expects a string!
                        fontFamily: 'Comfortaa_700Bold',
                    }}>
                    Comfortaa Bold
                </Text>
            </View>
        );
    }
};