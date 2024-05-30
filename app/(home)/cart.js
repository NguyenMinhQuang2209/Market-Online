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
import { EvilIcons, Ionicons } from "@expo/vector-icons";

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

const CartCardBig = () => {
  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.close_icon_container}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 15 }}>Trạng thái: </Text>
          <Text style={{ fontSize: 15, color: "green" }}>Đợi xác nhận</Text>
        </View>
        <View style={cardStyles.close_icon_circle_container}>
          <Ionicons name="close" size={15} />
        </View>
      </View>
      <CartCardSmall />
      <CartCardSmall />
      <CartCardSmall />
      <View>
        <View style={cardStyles.summary_bill_container}>
          <View style={cardStyles.summary_bill_title_container}>
            <Text style={cardStyles.summary_bill_title_txt}>
              Tóm tắt đơn hàng
            </Text>
          </View>
          <View style={cardStyles.bill_items_container}>
            <View style={cardStyles.bill_item_container}>
              <Text>Cá thu x2</Text>
              <Text>40.000VND</Text>
            </View>
            <View style={cardStyles.bill_item_container}>
              <Text>Cá thu x2</Text>
              <Text>40.000VND</Text>
            </View>
          </View>
          <View style={cardStyles.summary_total_bill_container}>
            <View>
              <Text>Tổng số tiền:</Text>
            </View>
            <View>
              <Text style={cardStyles.summary_total_bill_txt}>80.000VND</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={cardStyles.card_btn_container}>
            <TouchableWithoutFeedback>
              <View style={cardStyles.card_btn}>
                <Text style={cardStyles.card_btn_txt}>Trả giá</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
};
const CartCardSmall = () => {
  return (
    <View style={cardStyles.card_container}>
      <View style={cardStyles.card_image_container}>
        <Image
          style={cardStyles.card_image}
          source={{
            uri: "https://res.cloudinary.com/sttruyen/image/upload/v1716257377/fqvhfuqrriaadrq1scmo.jpg",
          }}
        />
      </View>
      <View style={cardStyles.card_infor_container}>
        <View style={cardStyles.card_infor_name}>
          <View style={cardStyles.card_name_container}>
            <Text style={cardStyles.card_name}>Cá thu</Text>
          </View>
          <View style={cardStyles.card_seller_name_container}>
            <Text style={cardStyles.card_seller_name}>
              Người bán:
              <Link style={cardStyles.card_seller_link} href={"(home)/home"}>
                {" "}
                Bà Tám
              </Link>
            </Text>
          </View>
        </View>
        <View style={cardStyles.card_infor_quantity}>
          {/* <View
            style={[
              cardStyles.card_infor_quantity_item_container,
              {
                marginRight: 10,
              },
            ]}
          >
            <Text style={cardStyles.card_infor_quantity_item_txt}>-</Text>
          </View> */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Số lượng: </Text>
            <TextInput
              style={styles.txt_input}
              keyboardType="numeric"
              inputMode="numeric"
              defaultValue="1"
            />
            <Text>Kg</Text>
          </View>
          {/* <View
            style={[
              cardStyles.card_infor_quantity_item_container,
              {
                marginLeft: 10,
              },
            ]}
          >
            <Text style={cardStyles.card_infor_quantity_item_txt}>+</Text>
          </View> */}
        </View>
      </View>
      <View style={cardStyles.card_tabbar_price_container}>
        <View style={cardStyles.card_tabbar_container}>
          <View style={cardStyles.card_icon_container}>
            <EvilIcons name="heart" size={20} />
          </View>
          <View style={cardStyles.card_icon_container}>
            <Ionicons name="close" size={20} />
          </View>
        </View>
        <View style={cardStyles.card_price_container}>
          <View>
            <Text style={cardStyles.card_price_txt}>Giá: 20.000VND</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  close_icon_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  close_icon_circle_container: {
    marginBottom: 20,
    width: 22,
    height: 22,
    borderRadius: 12,
    shadowColor: "#E47070",
    shadowOffset: { width: 5, height: 5 },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    backgroundColor: "#fff",
  },
  card_container: {
    flex: 1,
    minHeight: 80,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 10,
    padding: 0,
    flexDirection: "row",
    marginBottom: 10,
  },
  card_image_container: {
    width: "30%",
  },
  card_image: {
    width: "100%",
    height: "100%",
    borderRadius: 2,
  },
  card_infor_container: {
    width: "40%",
    padding: 5,
  },
  card_infor_name: {
    height: "70%",
  },
  card_name_container: {
    marginBottom: 3,
  },
  card_name: {
    fontSize: 14,
    fontFamily: "SpaceMono",
  },
  card_seller_name_container: {
    marginBottom: 10,
  },
  card_seller_name: {
    fontSize: 12,
    fontFamily: "RobotoMedium",
  },
  card_seller_link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  card_infor_quantity: {
    flexDirection: "row",
    height: "30%",
    alignItems: "center",
  },
  card_infor_quantity_item_container: {
    width: 22,
    height: 22,
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: { width: 2, height: 2 },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    backgroundColor: "#fff",
  },
  card_infor_quantity_item_txt: {
    fontSize: 15,
  },
  card_tabbar_price_container: {
    width: "30%",
    alignItems: "flex-end",
    padding: 5,
  },
  card_tabbar_container: {
    flexDirection: "row",
    height: "50%",
  },
  card_icon_container: {
    width: 22,
    height: 22,
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: { width: 2, height: 2 },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    backgroundColor: "#fff",
    marginLeft: 5,
  },
  card_price_container: {
    height: "50%",
    justifyContent: "flex-end",
  },
  card_price_txt: {
    fontSize: 13,
  },
  card_btn_container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 20,
  },
  card_btn: {
    height: 40,
    width: 100,
    backgroundColor: "#E47070",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  card_btn_txt: {
    color: "white",
    fontSize: 15,
    fontFamily: "RobotoBold",
  },
  summary_bill_container: {
    marginTop: 10,
    borderBlockColor: "rgba(0,0,0,0.6)",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  summary_bill_title_container: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "rgba(0,0,0,0.4)",
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 10,
  },
  summary_bill_title_txt: {
    fontFamily: "RobotoBold",
  },
  bill_item_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  bill_items_container: {
    marginTop: 10,
  },
  bill_item_txt: {
    fontFamily: "RobotoMedium",
  },
  summary_total_bill_container: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "rgba(0,0,0,0.4)",
    borderTopWidth: 0.5,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingTop: 5,
  },
  summary_total_bill_txt: {
    fontFamily: "RobotoBold",
  },
});

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
