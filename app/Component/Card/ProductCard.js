import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const ProductCard = ({
  product,
  showStore = true,
  cardStyle = {
    bg: "rgba(234, 152, 91, 0.15)",
    txtColor: "black",
    bgImage: "",
    bgOpacity: 1,
  },
  onBuyed,
}) => {
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

  const handleBuyed = () => {
    if (onBuyed) {
      onBuyed(product);
    } else {
      console.log("Not function call back");
    }
  };

  return (
    <View
      style={[
        styles.card_container,
        {
          backgroundColor: cardStyle.bg,
          opacity: cardStyle?.bgOpacity,
        },
      ]}
    >
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          opacity: cardStyle?.bgOpacity,
        }}
        source={cardStyle?.bgImage && { uri: cardStyle?.bgImage || "" }}
      >
        <View style={{ flexDirection: "row" }}>
          {product?.image && (
            <Image
              style={styles.card_image}
              source={{
                uri: product?.image,
              }}
            />
          )}
          {!product?.image && (
            <View style={styles.card_image_icon_container}>
              <Image
                style={styles.card_image_icon}
                source={{
                  uri: "https://res.cloudinary.com/sttruyen/image/upload/v1716193935/juhtg8gt7pdkwbmpjbnh.png",
                }}
              />
            </View>
          )}
          <View style={styles.price_container}>
            <Text style={[styles.card_price]}>20.000VND/1 bó</Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              styles.card_title,
              {
                color: cardStyle?.txtColor,
              },
            ]}
          >
            {name}
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.card_seller,
              {
                color: cardStyle?.txtColor,
              },
            ]}
          >
            Người bán: {seller}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={handleBuyed}>
            <View style={styles.button}>
              <Text
                style={[
                  styles.button_text,
                  {
                    color: cardStyle?.txtColor,
                  },
                ]}
              >
                Mua hàng
              </Text>
            </View>
          </TouchableOpacity>
          {showStore && (
            <TouchableOpacity onPress={HandleLinkToStore}>
              <View style={styles.button}>
                <Text
                  style={[
                    styles.button_text,
                    {
                      color: cardStyle?.txtColor,
                    },
                  ]}
                >
                  Cửa hàng
                </Text>
              </View>
            </TouchableOpacity>
          )}
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
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  card_container: {
    width: "45%",
    height: 220,
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
  card_image_icon_container: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  card_image_icon: {
    width: "30%",
    aspectRatio: 1,
  },
  card_title: {
    fontFamily: "PlayfairMedium",
    marginTop: 3,
    fontSize: 15,
    width: "90%",
  },
  card_price: {
    fontSize: 13,
    fontFamily: "RobotoMedium",
    textAlign: "center",
    color: "white",
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
  price_container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 2,
  },
});

export default ProductCard;
