import axios from 'axios';
import qs from 'query-string';
import Config from '../constants/config';

export default {
  async createPaymentIntent(amount, currency='TWD') {
    // TODO: 这部分功能需要放到 server 端执行
    let res = await axios.request({
      url: 'https://api.stripe.com/v1/payment_intents',
      method: 'post',
      headers: {
        Authorization: `Bearer ${Config.STRIPE_SECRET_API_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        amount: amount * 100,   // 将金额单位转为'分' https://stripe.com/docs/currencies#zero-decimal
        currency,
        'payment_method_types[]': 'card',
      }),
    })
    return res.data
  },
  async createPaymentMethod(cardNumber, cardCvc, expMonth, expYear) {
    // TODO: 这部分功能需要放到 server 端执行
    let res = await axios.request({
      url: 'https://api.stripe.com/v1/payment_methods',
      method: 'post',
      headers: {
        Authorization: `Bearer ${Config.STRIPE_SECRET_API_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        type: 'card',
        'card[number]': cardNumber,
        'card[exp_month]': expMonth,
        'card[exp_year]': expYear,
        'card[cvc]': cardCvc,
      })
    })
    return res.data
  },
  async confirmCardPayment(paymentIntentId, clientSecret, paymentMethodId) {
    // 使用信用卡进行支持
    let res = await axios.request({
      url: `https://api.stripe.com/v1/payment_intents/${paymentIntentId}/confirm`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${Config.STRIPE_PUBLIC_API_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        client_secret: clientSecret,
        payment_method: paymentMethodId,
      })
    })
    return res.data
  }
}
