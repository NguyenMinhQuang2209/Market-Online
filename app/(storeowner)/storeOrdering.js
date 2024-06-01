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
import React, { useRef, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const storeOrdering = () => {
  const navigation = useNavigation();
  const [current, setCurrent] = useState("");
  const handleOrder = () => {
    navigation.navigate("(payment)", {
      screen: "payment",
    });
  };

  const changeCurrent = (newState) => {
    setCurrent(newState);
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={btnStyles.head_container}>
        <TouchableOpacity
          onPress={() => {
            changeCurrent("");
          }}
          style={[btnStyles.head_wrap, !current && btnStyles.active]}
        >
          <View>
            <Ionicons
              style={!current && btnStyles.active_txt}
              name="checkmark"
              size={30}
            />
          </View>
          <Text
            style={[btnStyles.head_item_txt, !current && btnStyles.active_txt]}
          >
            Đợi xác nhận
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            changeCurrent("shipping");
          }}
          style={[
            btnStyles.head_wrap,
            btnStyles.head_wrap_left,
            current == "shipping" && btnStyles.active,
          ]}
        >
          <View>
            <Ionicons
              style={current == "shipping" && btnStyles.active_txt}
              name="car"
              size={23}
            />
          </View>
          <Text
            style={[
              btnStyles.head_item_txt,
              current == "shipping" && btnStyles.active_txt,
            ]}
          >
            Đang giao
          </Text>
        </TouchableOpacity>
      </View>
      {!current && (
        <ScrollView style={styles.head_container}>
          <CartCardBig />
          <CartCardBig />
        </ScrollView>
      )}
      {current == "shipping" && (
        <ScrollView style={styles.head_container}>
          <CartCardBig />
          <CartCardBig />
          <CartCardBig />
        </ScrollView>
      )}
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
      <View>
        <View style={cardStyles.summary_bill_container}>
          <View style={cardStyles.summary_bill_title_container}>
            <Text style={cardStyles.summary_bill_title_txt}>
              Người mua: Bà Sáu
            </Text>
          </View>
          <View style={cardStyles.bill_items_container}>
            <View style={cardStyles.bill_item_container}>
              <Text>Số điện thoại</Text>
              <Text>0999999912</Text>
            </View>
            <View style={cardStyles.bill_item_container}>
              <Text>Địa chỉ</Text>
              <Text style={{ width: "70%", textAlign: "right" }}>
                Ngõ 36 đường HCM,Khu 3,TP Hồ Chí Minh
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={cardStyles.summary_bill_container}>
          <View style={cardStyles.summary_bill_title_container}>
            <Text style={cardStyles.summary_bill_title_txt}>
              Tóm tắt đơn hàng
            </Text>
          </View>
          <View style={cardStyles.bill_items_container}>
            <View>
              <View style={tableStyles.table}>
                <View style={tableStyles.tableRow}>
                  <View style={tableStyles.tableHeaderCell}>
                    <Text style={tableStyles.headerText}>Tên</Text>
                  </View>
                  <View style={tableStyles.tableHeaderCell}>
                    <Text style={tableStyles.headerText}>Số lượng</Text>
                  </View>
                  <View style={tableStyles.tableHeaderCell}>
                    <Text style={tableStyles.headerText}>Giá tiền (VND)</Text>
                  </View>
                  <View style={tableStyles.tableHeaderCell}>
                    <Text style={tableStyles.headerText}>Tổng tiền (VND)</Text>
                  </View>
                </View>
                <TableItem editable={false} />
                <TableItem editable={false} />
                <TableItem editable={false} />
                <TableItem editable={false} />
                <TableItem editable={false} />
              </View>
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
                <Text style={cardStyles.card_btn_txt}>Xác nhận bán</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View
                style={[
                  cardStyles.card_btn,
                  {
                    backgroundColor: "rgba(0,0,0,0.5)",
                    marginLeft: 5,
                  },
                ]}
              >
                <Text style={cardStyles.card_btn_txt}>Hết hàng</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </View>
  );
};
const TableItem = ({ editable }) => {
  const inputRef = useRef();
  return (
    <View style={tableStyles.tableRow}>
      <View style={tableStyles.tableCell}>
        <Text style={tableStyles.cellText}>Cá thu</Text>
      </View>
      <View
        style={[
          tableStyles.tableCell,
          {
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          },
        ]}
      >
        <TextInput
          ref={inputRef}
          style={[tableStyles.cellText, tableStyles.text_input_edit]}
          defaultValue="10"
          multiline
          keyboardType="numeric"
          editable={editable}
        />
        <Text> Lạng</Text>
      </View>
      <View style={tableStyles.tableCell}>
        <Text style={tableStyles.cellText}>20.000</Text>
      </View>
      <View style={tableStyles.tableCell}>
        <Text style={tableStyles.cellText}>20.000</Text>
      </View>
    </View>
  );
};
const tableStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  table: {
    borderWidth: 1,
    borderColor: "#C1C0B9",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0,255,255,0.1)",
    borderWidth: 1,
    borderColor: "#C1C0B9",
  },
  tableCell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#C1C0B9",
  },
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  cellText: {
    textAlign: "center",
  },
  text_input: {
    paddingVertical: 0,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  text_input_edit: {
    paddingHorizontal: 1,
    borderColor: "rgba(0,0,0,0.7)",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    color: "black",
  },
});
const btnStyles = StyleSheet.create({
  head_container: {
    flexDirection: "row",
    height: 50,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    marginLeft: "5%",
    marginTop: 15,
    marginBottom: 10,
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
    fontSize: 12,
  },
  card_btn_container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 20,
  },
  card_btn: {
    height: 40,
    paddingHorizontal: 20,
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
  second_txt: {
    width: "50%",
    textAlign: "right",
  },
});

const styles = StyleSheet.create({
  head_container: {
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.08)",
    padding: 10,
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
  buyer_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  buyer_txt: {
    fontFamily: "RobotoMedium",
  },
  buyer_txt_name: {
    fontSize: 16,
    color: "rgba(0,0,255,0.7)",
    textDecorationLine: "underline",
    fontFamily: "RobotoMedium",
  },
});
export default storeOrdering;
