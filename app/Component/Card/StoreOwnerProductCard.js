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

const StoreOwnerProductCard = ({ product }) => {
  const [like, setLike] = useState(false);
  const navigation = useNavigation();

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

  const HandleLinkToStore = () => {
    navigation.navigate("(store)", {
      screen: "store",
    });
  };

  return (
    <View style={styles.card_container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.card_image}
          source={{
            uri: product?.image,
          }}
        />
      </View>
      <View>
        <Text style={styles.card_title}>{name}</Text>
      </View>
      <View>
        <Text style={styles.card_seller}>Người bán: {seller}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.button_text}>Sửa</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={HandleLinkToStore}>
          <View style={styles.button}>
            <Text style={styles.button_text}>Hết hàng</Text>
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
          style={{ color: "black" }}
          name="close-circle-outline"
          size={30}
        />
      </TouchableOpacity>
      <View style={styles.out_product}>
        <Text style={styles.out_product_txt}>Hết hàng</Text>
      </View>
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
  out_product_txt:{
    color:"white"
  }
});

export default StoreOwnerProductCard;