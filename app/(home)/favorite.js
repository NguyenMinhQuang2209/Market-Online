import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import ProductCard from "../Component/Card/ProductCard";
import StoreCard from "../Component/Card/StoreCard";
import HomeHeader from "../Component/Header/HomeHeader";
const favorite = () => {
  const [current, setCurrent] = useState("");

  const changeCurrent = (newState) => {
    setCurrent(newState);
  };

  let products = [
    {
      image:
        "https://res.cloudinary.com/sttruyen/image/upload/v1716255380/m4fomykpo7ycgccepee9.jpg",
      name: "Rau ngót cà chua chín chưa",
      seller: "Bà bảy bán bóng",
    },
    {
      image:
        "https://res.cloudinary.com/sttruyen/image/upload/v1716257351/x2v7kcn2qnm2odi6gdrc.jpg",
      name: "Thịt lợn",
      seller: "Bà tám",
    },
    {
      image:
        "https://res.cloudinary.com/sttruyen/image/upload/v1716257377/fqvhfuqrriaadrq1scmo.jpg",
      name: "Cá thu",
      seller: "Bà chín",
    },
  ];

  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.head_container}>
        <TouchableOpacity
          onPress={() => {
            changeCurrent("");
          }}
          style={[styles.head_wrap, !current && styles.active]}
        >
          <View>
            <EvilIcons
              style={!current && styles.active_txt}
              name="archive"
              size={30}
            />
          </View>
          <Text style={[styles.head_item_txt, !current && styles.active_txt]}>
            Sản phẩm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            changeCurrent("store");
          }}
          style={[
            styles.head_wrap,
            styles.head_wrap_left,
            current == "store" && styles.active,
          ]}
        >
          <View>
            <Ionicons
              style={current == "store" && styles.active_txt}
              name="storefront-outline"
              size={23}
            />
          </View>
          <Text
            style={[
              styles.head_item_txt,
              current == "store" && styles.active_txt,
            ]}
          >
            Cửa hàng
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ScrollView contentContainerStyle={styles.card_container}>
          {!current &&
            products?.map((item, index) => (
              <ProductCard key={index + "favoriteProduct"} product={item} />
            ))}
          {current == "store" && <StoreCard />}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  head_container: {
    flexDirection: "row",
    height: 52,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    marginLeft: "5%",
    marginTop: 15,
  },
  head_wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  head_wrap_left: {
    borderLeftColor: "rgba(0,0,0,0.5)",
    borderLeftWidth: 1,
  },
  head_item_txt: {
    fontSize: 14,
    fontFamily: "RobotoMedium",
  },
  active: {
    backgroundColor: "rgba(255,0,0,0.45)",
  },
  active_txt: {
    color: "white",
  },
  card_container: {
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default favorite;
