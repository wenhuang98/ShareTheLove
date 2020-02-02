import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.screen}>
      
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
