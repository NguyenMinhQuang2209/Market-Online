import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Selection from "../Select/Selection";
import { Ionicons } from "@expo/vector-icons";
const AddToCart = ({ item, setActive }) => {
  const [showSelection, setShowSelection] = useState(false);
  const [current, setCurrent] = useState([]);
  const handleAddToCart = () => {
    setActive(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.box_wrap}>
          <View style={styles.title}>
            <Text style={styles.title_txt}>Nhập số lượng</Text>
          </View>
          <View style={styles.quantity_wrap}>
            <TextInput
              style={styles.textinput}
              placeholder="Nhập số lượng"
              keyboardType="numeric"
              defaultValue="1"
            />
            <TouchableOpacity
              style={styles.category_container}
              onPress={() => {
                setShowSelection(true);
              }}
            >
              <Text style={styles.category_txt}>kg</Text>
              <Ionicons name="caret-down" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.totalPrice}>
            <Text style={styles.totalPrice_txt}>Tổng tiền: 20.000VND</Text>
          </View>
          <View style={styles.btn_container}>
            <TouchableOpacity style={styles.btn} onPress={handleAddToCart}>
              <Text style={styles.btn_txt}>Thêm giỏ hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActive(false);
              }}
              style={[
                styles.btn,
                {
                  backgroundColor: "rgba(0,0,0,0.5)",
                },
              ]}
            >
              <Text style={styles.btn_txt}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
        {showSelection && (
          <Selection
            setActive={setShowSelection}
            current={current}
            setCurrent={setCurrent}
            useSearch={false}
            isMultiple={false}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  wrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box_wrap: {
    width: "80%",
    height: 200,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 10,
  },
  title: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title_txt: {
    fontFamily: "RobotoMedium",
    fontSize: 18,
  },
  quantity_wrap: {
    flexDirection: "row",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  textinput: {
    width: "60%",
    height: 40,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  category_container: {
    marginLeft: "5%",
    width: "35%",
    height: 40,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  category_txt: {
    width: "80%",
  },
  btn_container: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    paddingHorizontal: 20,
    height: 38,
    backgroundColor: "#E47070",
    borderRadius: 30,
    marginHorizontal: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_txt: {
    color: "white",
    fontSize: 15,
    fontFamily: "RobotoMedium",
  },
  totalPrice: {
    marginTop: 10,
    alignItems: "center",
    fontSize:16
  },
  totalPrice_txt: {
    fontFamily: "RobotoMedium",
  },
});

export default AddToCart;
