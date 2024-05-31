import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import DefaultHeader from "../Component/Header/DefaultHeader";
import { useRoute } from "@react-navigation/native";
import Selection from "../Component/Select/Selection";
import { Ionicons } from "@expo/vector-icons";
const order = () => {
  const route = useRoute();
  const { title, type } = route.params;

  const [orderTypes, setOrderTypes] = useState([]);
  const [orderType, setOrderType] = useState(false);
  const [orderTypeString,setOrderTypeString] = useState("");

  let defaultOrderTypes = [
    {
      name: "Đơn đang giao",
      value: "shipping",
    },
    {
      name: "Đợi xác nhận",
      value: "confirming",
    },
  ];

  useEffect(() => {
    let str = "";
    orderTypes?.forEach((item) => {
      str += item?.name + ", ";
    });
    if(str.endsWith(", ")){
      str = str.slice(0, -2);
    }
    setOrderTypeString(str);
  }, [orderTypes]);

  return (
    <View style={styles.container}>
      <DefaultHeader title={title} />
      <View style={styles.filter_container}>
        <View style={styles.filter_box}>
          <View style={styles.filter_label}>
            <Text>Loại đơn hàng</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setOrderType(true);
            }}
            style={styles.filter_box_wrap}
          >
            <Text>{orderTypeString}</Text>
            <Ionicons name="caret-down" size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.filter_box}></View>
      </View>
      {orderType && (
        <Selection
          setActive={setOrderType}
          setCurrent={setOrderTypes}
          current={orderTypes}
          isMultiple={false}
          useSearch={false}
          datas={defaultOrderTypes}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  filter_container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    flexWrap: "wrap",
    marginTop: 20,
  },
  filter_box: {
    width: "45%",
    marginHorizontal: "2.5%",
  },
  filter_box_wrap: {
    minHeight: 40,
    borderColor: "rgba(0,0,0,0.4)",
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  filter_label: {
    marginBottom: 5,
  },
});

export default order;
