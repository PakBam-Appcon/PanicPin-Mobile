import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  return (
    <SafeAreaView className="px-6 bg-bg-color h-full w-full">
      <Text className="text-4xl mt-7 font-medium text-white">Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;
