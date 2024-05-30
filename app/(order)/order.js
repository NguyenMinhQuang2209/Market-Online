import { View, Text } from "react-native";
import React from "react";
import DefaultHeader from "../Component/Header/DefaultHeader";
import { useRoute } from "@react-navigation/native";
const order = () => {
  const route = useRoute();
  const { title, type } = route.params;
  return (
    <View>
      <DefaultHeader title={title} />
      <Text>order</Text>
    </View>
  );
};

export default order;
