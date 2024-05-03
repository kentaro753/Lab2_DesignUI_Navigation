import { useEffect, useState } from "react";
import { fetchRandomContacts } from "../utility/Api";
import { View } from "react-native";
import { Avatar, Divider, Icon, Text } from "react-native-paper";
export default function Options({ route }) {
  return (
    <View style={{ flex: 1 }}>
      <Text
        variant="headlineLarge"
        style={{
          fontWeight: "bold",
          padding: 10,
          fontSize: 18,
          paddingStart: 20,
        }}
      >
        Update Profile
      </Text>
      <Divider />
      <Text
        variant="headlineLarge"
        style={{
          fontWeight: "bold",
          padding: 10,
          fontSize: 18,
          paddingStart: 20,
        }}
      >
        Change Language
      </Text>
      <Divider />
      <Text
        variant="headlineLarge"
        style={{
          fontWeight: "bold",
          padding: 10,
          fontSize: 18,
          paddingStart: 20,
        }}
      >
        Sign out
      </Text>
    </View>
  );
}
