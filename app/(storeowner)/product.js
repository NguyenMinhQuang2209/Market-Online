import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useCallback, useState } from "react";
import StoreOwnerProductCard from "../Component/Card/StoreOwnerProductCard";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../Component/Header/HomeHeader";
import { Ionicons } from "@expo/vector-icons";
import { generateRandomString } from "../Component/Other/GenerateRandomString";
const product = () => {
  const navigation = useNavigation();
  const handleCreateNewProduct = () => {
    navigation.navigate("(product)", {
      screen: "create",
    });
  };
  const [units, setUnits] = useState([
    {
      id: generateRandomString(),
      unit: "",
      price: "",
    },
  ]);
  const [currentItem, setCurrentItem] = useState(null);
  const handleAddUnit = () => {
    setUnits((pre) => [
      ...pre,
      {
        id: generateRandomString(),
        unit: "",
        price: "",
      },
    ]);
  };

  const handleUpdatePrice = useCallback((item) => {
    setCurrentItem(item);
  });

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView style={styles.card_container}>
        <View style={styles.card_wrap}>
          <StoreOwnerProductCard handleCallUpdatePrice={handleUpdatePrice} />
          <StoreOwnerProductCard handleCallUpdatePrice={handleUpdatePrice} />
          <StoreOwnerProductCard handleCallUpdatePrice={handleUpdatePrice} />
          <StoreOwnerProductCard handleCallUpdatePrice={handleUpdatePrice} />
          <StoreOwnerProductCard handleCallUpdatePrice={handleUpdatePrice} />
          <StoreOwnerProductCard handleCallUpdatePrice={handleUpdatePrice} />
          <StoreOwnerProductCard handleCallUpdatePrice={handleUpdatePrice} />
          <StoreOwnerProductCard handleCallUpdatePrice={handleUpdatePrice} />
          <StoreOwnerProductCard handleCallUpdatePrice={handleUpdatePrice} />
        </View>
      </ScrollView>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn} onPress={handleCreateNewProduct}>
          <Text style={styles.btn_txt}>Thêm mới</Text>
        </TouchableOpacity>
      </View>
      {currentItem && (
        <View style={styles.change_price_container}>
          <View style={styles.change_price_wrap}>
            <TouchableOpacity
              onPress={() => {
                setCurrentItem(null);
              }}
              style={styles.heart_icon}
            >
              <Ionicons
                style={{ color: "black" }}
                name="close-circle-outline"
                size={30}
              />
            </TouchableOpacity>

            <ScrollView style={{ marginTop: 50 }}>
              <View style={unitStyles.unit_container}>
                <View style={unitStyles.add_container}>
                  {units?.map((item, index) => (
                    <UnitCard
                      item={item}
                      setUnits={setUnits}
                      units={units}
                      index={index}
                      key={item?.id}
                    />
                  ))}
                  <TouchableOpacity
                    style={unitStyles.add_wrap}
                    onPress={handleAddUnit}
                  >
                    <Text style={unitStyles.add_icon}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
            <View style={styles.change_price_btn}>
              <TouchableOpacity style={styles.change_btn}>
                <Text style={styles.change_btn_txt}>Lưu</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setCurrentItem(null);
                }}
                style={styles.change_btn_2}
              >
                <Text style={styles.change_btn_txt}>Hủy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
const UnitCard = ({ item, setUnits, units, index }) => {
  const handleRemoveUnit = () => {
    let currentUnits = [...units];
    currentUnits.splice(index, 1);
    setUnits([...currentUnits]);
  };
  return (
    <View style={unitStyles.unit_wrap}>
      <View style={unitStyles.edit_field}>
        <View style={unitStyles.label}>
          <Text style={unitStyles.label_txt}>Đơn vị tính</Text>
        </View>
        <View style={unitStyles.textinput_wrap}>
          <TextInput style={unitStyles.textinput} />
        </View>
      </View>
      <View style={unitStyles.edit_field}>
        <View style={unitStyles.label}>
          <Text style={unitStyles.label_txt}>Giá (trên mỗi đơn vị) VND</Text>
        </View>
        <View style={unitStyles.textinput_wrap}>
          <TextInput
            style={unitStyles.textinput}
            keyboardType="numeric"
            inputMode="numeric"
            defaultValue="20000"
          />
        </View>
      </View>
      <View style={unitStyles.close_wrap}>
        <TouchableOpacity onPress={handleRemoveUnit}>
          <Ionicons name="close-circle-outline" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const unitStyles = StyleSheet.create({
  unit_container: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  unit_wrap: {
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    position: "relative",
    width: "100%",
    marginBottom: 10,
  },
  close_wrap: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  add_container: {
    alignItems: "center",
  },
  add_wrap: {
    width: 30,
    height: 30,
    backgroundColor: "#E47070",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  add_icon: {
    color: "white",
    fontSize: 18,
  },
  edit_form: {
    marginTop: 30,
  },
  edit_field: {
    marginBottom: 20,
  },
  label: {},
  textinput_wrap: {},
  label_txt: {
    fontSize: 14,
    fontFamily: "RobotoBold",
    color: "rgba(255,0,0,0.8)",
  },
  textinput: {
    width: "100%",
    minHeight: 40,
    marginTop: 8,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
  },
  textinput2: {
    width: "100%",
    minHeight: 40,
    marginTop: 8,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    marginBottom: 10,
    width: 150,
    height: 45,
    backgroundColor: "#E47070",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  btn_txt: {
    color: "white",
    fontSize: 18,
    fontFamily: "RobotoMedium",
  },
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  btn_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  btn: {
    height: 45,
    width: 140,
    backgroundColor: "rgba(255,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  btn_txt: {
    color: "white",
    fontSize: 16,
    fontFamily: "RobotoMedium",
  },
  card_container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card_wrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  change_price_container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 50,
  },
  change_price_wrap: {
    width: "80%",
    height: "70%",
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 10,
    justifyContent: "space-between",
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
  change_price_btn: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 20,
    paddingTop: 20,
  },
  change_btn: {
    paddingHorizontal: 25,
    height: 40,
    backgroundColor: "rgba(255,0,0,0.7)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  change_btn_2: {
    paddingHorizontal: 25,
    height: 40,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  change_btn_txt: {
    color: "white",
    fontFamily: "RobotoMedium",
  },
});
export default product;
