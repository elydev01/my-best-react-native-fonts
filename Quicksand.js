// expo install @expo-google-fonts/quicksand

import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

export default () => {
    let [fontsLoaded] = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_600SemiBold,
        Quicksand_700Bold,
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
                        fontFamily: 'Quicksand_300Light',
                    }}>
                    Quicksand Light
                </Text>

                <Text
                    style={{
                        fontSize,
                        paddingVertical,
                        // Note the quoting of the value for `fontFamily` here; it expects a string!
                        fontFamily: 'Quicksand_400Regular',
                    }}>
                    Quicksand Regular
                </Text>

                <Text
                    style={{
                        fontSize,
                        paddingVertical,
                        // Note the quoting of the value for `fontFamily` here; it expects a string!
                        fontFamily: 'Quicksand_500Medium',
                    }}>
                    Quicksand Medium
                </Text>

                <Text
                    style={{
                        fontSize,
                        paddingVertical,
                        // Note the quoting of the value for `fontFamily` here; it expects a string!
                        fontFamily: 'Quicksand_600SemiBold',
                    }}>
                    Quicksand Semi Bold
                </Text>

                <Text
                    style={{
                        fontSize,
                        paddingVertical,
                        // Note the quoting of the value for `fontFamily` here; it expects a string!
                        fontFamily: 'Quicksand_700Bold',
                    }}>
                    Quicksand Bold
                </Text>
            </View>
        );
    }
};
