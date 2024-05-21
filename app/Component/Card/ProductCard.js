import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";

const ProductCard = ({product}) => {

    const [name,setName] = useState("");
    const [seller,setSeller] = useState("");
    useEffect(() => {
        if(product){
            let newName = product?.name?.length > 16 ? product?.name?.substring(0,16)  + "..." : product?.name;
            let newSeller = product?.seller?.length > 12 ? product?.seller?.substring(0,12) + "..." : product?.seller;
            setSeller(newSeller);
            setName(newName);
        }
    },[product]);

  return (
    <View style={styles.card_container}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.card_image}
          source={{
            uri:product?.image,
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
            <Text style={styles.button_text}>Mua</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.button}>
            <Text style={styles.button_text}>Xem gian hàng</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card_container: {
    width: "45%",
    height: 210,
    backgroundColor: "rgba(234, 152, 91, 0.15)",
    marginHorizontal: "2.5%",
    marginVertical: 5,
    borderRadius: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  card_image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  card_title: {
    fontFamily: "PlayfairBlack",
    marginTop: 5,
    fontSize: 15,
    width:"90%"
  },
  card_seller: {
    fontFamily: "RobotoBlack",
    marginTop: 3,
    fontSize: 12,
  },
  button: {
    paddingHorizontal: 8,
    height: 30,
    backgroundColor: "green",
    marginHorizontal:5,
    justifyContent:"center",
    marginTop:10,
    borderRadius:10
  },
  button_text:{
    color:"white",
    fontSize:12
  }
});

export default ProductCard;
