import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, TouchableOpacity, Modal, Text } from 'react-native';
import { CreditCardInput } from "react-native-input-credit-card";
import _ from 'lodash';
import Button from './Button';


export default class CreditCardInputModal extends Component {
  static propTypes = {
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    visible: PropTypes.bool,
  }

  static defaultProps = {
    visible: false,
  }

  state = {
    valid: false,
    values: {}
  }

  handleChange = (form) => {
    this.setState({valid: form.valid, values: form.values})
  }
  handleSubmit = () => {
    // 保存信息
    if (this.state.values) {
      let values = _.assign({}, this.state.values)
      values.number = values.number.replace(/\s/g, '')    // 移除卡号之间的空格
      let [expMonth, expYear] = values.expiry.split('/')
      values.expMonth = expMonth
      values.expYear = expYear
      this.props.onSubmit && this.props.onSubmit(values);
    }
  }

  render() {
    return (
      <Modal visible={this.props.visible}>
        <SafeAreaView style={{
          flex: 1,
          flexDirection: 'column',
        }}>
          <CreditCardInput onChange={this.handleChange} />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Button onPress={this.props.onCancel}>取消</Button>
            <Button onPress={this.handleSubmit}>保存</Button>
          </View>
        </SafeAreaView>
      </Modal>
    )
  }
}
