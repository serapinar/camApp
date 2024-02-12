import React from "react";
import { Alert, Button, Image, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";


interface RouteProps {
  uri: string;
}
export default function HomeScreen() {
  const {params } = useRoute<RouteProp<RouteProps>>();
  const navigation = useNavigation();
  const camAlert = () => {
    Alert.alert(
      'Dikkat',
      'Fotoğraf gönderiliyor',
      [
        {
          text: 'fotoğrafı gönder',
          onPress: () => navigation.navigate('First'),
        },
        {
          text: 'yeni fotoğraf çek',
          onPress: () => console.log('hello'),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View>
      <View>
        <Text>Fotoğraf çekildi!</Text>
        <Text>çekilen fotoğraf</Text>
        <Image style={{ width: 100, height: 100 }} source={{ uri: params.uri }} />
      </View>
      <Button title={"tıkla"} onPress={camAlert} />
    </View>
  );
}

