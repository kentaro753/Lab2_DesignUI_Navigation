import { useEffect, useState } from "react";
import { fetchContacts } from "../utility/Api";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Avatar,Text } from "react-native-paper";

export default function Favorites({navigation}) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchContacts()
      .then((data) => {
        setContacts(data);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError(true);
      });
  }, []);
  const renderItem = ({ item }) => {
    const { avatar } = item;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile", { contact: item })}
        style={{ padding: 20 }}
      >
        <Avatar.Image source={{ uri: avatar }} size={80} />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {loading && <ActivityIndicator size={40} color="red" />}
      {error && <Text variant="headlineLarge">Error loading...</Text>}
      <FlatList
            data={contacts}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={3}
            contentContainerStyle={{alignItems:"center"}}
            />
    </View>
  );
}
