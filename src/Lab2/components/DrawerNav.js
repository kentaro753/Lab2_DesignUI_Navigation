import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CusDrawerNav from "./CusDrawerNav";
import Contacts from "../screens/Contacts";
import Profile from "../screens/Profile";
import Favorites from "../screens/Favorites";
import Users from "../screens/Users";
import Options from "../screens/Options";
import { Appbar } from "react-native-paper";

export default function DrawerNav() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CusDrawerNav {...props} />}
      >
        <Drawer.Screen name="Contacts" component={Contacts} options={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
        }}/>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Favorites" component={Favorites} options={{
          headerStyle: {
            backgroundColor: "pink",
          },
        }}/>
        <Drawer.Screen name="Users" component={Users} options={{
          headerStyle: {
            backgroundColor: "aqua",
            borderBottomWidth: 3,
            borderBottomColor: "gray",
          },
        }}/>
        <Drawer.Screen name="Options" component={Options} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
