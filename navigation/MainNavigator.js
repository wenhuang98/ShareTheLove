import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GoalDetailScreen from '../screens/GoalDetailScreen';
import ThankYouScreen from '../screens/ThankYouScreen';
import GoalListScreen from '../screens/GoalsListScreen';
import PaymentScreen from '../screens/PaymentScreen';

const navigationOptions = {
  headerTransparent: true,
  headerTitle: '',
  headerTintColor: 'white',
  headerBackTitle: ' '
}

const MainNavigator = createStackNavigator({
  Payment: PaymentScreen,
  GoalList: GoalListScreen,
  GoalDetail: GoalDetailScreen,
  ThankYou: ThankYouScreen
},{
  defaultNavigationOptions: navigationOptions
});

export default createAppContainer(MainNavigator);