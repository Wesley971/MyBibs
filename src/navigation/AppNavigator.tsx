import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddBottleScreen from '../screens/AddBottleScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ScanScreen from '../screens/ScanScreen';
import StatsScreen from '../screens/StatsScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ajouter" component={AddBottleScreen} />
      <Tab.Screen name="Historique" component={HistoryScreen} />
      <Tab.Screen name="Scanner" component={ScanScreen} />
      <Tab.Screen name="Statistiques" component={StatsScreen} />
    </Tab.Navigator>
  );
  
}
export type TabParamList = {
  Ajouter: undefined;
  Historique: undefined;
  Scanner: undefined;
  Statistiques: undefined;
};

