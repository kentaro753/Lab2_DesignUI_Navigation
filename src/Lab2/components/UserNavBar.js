import React from "react";
import { Appbar, Menu } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";
const UserNavBar = ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);
  return (
    <Appbar.Header style={{backgroundColor:"aqua",borderBottomWidth: 3,borderBottomColor: "gray",}}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {back ? null : (
        <Appbar.Action
          icon="cog"
          onPress={() => {
            navigation.navigate("Options");
          }}
        />
      )}
    </Appbar.Header>
  );
};
export default UserNavBar;
