import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const TabIcon = ({ color, Icon }) => {
  return (
    <View className="mt-2">
      <Icon
        width={24}
        height={24}
        stroke={color} // Set the fill color
        strokeWidth={2}
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FB137C",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            height: 84,
            borderTopWidth: 1,
          },
        }}
      >
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon color={color} focused={focused} Icon={icons.settings} />
            ),
          }}
        />
        <Tabs.Screen
          name="ai"
          options={{
            title: "Ai",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon color={color} focused={focused} Icon={icons.ai} />
            ),
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon color={color} focused={focused} Icon={icons.home} />
            ),
          }}
        />
        <Tabs.Screen
          name="contacts"
          options={{
            title: "Contacts",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon color={color} focused={focused} Icon={icons.contacts} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon color={color} focused={focused} Icon={icons.profile} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
