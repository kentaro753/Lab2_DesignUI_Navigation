import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Users from "../screens/Users";
import UserNavBar from "./UserNavBar";
import Options from "../screens/Options";

const Stack = createStackNavigator();
const StackNavUser = () => {
  return (
    <Stack.Navigator initialRouteName="Users">
      <Stack.Screen
        name="Users"
        component={Users}
        options={{
          headerStyle: {
            backgroundColor: "aqua",
            borderBottomWidth: 3,
            borderBottomColor: "gray",
          },
        }}
      />
      <Stack.Screen name="Options" component={Options} />
    </Stack.Navigator>
  );
};
export default StackNavUser;
