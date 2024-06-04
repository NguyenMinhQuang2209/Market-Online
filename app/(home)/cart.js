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
import React, { useCallback, useState } from "react";
import { Link, useNavigation } from "expo-router";
import HomeHeader from "../Component/Header/HomeHeader";
import CartCardBig from "../Component/Card/CartCard";
import Selection from "../Component/Select/Selection";
import { SafeAreaView } from "react-native-safe-area-context";
const windowWidth = Dimensions.get("window").width;
const cart = () => {
  const navigation = useNavigation();

  const [selectionDatas, setSelectionDatas] = useState([]);
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState([]);
  const [pickups, setPickups] = useState("");
  const handleOrder = () => {
    navigation.navigate("(payment)", {
      screen: "payment",
    });
  };

  const handleSelectionItem = useCallback((item) => {
    setPickups(item);
    setActive(true);
  });

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView style={styles.head_container}>
        <CartCardBig
          onSelection={handleSelectionItem}
        />
        <CartCardBig
          onSelection={handleSelectionItem}
        />
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
              <Text style={styles.foot_btn_txt}>Đặt hàng tất cả</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <Selection
          data={selectionDatas}
          setActive={setShow}
          current={current}
          setCurrent={setCurrent}
          isMultiple={false}
          useSearch={true}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  head_container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.08)",
    padding: 10,
  },
  foot_container: {
    height: 120,
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
