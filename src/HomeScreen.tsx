import React from "react";
import { Alert, Button, Image, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {photoUri} = route.params || {};
  return (
    <View>
      <View>
        <Image style={{ width: 100, height: 100 }} source={{ uri: photoUri}} />
      </View>
    </View>
  );
}

