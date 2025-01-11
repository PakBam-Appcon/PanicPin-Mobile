import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import "../global.css";

const index = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text className="text-red-400">index</Text>
      <Link href={"/home"}>Go to Home</Link>
    </View>
  );
};

export default index;
