import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const StoreOwnerProductCard = ({
  product,
  handleCallUpdatePrice = () => {},
}) => {
  const [like, setLike] = useState(false);
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [seller, setSeller] = useState("");

  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    if (product) {
      let newName =
        product?.name?.length > 16
          ? product?.name?.substring(0, 16) + "..."
          : product?.name;
      let newSeller =
        product?.seller?.length > 12
          ? product?.seller?.substring(0, 12) + "..."
          : product?.seller;
      setSeller(newSeller);
      setName(newName);
    }
  }, [product]);

  return (
    <View style={styles.card_container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.card_title}>Xoài</Text>
      </View>
      <View>
        <Text style={styles.card_price}>50.000 VND / 1kg</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            handleCallUpdatePrice({ name: "Hello world" });
          }}
        >
          <View style={styles.button}>
            <Text style={styles.button_text}>Sửa giá</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.button_text}>Hết hàng</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.heart_icon}
        onPress={() => {
          setShowBar((pre) => !pre);
        }}
      >
        <Ionicons
          style={{ color: "black" }}
          name="ellipsis-horizontal-circle-outline"
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.out_product}>
        <Text style={styles.out_product_txt}>Hết hàng</Text>
      </View>
      {showBar && (
        <View style={styles.bar_container}>
          <TouchableOpacity style={[styles.bar_wrap, styles.bar_bottom]}>
            <Text style={styles.bar_txt}>Sửa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bar_wrap}>
            <Text style={styles.bar_txt}>Xóa</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  card_container: {
    width: "45%",
    backgroundColor: "rgba(234, 152, 91, 0.15)",
    marginHorizontal: "2.5%",
    marginVertical: 5,
    borderRadius: 20,
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    paddingVertical: 10,
  },
  card_image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  card_title: {
    fontFamily: "RobotoMedium",
    marginTop: 5,
    fontSize: 15,
    width: "90%",
  },
  card_price: {
    fontFamily: "RobotoMedium",
    marginTop: 5,
    fontSize: 13,
    width: "90%",
  },
  card_seller: {
    fontFamily: "RobotoMedium",
    marginTop: 3,
    fontSize: 12,
  },
  button: {
    paddingHorizontal: 9,
    height: 30,
    backgroundColor: "#E47070",
    marginHorizontal: 5,
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 10,
  },
  button_text: {
    color: "white",
    fontSize: 12,
  },
  heart_icon: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 30,
    height: 30,
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255,0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  out_product: {
    position: "absolute",
    top: 5,
    left: 5,
    width: 100,
    height: 30,
    borderRadius: 30,
    backgroundColor: "rgba(0,0,0,0.4)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  out_product_txt: {
    color: "white",
  },
  bar_container: {
    position: "absolute",
    top: 32,
    right: 5,
    width: 100,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    borderColor: "rgba(0,0,0,0.4)",
    borderWidth: 1,
  },
  bar_wrap: {
    width: "100%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  bar_txt: {
    color: "black",
  },
  bar_bottom: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.4)",
  },
});

export default StoreOwnerProductCard;
