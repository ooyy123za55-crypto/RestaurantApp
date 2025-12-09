import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './screens/HomeScreen';
import MainDishesScreen from './screens/MainDishesScreen';
import DessertsScreen from './screens/DessertsScreen';
import DrinksScreen from './screens/DrinkScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#ff6f00',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            backgroundColor: '#fff',
            paddingBottom: 8,
            paddingTop: 8,
            height: 65,
            borderTopWidth: 1,
            borderTopColor: '#ff30b2',
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
            marginTop: 2,
          },
          headerStyle: {
            backgroundColor: '#ff9800',
            elevation: 5,
            shadowOpacity: 0.3,
            shadowRadius: 5,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      >

       
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>🏠</Text>
            ),
            headerTitle: 'ร้านอาหารอร่อย',
          }}
        />

       
        <Tab.Screen
          name="MainDishes"
          component={MainDishesScreen}
          options={{
            tabBarLabel: 'Main Dishes',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>🍽️</Text>
            ),
            headerTitle: 'เมนูอาหารจานหลัก',
          }}
        />

       
        <Tab.Screen
          name="Desserts"
          component={DessertsScreen}
          options={{
            tabBarLabel: 'Desserts',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>🍰</Text>
            ),
            headerTitle: 'เมนูของหวาน',
          }}
        />
        <Tab.Screen
          name="Drink"
          component={DrinksScreen}
          options={{
            tabBarLabel: 'Drink',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>🍰</Text>
            ),
            headerTitle: 'น้ำ',
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>  
  );
}
