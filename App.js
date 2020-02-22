import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PaymentScreen from './screens/PaymentScreen';
import CarouselExamplesScreen from './screens/CarouselExamplesScreen';
import Footer from './components/Footer';
import GoalDetailScreen from './screens/GoalDetailScreen';
import ThankYouScreen from './screens/ThankYouScreen';
import GoalListScreen from './screens/GoalsListScreen';

export default function App() {
  return (
    <View style={styles.screen}>

       <PaymentScreen></PaymentScreen> 
      {/* <CarouselExamplesScreen /> */}
        {/* <GoalListScreen/> */}
        {/* <Footer /> */}
      {/* <GoalDetailScreen /> */}
      {/* <ThankYouScreen/> */}

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
