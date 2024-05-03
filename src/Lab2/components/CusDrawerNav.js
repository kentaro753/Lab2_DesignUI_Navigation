import { View } from "react-native";
import { Drawer } from "react-native-paper";

const CusDrawerNav = ({ navigation }) => {
  return (
    <Drawer.Section style={{ paddingTop: 40 }}>
      <Drawer.Item
        label="Contacts"
        icon={"format-list-bulleted"}
        onPress={() => navigation.navigate("Contacts")}
      />
      <Drawer.Item
        label="Favorites"
        icon={"heart"}
        onPress={() => navigation.navigate("Favorites")}
      />
      <Drawer.Item
        label="Users"
        icon={"account"}
        onPress={() => navigation.navigate("Users")}
      />
    </Drawer.Section>
  );
};

export default CusDrawerNav;
