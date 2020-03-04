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

import Colors from '../constants/colors';
import { ENTRIES1 } from '../static/entries';


const GoalDetailScreen = props => {
    console.log('in goal detail');
    //console.log(props.navagation.getParam('goalId'))
    //console.log(props.navigation.state.params.illustration);

    const illustration = props.navigation.state.params.illustration;
    const goalId = props.navigation.state.params.goalId;
    const entryID = goalId - 2;
    console.log(goalId)//It starts with 2
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
        }}>
            <Image
                style={styles.Image}
                source={{ uri: illustration }}
            //resizeMode="contain"
            />
            {/* image source should come from clicked GoalList*/}
            <SafeAreaView style={styles.TextContainer}>
                <ScrollView>
                    <Text style={styles.TextArea}>
                        <Text style={styles.Title}>{ENTRIES1[entryID].title}</Text>{'\n'}{'\n'}
                        <Text style={styles.Date}>{ENTRIES1[entryID].date}</Text>{'\n'}{'\n'}
                        <Text >{ENTRIES1[entryID].description}</Text>
                    </Text>
                </ScrollView>
            </SafeAreaView>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.ButtonContainer}
                onPress={() => props.navigation.navigate({
                    routeName: 'Payment',
                    params: {
                        goalId: goalId
                    }
                })}
            >
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
    TextContainer: {
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