import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
// Import Icons from MaterialIcons
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#0061ff1a',
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"  // Change the icon dynamically
              size={30}
              color={focused ? "#0061ff" : "#000"}
            />
          ),
        }}
      />

      {/* Explore Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="search" // Change the icon dynamically
              size={30}
              color={focused ? "#0061ff" : "#000"}

            />
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? "person" : "person-outline"} // Change the icon dynamically
              size={30}
              color={focused ? "#0061ff" : "#000"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
