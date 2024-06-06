import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const order = () => {
  const route = useRoute();
  const data = route.params;
  console.log(data);
  return (
    <View>
      <Text>order</Text>
    </View>
  );
};

export default order;
