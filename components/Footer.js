import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Colors from '../constants/colors';

const Footer = props => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.5}>
                <Image
                    source={
                        require('../assets/love_give.png')
                    }
                    style={styles.imageIconStyle}
                />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
                <Image
                    source={
                        require('../assets/profile.png')
                    }
                    style={styles.imageIconStyle}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 90,
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    goal: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FCFCFC',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        width: 40,
        borderRadius: 5,
        margin: 5,
    },
    imageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    }
});

export default Footer;
