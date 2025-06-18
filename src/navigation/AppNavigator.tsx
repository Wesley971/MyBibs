import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AddBottleScreen from "../screens/AddBottleScreen";
import HistoryScreen from "../screens/HistoryScreen";
import StatsScreen from "../screens/StatsScreen";
import ScanScreen from "../screens/ScanScreen";

// Définition des types pour la navigation
export type TabParamList = {
  Ajouter: undefined;
  Historique: undefined;
  Statistiques: undefined;
  Scanner: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
          name="Ajouter" 
          component={AddBottleScreen} 
          options={{ 
            title: "My Bibs", 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="baby-bottle-outline" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name="Historique" 
          component={HistoryScreen} 
          options={{ 
            title: "Historique", 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="history" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen 
          name="Statistiques" 
          component={StatsScreen} 
          options={{ 
            title: "Statistiques", 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen 
          name="Scanner" 
          component={ScanScreen} 
          options={{ 
            title: "Scan", 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="barcode-scan" color={color} size={size} />
            )
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
