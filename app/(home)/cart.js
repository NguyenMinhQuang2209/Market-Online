import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";
import HomeHeader from "../Component/Header/HomeHeader";
import CartCardBig from "../Component/Card/CartCard";

const windowWidth = Dimensions.get("window").width;
const cart = () => {
  const navigation = useNavigation();
  const handleOrder = () => {
    navigation.navigate("(payment)", {
      screen: "payment",
    });
  };
  return (
    <View>
      <HomeHeader />
      <ScrollView style={styles.head_container}>
        <CartCardBig />
        <CartCardBig />
      </ScrollView>
      <View style={styles.foot_container}>
        <View style={styles.foot_total_container}>
          <View style={styles.food_total}>
            <Text style={styles.foot_total_txt}>Tổng số tiền:</Text>
            <Text style={styles.foot_total_txt}>20.000VND</Text>
          </View>
        </View>
        <View style={styles.foot_btn_container}>
          <TouchableOpacity onPress={handleOrder}>
            <View style={styles.foot_btn}>
              <Text style={styles.foot_btn_txt}>Thanh toán</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head_container: {
    height: "80%",
    backgroundColor: "rgba(0,0,0,0.08)",
    padding: 10,
  },
  foot_container: {
    height: "20%",
  },
  foot_total_container: {
    height: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  foot_btn_container: {
    height: "50%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 10,
  },
  foot_btn: {
    height: 40,
    width: windowWidth - 80,
    backgroundColor: "#E47070",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  foot_btn_txt: {
    color: "white",
    fontSize: 15,
    fontFamily: "RobotoBold",
  },
  food_total: {
    marginHorizontal: 20,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    borderBlockColor: "rgba(0,0,0,0.6)",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  foot_total_txt: {
    fontSize: 17,
    fontFamily: "RobotoBold",
  },
  txt_input: {
    paddingHorizontal: 5,
    minHeight: 20,
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    marginRight: 3,
  },
});
export default cart;
