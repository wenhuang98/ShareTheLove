import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PaymentScreen from './screens/PaymentScreen';
import CarouselExamplesScreen from './screens/CarouselExamplesScreen';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.screen}>
        
        <PaymentScreen></PaymentScreen> 
        {/*  <CarouselExamplesScreen /> */}
        
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
