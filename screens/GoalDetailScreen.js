import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';

import { GoalDetailEntries } from '../static/goalDetailEntries';
import Colors from '../constants/colors';

const GoalDetailScreen = props => {
    console.log('in goal detail');
    //console.log(props.navagation.getParam('goalId'))
    console.log(props.navigation.state.params.goalId);
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
        }}>
            <Image
                style={styles.Image}
                source={GoalDetailEntries.Hunger.image}
            //resizeMode="contain"
            />
            {/* image source should come from clicked GoalList*/}
            <SafeAreaView style={styles.TextContainer}>
                <ScrollView>
                    <Text style={styles.TextArea}>
                        <Text style={styles.Title}>{GoalDetailEntries.Hunger.title}</Text>{'\n'}{'\n'}
                        <Text style={styles.Date}>{GoalDetailEntries.Hunger.date}</Text>{'\n'}{'\n'}
                        <Text >{GoalDetailEntries.Hunger.description}</Text>
                    </Text>
                </ScrollView>
            </SafeAreaView>
            <TouchableOpacity activeOpacity={0.6} onPress={''} style={styles.ButtonContainer}>
                <View style={styles.Button}>
                    <Text style={styles.ButtonText}>捐助</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    Image: {
        height: undefined,
        width: undefined,
        flex: 3
    },
    Title: {
        fontSize: 30
    },
    Date: {
        fontSize: 12,
    },
    TextContainer:{
        flex: 7,
        marginVertical: 20,
        marginHorizontal: 18
    },
    TextArea: {
        fontSize: 16,
        
    },
    ButtonContainer: {
        flex: 1
    },
    Button: {
        backgroundColor: Colors.buttonGive,
        paddingVertical: 12,
        paddingHorizontal: 30,
        marginHorizontal: 18,
        borderRadius: 2,
        alignItems: 'center'
    },
    ButtonText: {
        color: 'white',
        fontSize: 18,
    }
});

export default GoalDetailScreen;