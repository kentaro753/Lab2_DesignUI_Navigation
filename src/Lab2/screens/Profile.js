import { useEffect, useState } from "react";
import { fetchRandomContacts } from "../utility/Api";
import { View } from "react-native";
import { Avatar, Icon, Text } from "react-native-paper";
import DetailListItem from "./DetailListItem";
export default function Profile({ route }) {
  const { avatar, name, email, phone, cell } = route.params.contact;
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "aqua",
        }}
      >
        <Avatar.Image source={{ uri: avatar }} size={100} />
        <Text variant="headlineLarge" style={{ color: "white" }}>
          {" "}
          {name}
        </Text>
        <Text>
          <Icon source={"phone"} />
          {phone}
        </Text>
      </View>
      <View>
        <DetailListItem icon="email" label="Email" value={email} />
        <DetailListItem icon="phone" label="Work" value={phone} />
        <DetailListItem icon="cellphone" label="Personal" value={cell} />
      </View>
    </View>
  );
}
