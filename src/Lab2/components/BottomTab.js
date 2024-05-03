import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Contacts from "../screens/Contacts";
import StackNavCont from "./StackNavCont";
import StackNavFav from "./StackNavFav";
import Favorites from "../screens/Favorites";
import Users from "../screens/Users";
import { Icon } from "react-native-paper";
import StackNavUser from "./StackNavUser";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Contacts">
        <Tab.Screen
          name="Contacts"
          component={StackNavCont}
          options={{
            tabBarIcon: () => (
              <Icon source="format-list-bulleted" color="black" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={StackNavFav}
          options={{
            tabBarIcon: () => <Icon source="heart" color="black" size={26} />,
          }}
        />
        <Tab.Screen
          name="Users"
          component={StackNavUser}
          options={{
            tabBarIcon: () => <Icon source="account" color="black" size={26} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
