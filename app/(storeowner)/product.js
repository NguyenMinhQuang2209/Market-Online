import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import StoreOwnerProductCard from "../Component/Card/StoreOwnerProductCard";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../Component/Header/HomeHeader";
const product = () => {
  const navigation = useNavigation();
  const handleCreateNewProduct = () => {
    navigation.navigate("(product)", {
      screen: "create",
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView style={styles.card_container}>
        <View style={styles.card_wrap}>
          <StoreOwnerProductCard />
          <StoreOwnerProductCard />
          <StoreOwnerProductCard />
          <StoreOwnerProductCard />
          <StoreOwnerProductCard />
          <StoreOwnerProductCard />
          <StoreOwnerProductCard />
          <StoreOwnerProductCard />
          <StoreOwnerProductCard />
        </View>
      </ScrollView>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn} onPress={handleCreateNewProduct}>
          <Text style={styles.btn_txt}>Thêm mới</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  btn: {
    height: 45,
    width: 140,
    backgroundColor: "rgba(255,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  btn_txt: {
    color: "white",
    fontSize: 16,
    fontFamily: "RobotoMedium",
  },
  card_container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card_wrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default product;
