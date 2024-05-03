import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profile from "../screens/Profile";
import Favorites from "../screens/Favorites";

const Stack = createStackNavigator();
const StackNavFav = () => {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen name="Favorites" component={Favorites} options={{
          headerStyle: {
            backgroundColor: "pink",
          },
        }}/>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
export default StackNavFav;
