import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';
import { ProgressBar, Colors } from 'react-native-paper';


export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };


    get image() {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
                source={{ uri: illustration }}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                style={styles.image}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
                <Image
                    source={{ uri: illustration }}
                    style={styles.image}
                />
            );
    }

    render() {
        const { data: { title, subtitle, illustration }, even } = this.props;
        const uppercaseTitle = title ? (
            <Text
                style={[styles.title, even ? styles.titleEven : {}]}
                numberOfLines={2}
            >
                {title.toUpperCase()}
            </Text>
        ) : false;


        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => this.props.navigation.navigate({
                    routeName: 'GoalDetail',
                    params: {
                        goalId: this.props.index,
                        illustration: illustration
                    }
                })}
            >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    {this.image}
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    {uppercaseTitle}
                    <Text
                        style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                        numberOfLines={2}
                    >
                        {subtitle}
                    </Text>
                     <View style={styles.ProgressBarContainer}>
                        <Text style={styles.ProgressPercentage}>48%</Text>
                        <View style={styles.ProgressBarView}>
                            <ProgressBar style={{}} progress={0.48} color={Colors.blue400} />
                        </View>
                    </View> 
                    

                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.ButtonContainer}
                        onPress={() => this.props.navigation.navigate({
                            routeName: 'Payment',
                            params: {
                                goalId: this.props.index
                            }
                        })}
                    >
                        <View style={styles.Button}>
                            <Text style={styles.ButtonText}>捐助</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </TouchableOpacity>
        );
    }
}
