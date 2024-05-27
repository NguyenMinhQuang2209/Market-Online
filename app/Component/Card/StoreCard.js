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
const StoreCard = ({ product }) => {
  const [like, setLike] = useState(false);

  const [name, setName] = useState("");
  const [seller, setSeller] = useState("");
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
      <View style={{ flexDirection: "row", position: "relative" }}>
        <Image
          style={styles.card_image}
          source={{
            uri: "https://res.cloudinary.com/sttruyen/image/upload/v1716255380/m4fomykpo7ycgccepee9.jpg",
          }}
        />
        <View style={styles.storeowner_image_container}>
          <Image
            style={styles.storeowner_image}
            source={{
              uri: "https://res.cloudinary.com/sttruyen/image/upload/v1711269323/Sttruyenxyz/u2a0bb4khx55wj1wzrdv.jpg",
            }}
          />
        </View>
      </View>
      <View>
        <Text style={styles.card_title}>Cửa hàng Bà Tám</Text>
      </View>
      <View>
        <Text style={styles.card_seller}>Tân Xã -Thạch thất - Hà Nội</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.button_text}>Xem cửa hàng</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <TouchableOpacity
        style={styles.heart_icon}
        onPress={() => {
          setLike((pre) => !pre);
        }}
      >
        <Ionicons
          style={{ color: like ? "red" : "black" }}
          name="heart-circle-outline"
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card_container: {
    width: "45%",
    height: 220,
    backgroundColor: "rgba(234, 152, 91, 0.15)",
    marginHorizontal: "2.5%",
    marginVertical: 5,
    borderRadius: 20,
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  card_image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    opacity: 0.5,
  },
  card_title: {
    fontFamily: "PlayfairMedium",
    marginTop: 5,
    fontSize: 15,
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
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  storeowner_image_container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  storeowner_image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255,255,255,0.7)",
    elevation:10
  },
});

export default StoreCard;
