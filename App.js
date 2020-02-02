import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PaymentScreen from './screens/PaymentScreen';

import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.screen}>
        <PaymentScreen></PaymentScreen>
        <Footer />
     
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  footer: {
    
  }
});
