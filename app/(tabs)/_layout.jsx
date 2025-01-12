import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants/icons";

const TabIcon = ({ color, Icon, name, focused }) => {
  return (
    <View className="mt-2 gap-2">
      <Icon
        width={84}
        height={24}
        stroke={color} // Set the fill color
        strokeWidth={2}
      />
      <Text
        style={{ color: color }}
        className={`${
          focused ? "font-semibold" : "font-regular"
        } text-xs text-center`}
      >
        {name}
      </Text>
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
            paddingTop: 12,
            borderTopWidth: 1,
            borderTopColor: "#161622",
          },
        }}
      >
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                color={color}
                focused={focused}
                Icon={icons.settings}
                name={"Settings"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="ai"
          options={{
            title: "Ai",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                color={color}
                focused={focused}
                Icon={icons.ai}
                name={"Ai"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                color={color}
                focused={focused}
                Icon={icons.home}
                name={"Home"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="contacts"
          options={{
            title: "Contacts",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                color={color}
                focused={focused}
                Icon={icons.contacts}
                name={"Contacts"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                color={color}
                focused={focused}
                Icon={icons.profile}
                name={"Profile"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
