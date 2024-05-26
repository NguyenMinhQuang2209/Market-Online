import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Payment = () => {
    const navigation = useNavigation();
    const handleChangeAddress = () => {
        navigation.navigate("address");
    }
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.ship_address}>
          <View style={styles.ship_to_container}>
            <View style={styles.ship_to}>
              <Text style={styles.ship_to_txt}>Người nhận: Minh Quang</Text>
            </View>
            <TouchableOpacity onPress={handleChangeAddress}>
              <Text style={styles.ship_btn_txt}>Thay đổi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.address}>
            <Text style={styles.address_txt}>Địa chỉ: Thạch Thất Hà Nội</Text>
            <Text style={styles.address_txt}>Số điện thoại liên lạc: 00000000</Text>
          </View>
        </View>
        <View></View>
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_txt}>Xác nhận thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    marginBottom: 10,
    width: 250,
    height: 50,
    backgroundColor: "#E47070",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  btn_txt: {
    color: "white",
    fontSize: 18,
    fontFamily: "RobotoMedium",
  },
  ship_address: {
    minHeight: 80,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop:10,
    elevation: 3,
  },
  ship_to_container: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginBottom:15
  },
  ship_btn_txt:{
    color:"rgba(255,0,0,0.7)"
  },
  ship_to_txt:{
    fontSize:14,
    fontFamily:"RobotoMedium"
  },
  address_txt:{
    fontSize:14,
    marginTop:3
  }
});

export default Payment;
