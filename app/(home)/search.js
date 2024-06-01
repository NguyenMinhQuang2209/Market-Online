import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Selection from "../Component/Select/Selection";
import ProductCard from "../Component/Card/ProductCard";
import StoreCard from "../Component/Card/StoreCard";
import HomeHeader from "../Component/Header/HomeHeader";
import { useRoute } from "@react-navigation/native";
const search = () => {
  const route = useRoute();
  const params = route.params;

  const [search, setSearch] = useState(params?.search || "");

  useEffect(() => {
    setSearch(params?.search || "");
  }, [params]);


  const [filterBarBool, setFilterBarBool] = useState(true);
  const topViewHeight = useRef(new Animated.Value(150)).current;
  const [defaultCategories, setDefaultCategories] = useState([
    {
      name: "Gà",
      value: "ga",
    },
    {
      name: "Rau",
      value: "rau",
    },
  ]);
  const [catergories, setCategories] = useState([]);
  const [category, setCategory] = useState(false);
  const [categoryString, setCategoryString] = useState("");

  useEffect(() => {
    let str = "";
    catergories?.forEach((item) => {
      str += item?.name + ", ";
    });
    if (str.endsWith(", ")) {
      str = str.slice(0, -2);
    }
    setCategoryString(str);
  }, [catergories]);

  const handleInteractWithSearch = () => {
    setFilterBarBool((pre) => !pre);

    if (!filterBarBool) {
      Animated.timing(topViewHeight, {
        toValue: 150,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(topViewHeight, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <HomeHeader showSearch={false} />

      <Animated.View
        style={[
          styles.filter_container,
          {
            height: topViewHeight,
            marginBottom: 20,
          },
        ]}
      >
        {filterBarBool && (
          <View>
            <View style={styles.filter_box_2}>
              <View style={styles.filter_label}>
                <Text style={styles.filter_label_txt}>Loại sản phẩm</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setCategory(true);
                }}
                style={styles.filter_box_wrap}
              >
                <Text>{categoryString}</Text>
                <Ionicons name="caret-down" size={20} />
              </TouchableOpacity>
            </View>
            <View style={styles.filter_box_3}>
              <View style={styles.textinput_container}>
                <TextInput
                  style={styles.textinput}
                  placeholder="Tên người bán"
                  onChangeText={setSearch}
                  value={search}
                />
              </View>
              <View style={styles.search_btn}>
                <Text style={styles.search_txt}>Tìm kiếm</Text>
              </View>
            </View>
          </View>
        )}
        <View style={styles.icon_down}>
          <TouchableOpacity onPress={handleInteractWithSearch}>
            {filterBarBool ? (
              <Ionicons name="caret-up-circle" size={30} />
            ) : (
              <Ionicons name="caret-down-circle" size={30} />
            )}
          </TouchableOpacity>
        </View>
      </Animated.View>
      {category && (
        <Selection
          setActive={setCategory}
          setCurrent={setCategories}
          current={catergories}
          isMultiple={true}
          useSearch={true}
          datas={defaultCategories}
        />
      )}

      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <StoreCard />
        </View>
      </ScrollView>
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
    marginTop: 5,
    borderColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
    position: "relative",
  },
  icon_down: {
    position: "absolute",
    bottom: -17,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  filter_box: {
    width: "45%",
    marginHorizontal: "2.5%",
    marginBottom: 10,
  },
  filter_box_2: {
    width: "95%",
    marginHorizontal: "2.5%",
    marginTop: 10,
  },
  filter_box_3: {
    width: "95%",
    marginHorizontal: "2.5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
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
  filter_label_txt: {
    fontFamily: "RobotoMedium",
  },
  textinput_container: {
    flex: 1,
  },
  textinput: {
    flex: 1,
    height: 40,
    borderColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 10,
    borderWidth: 1,
    marginRight: 5,
    borderRadius: 5,
  },
  search_btn: {
    width: 100,
    height: 40,
    borderRadius: 50,
    backgroundColor: "rgba(255,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  search_txt: {
    color: "white",
    fontSize: 15,
    fontFamily: "RobotoBold",
  },
});

export default search;
