import React from 'react';
import { View, Text} from 'react-native';

const PaymentScreen = props => {
    return (
        <View style={styles.container}>
          <Text>PaymentScreen</Text>
        </View>
      );
}

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  