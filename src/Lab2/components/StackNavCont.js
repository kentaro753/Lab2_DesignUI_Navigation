import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../screens/Profile";
import Contacts from "../screens/Contacts";

const Stack = createStackNavigator();
const StackNavCont = () => {
  return (
    <Stack.Navigator initialRouteName="Contacts">
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
export default StackNavCont;
