import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import PaymentScreen from './screens/PaymentScreen';
import CarouselExamplesScreen from './screens/CarouselExamplesScreen';
import Footer from './components/Footer';
import GoalDetailScreen from './screens/GoalDetailScreen';
import ThankYouScreen from './screens/ThankYouScreen';
import GoalListScreen from './screens/GoalsListScreen';
import MainNavigator from './navigation/MainNavigator';


const Stack = createStackNavigator();


export default function App() {
  return (
    <MainNavigator />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  footer: {

  }
});
