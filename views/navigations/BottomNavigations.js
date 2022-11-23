import React from 'react'
import "react-native-gesture-handler"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../data/colors/colors';
import { View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CategoryFoods from '../screens/CategoryFoods';

const Tab = createBottomTabNavigator();

export default function BottomNavigations() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: [
          {
            height: 60,
            borderTopWidth: 0,
            elevation: 0,
          },
        ],
        tabBarShowLabel: false,
        tabBarActiveTintColor:COLORS.dark
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="favorite-outline" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: COLORS.yellow,
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
                borderWidth: 2,
                top: -25,
                elevation: 5,
              }}
            >
              <Icon name="local-mall" color={COLORS.white} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}