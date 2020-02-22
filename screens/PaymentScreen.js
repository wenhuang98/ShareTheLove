import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../styles/PaymentSliderEntry.style';
import PaymentSliderEntry from '../components/PaymentSliderEntry';
import styles, { colors } from '../styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../static/entries';
import { scrollInterpolators, animatedStyles } from '../utils/animations';
import Colors from '../constants/colors';


const SLIDER_1_FIRST_ITEM = 1;

export default class PaymentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem({ item, index }) {
        return <PaymentSliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }


    momentumExample(number, title) {
        return (
            <View style={styles.paymentCardsContainer}>
                <Carousel
                    data={ENTRIES2}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideScale={0.95}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    activeAnimationType={'spring'}
                    activeAnimationOptions={{
                        friction: 4,
                        tension: 40
                    }}
                />
            </View>

        );
    }

    get gradient() {
        return (
            <LinearGradient
                colors={[colors.background1, colors.background2]}
                startPoint={{ x: 1, y: 0 }}
                endPoint={{ x: 0, y: 1 }}
                style={styles.gradient}
            />
        );
    }

    render() {
        const example2 = this.momentumExample(2, 'Momentum | Left-aligned | Active animation');

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.paymentContainer}>
                    <StatusBar
                        translucent={true}
                        backgroundColor={'rgba(0, 0, 0, 0.3)'}
                        barStyle={'light-content'}
                    />
                    <View style={paymentStyles.TextArea}>
                        <Text>
                            <Text style={paymentStyles.Title}>你小小的幫助，可以為他們的生活帶來巨大的改變</Text>{'\n'}{'\n'}
                        </Text>
                    </View>
                    <View style={styles.scrollview}>
                        <ScrollView
                            scrollEventThrottle={200}
                            directionalLockEnabled={true}
                        >
                            {example2}
                        </ScrollView>
                    </View>
                    <TouchableOpacity activeOpacity={0.6} style={paymentStyles.ButtonContainer}>
                        <View style={paymentStyles.Button}>
                            <Text style={paymentStyles.ButtonText}>捐款</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
};

const paymentStyles = StyleSheet.create({
    TextArea: {
        flex: 6,
        marginBottom: 20,
        marginTop: 40,
        marginHorizontal: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FFFFFF'
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
})
