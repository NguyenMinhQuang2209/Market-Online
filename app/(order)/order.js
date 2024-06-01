import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import DefaultHeader from "../Component/Header/DefaultHeader";
import { useRoute } from "@react-navigation/native";
import Selection from "../Component/Select/Selection";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import CartCard from "../Component/Card/CartCard";
const order = () => {
  const route = useRoute();
  const { title, type } = route.params;

  const [filterBarBool, setFilterBarBool] = useState(true);
  const topViewHeight = useRef(new Animated.Value(230)).current;
  // Type
  const [orderTypes, setOrderTypes] = useState([]);
  const [orderType, setOrderType] = useState(false);
  const [orderTypeString, setOrderTypeString] = useState("");
  let defaultOrderTypes = [
    {
      name: "Đơn đang giao",
      value: "shipping",
    },
    {
      name: "Đợi xác nhận",
      value: "confirming",
    },
    {
      name: "Tất cả",
      value: "",
    },
  ];
  useEffect(() => {
    let str = "";
    orderTypes?.forEach((item) => {
      str += item?.name + ", ";
    });
    if (str.endsWith(", ")) {
      str = str.slice(0, -2);
    }
    setOrderTypeString(str);
  }, [orderTypes]);

  useEffect(() => {
    let currentType = defaultOrderTypes?.find((item) => item?.value == type);
    if (currentType) {
      setOrderTypes([currentType]);
    }
  }, [type]);

  // Time
  const [orderTimer, setOrderTimer] = useState([]);
  const [orderTime, setOrderTime] = useState(false);
  const [orderTimerString, setOrderTimerString] = useState("");
  let defaultOrderTimes = [
    {
      name: "Mới nhất",
      value: "createdAt",
    },
    {
      name: "Cũ nhất",
      value: "-createdAt",
    },
  ];
  useEffect(() => {
    let str = "";
    orderTimer?.forEach((item) => {
      str += item?.name + ", ";
    });
    if (str.endsWith(", ")) {
      str = str.slice(0, -2);
    }
    setOrderTimerString(str);
  }, [orderTimer]);

  // Date Pick
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setShow(false);
      return;
    }
    if (selectedDate) {
      setDate(selectedDate);
    }
    setShow(false);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const [endDate, setendDate] = useState(null);
  const [endDateShow, setEndDateShow] = useState(false);

  const onEndDateChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setEndDateShow(false);
      return;
    }
    if (selectedDate) {
      setendDate(selectedDate);
    }
    setEndDateShow(false);
  };

  const showEndDatepicker = () => {
    setEndDateShow(true);
  };

  const handleInteractWithSearch = () => {
    setFilterBarBool((pre) => !pre);

    if (!filterBarBool) {
      Animated.timing(topViewHeight, {
        toValue: 230,
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
      <DefaultHeader title={title} />
      <Animated.View
        style={[
          styles.filter_container,
          {
            height: topViewHeight,
          },
        ]}
      >
        {filterBarBool && (
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <View style={styles.filter_box}>
              <View style={styles.filter_label}>
                <Text style={styles.filter_label_txt}>Loại đơn hàng</Text>
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
            <View style={styles.filter_box}>
              <View style={styles.filter_label}>
                <Text style={styles.filter_label_txt}>Thời gian</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setOrderTime(true);
                }}
                style={styles.filter_box_wrap}
              >
                <Text>{orderTimerString}</Text>
                <Ionicons name="caret-down" size={20} />
              </TouchableOpacity>
            </View>
            <View style={styles.filter_box}>
              <View style={styles.filter_label}>
                <Text style={styles.filter_label_txt}>Từ ngày</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.filter_box_wrap}
                  onPress={showDatepicker}
                >
                  <Text>{date && date.toDateString()}</Text>
                </TouchableOpacity>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date || new Date()}
                    mode="date"
                    display="default"
                    onChange={onChange}
                    onClose={() => setShow(false)}
                  />
                )}
              </View>
            </View>
            <View style={styles.filter_box}>
              <View style={styles.filter_label}>
                <Text style={styles.filter_label_txt}>Đến ngày</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.filter_box_wrap}
                  onPress={showEndDatepicker}
                >
                  <Text>{endDate && endDate.toDateString()}</Text>
                </TouchableOpacity>
                {endDateShow && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={endDate || new Date()}
                    mode="date"
                    display="default"
                    onChange={onEndDateChange}
                    onClose={() => setEndDateShow(false)}
                  />
                )}
              </View>
            </View>
            <View style={styles.filter_box_2}>
              <View style={styles.textinput_container}>
                <TextInput
                  style={styles.textinput}
                  placeholder="Tên người bán"
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

      {orderTime && (
        <Selection
          setActive={setOrderTime}
          setCurrent={setOrderTimer}
          current={orderTimer}
          isMultiple={false}
          useSearch={false}
          datas={defaultOrderTimes}
        />
      )}

      <ScrollView style={{ flex: 1 ,marginTop:20}}>
        <CartCard editable={false} isCart={false}/>
        <CartCard editable={false} isCart={false}/>
        <CartCard editable={false} isCart={false}/>
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
    marginTop: 20,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
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

export default order;
