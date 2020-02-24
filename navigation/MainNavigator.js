import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GoalDetailScreen from '../screens/GoalDetailScreen';
import ThankYouScreen from '../screens/ThankYouScreen';
import GoalListScreen from '../screens/GoalsListScreen';

const MainNavigator = createStackNavigator({
  GoalList: GoalListScreen,
  GoalDetail: GoalDetailScreen,
  ThankYou: ThankYouScreen
});

export default createAppContainer(MainNavigator);