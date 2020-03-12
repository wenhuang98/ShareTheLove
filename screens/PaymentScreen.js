import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity, Image, ImageBackground, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import _ from 'lodash';
import { sliderWidth, itemWidth } from '../styles/PaymentSliderEntry.style';
import PaymentSliderEntry from '../components/PaymentSliderEntry';
import styles, { colors } from '../styles/index.style';
import { ENTRIES2 } from '../static/entries';
import Colors from '../constants/colors';
import CreditCardInputModal from '../components/CreditCardInputModal';
import StripeApi from '../api/stripe'

export default class PaymentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          creditCardModalVisible: false,
        }
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
                    activeSlideAlignment={'center'}
                    removeClippedSubviews={false}
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

    showCreditCardModal = () => {
      this.setState({creditCardModalVisible: true})
    }
    hideCreditCardModal = () => {
      this.setState({creditCardModalVisible: false})
    }

    handlePayment = async () => {
      let creditCard = await this.getCreditCard()
      if (_.isEmpty(creditCard)) {
        // 当前还没有信用卡信息，则提示用户输入
        this.showCreditCardModal()
        return
      }

      try {
        let paymentMethodId = await this.getPaymentMethodId(creditCard)
        let paymentIntent = await StripeApi.createPaymentIntent(50)

        let ret = await StripeApi.confirmCardPayment(
          paymentIntent.id,
          paymentIntent.client_secret,
          paymentMethodId
        )
        if (ret.status === 'succeeded') {
          // 未支付成功
        }
      } catch (error) {
        // TODO: 支付出错
        console.log('payment error:', error)
      }
    }
    handleSubmitCreditCard = async (data) => {
      // 保存用户输入的信用卡并进行支付
      await this.saveCreditCard(data)
      this.hideCreditCardModal()

      await this.handlePayment()
    }

    getPaymentMethodId = async (creditCard) => {
      // 获取stripe的支付方式
      let key = 'payment:paymentMethodId'
      let paymentMethodId = await AsyncStorage.getItem(key)
      if (!paymentMethodId) {
        let res = await StripeApi.createPaymentMethod(
          creditCard.number,
          creditCard.cvc,
          creditCard.expMonth,
          creditCard.expYear
        )
        paymentMethodId = res.id
        await AsyncStorage.setItem(key, paymentMethodId)
      }
      return paymentMethodId
    }

    getCreditCard = async () => {
      // 从本地存储中获取信用卡信息
      try {
        let data = JSON.parse(await AsyncStorage.getItem('payment:creditCard'))
        return data
      } catch (e) {
        return {}
      }
    }
    saveCreditCard = async (data) => {
      // 保存信用卡信息支本地
      await AsyncStorage.setItem('payment:creditCard', JSON.stringify(data))
    }

    render() {
        const example2 = this.momentumExample(2, 'Momentum | Left-aligned | Active animation');

        console.log('in payment');
        //console.log(this.props.navagation.getParam('goalId'))
        console.log(this.props.navigation.state.params.goalId);

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.paymentContainer}>
                    <ImageBackground style={styles.backgroundImage} source={{uri:'https://cw1.tw/CW/opinion/images/common/old/shutterstock_713914813.jpg'}}>
                        <View style={styles.overlay}>
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
                        <TouchableOpacity activeOpacity={0.6} style={paymentStyles.ButtonContainer} onPress={this.handlePayment}>
                            <View style={paymentStyles.Button}>
                                <Text style={paymentStyles.ButtonText}>捐款</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <CreditCardInputModal
                    visible={this.state.creditCardModalVisible}
                    onCancel={this.handleHideCreditCardModal}
                    onSubmit={this.handleSubmitCreditCard}
                />
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
