import { useEffect, useLayoutEffect, useState } from "react";
import { fetchUserContacts } from "../utility/Api";
import { View } from "react-native";
import { Appbar, Avatar, Text } from "react-native-paper";

export default function Users({navigation}) {
  const [User, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUserContacts()
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <Appbar.Action
          icon="cog"
          onPress={() => {
            navigation.navigate("Options");
          }}
        />
      ),
    });
  });
  const { name, avatar, phone } = User;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aqua",
      }}
    >
      <Avatar.Image source={{ uri: avatar }} size={150} />
      <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
        {" "}
        {name}{" "}
      </Text>
      <Text style={{ fontSize: 24, color: "white" }}> {phone} </Text>
    </View>
  );
}
