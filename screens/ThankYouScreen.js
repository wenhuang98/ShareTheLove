import React, { useState, Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Share
} from 'react-native';

import { ThankYouEntries } from '../static/thankyouEntries';
import Colors from '../constants/colors';


export default class ThankYouScreen extends Component{
    onShare = async () => {
        try {
          const result = await Share.share({
            message: '我剛與需要幫助的人分享了我的愛!\n#ShareTheLove是一個方便快速的捐款app。試著用一分的力量幫助十分需要幫助的人: https://',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    render()
    {
        return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
        }}>

            <Image
                style={styles.Image}
                source={ThankYouEntries.Hunger.image}
            //resizeMode="contain"
            />
            {/* image source should come from clicked GoalList*/}
            <Text style={styles.TextArea}>
                <Text style={styles.Title}>Thank you!</Text>{'\n'}
                <Text style={styles.SubTitle}>Your meals are on the way.</Text>{'\n'}{'\n'}
                <Text >{ThankYouEntries.Hunger.description}</Text>
            </Text>
            <TouchableOpacity activeOpacity={0.6} onPress={this.onShare} style={styles.ButtonContainer}>
                <View style={styles.Button}>
                    <Text style={styles.ButtonText}>分享給朋友</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
    }
    
};

const styles = StyleSheet.create({
    Image: {
        height: undefined,
        width: undefined,
        flex: 7
    },
    Title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    TextArea: {
        flex: 2,
        fontSize: 14,
        marginBottom: 20,
        marginTop: 40,
        marginHorizontal: 60,
        textAlign: 'center'
    },
    SubTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    ButtonContainer: {
        flex: 1
    },
    Button: {
        backgroundColor: Colors.buttonGive,
        paddingVertical: 12,
        paddingHorizontal: 30,
        marginHorizontal: 60,
        borderRadius: 2,
        alignItems: 'center'
    },
    ButtonText: {
        color: 'white',
        //fontFamily: 'open-sans',
        fontSize: 18,
    }
});

