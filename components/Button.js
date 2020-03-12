import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const styles = StyleSheet.create({
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
        fontSize: 18,
    }
})

const Button = (props) => (
  <TouchableOpacity onPress={props.onPress} style={[
    styles.Button,
    props.buttonStyle
  ]}>
    <Text style={[
      styles.ButtonText,
      props.textStyle
    ]}>{props.children}</Text>
  </TouchableOpacity>
)
Button.protoType = {
  onPress: PropTypes.func,
  buttonStyle: PropTypes.any,
  textStyle: PropTypes.any,
}
export default Button;
