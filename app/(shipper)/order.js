import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Selection from "../Component/Select/Selection";
import { Ionicons } from "@expo/vector-icons";
import OrderBigCard from "../Component/Card/OrderBigCard";
import { CameraView, Camera } from "expo-camera";

const order = () => {
  const route = useRoute();
  const data = route.params;

  const [filterBarBool, setFilterBarBool] = useState(true);
  const topViewHeight = useRef(new Animated.Value(150)).current;

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

  const [orderTypes, setOrderTypes] = useState([
    {
      name: "Đơn đang giao",
      value: "shipping",
    },
  ]);
  const [orderType, setOrderType] = useState(false);
  const [orderTypeString, setOrderTypeString] = useState("");
  let defaultOrderTypes = [
    {
      name: "Đơn đang giao",
      value: "shipping",
    },
    {
      name: "Đơn hoàn thành",
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


  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [startScan, setStartScan] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setStartScan(false);
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleScan = async () => {
    let tempStatus;
    if (!hasPermission) {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      tempStatus = status === "granted";
    } else {
      tempStatus = true;
    }
    if (tempStatus) {
      setScanned(false);
      setStartScan(true);
    }
  };
  const handleCancelScan = () => {
    setScanned(true);
    setStartScan(false);
  };

  const handleDeliverSuccess = useCallback((item) => {
    handleScan();
  });

  return (
    <View style={styles.container}>
      {startScan && (
        <CameraView
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {startScan && (
        <View style={styles.cancel_container}>
          <TouchableOpacity onPress={handleCancelScan} style={styles.btn}>
            <Text style={{ color: "white" }}>Hủy quét mã</Text>
          </TouchableOpacity>
        </View>
      )}
      {!startScan && (
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
      )}

      {!startScan && orderType && (
        <Selection
          setActive={setOrderType}
          setCurrent={setOrderTypes}
          current={orderTypes}
          isMultiple={false}
          useSearch={false}
          datas={defaultOrderTypes}
        />
      )}

      {!startScan && (
        <ScrollView style={{ flex: 1, marginTop: 20, paddingHorizontal: 10 }}>
          <OrderBigCard
            shipping={true}
            onFirstFun={handleDeliverSuccess}
          />
          <OrderBigCard
            shipping={true}
            onFirstFun={handleDeliverSuccess}
          />
        </ScrollView>
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
    width: "95%",
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
  btn: {
    marginTop: 20,
    width: 120,
    height: 40,
    backgroundColor: "rgba(255,0,0,0.7)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cancel_container: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
    alignItems: "center",
  },
});
export default order;
