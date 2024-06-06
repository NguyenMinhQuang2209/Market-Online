import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { CameraView, Camera } from "expo-camera";
import { useNavigation } from "expo-router";
const home = () => {
  const [haveOrder, setHaveOrder] = useState("A");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [startScan, setStartScan] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setStartScan(false);
    navigation.navigate("order", {
      data: data,
    });
  };

  const handleScan = () => {
    setScanned(false);
    setStartScan(true);
  };
  const handleCancelScan = () => {
    setScanned(true);
    setStartScan(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
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
        <View style={styles.wrap}>
          <View>
            <Ionicons name="archive-outline" size={100} />
          </View>
          <View>
            <Text style={{ textAlign: "center" }}>
              {haveOrder
                ? `Hiện tại bạn đang có đơn đặt hàng của tiểu thương ${haveOrder}. Quét mã QR để hủy đơn hàng và nhận đơn hàng mới.`
                : "Hiện tại bạn không có danh sách giao hàng nào. Vui lòng quét mã QR để nhận đơn hàng"}
            </Text>
          </View>
          <View>
            <TouchableOpacity onPress={handleScan} style={styles.btn}>
              <Text style={{ color: "white" }}>Quét mã QR</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.or_txt}>Hoặc nhập mã</Text>
          </View>
          <View style={styles.inputtext_wrap}>
            <TextInput style={styles.inputtxt} placeholder="Nhập mã" />
            <TouchableOpacity
              style={[
                styles.btn,
                {
                  marginTop: 0,
                },
              ]}
            >
              <Text style={{ color: "white" }}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrap: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  btn: {
    marginTop: 20,
    paddingHorizontal: 20,
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
  },
  or_txt: {
    fontFamily: "RobotoMedium",
  },
  inputtext_wrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputtxt: {
    width: "60%",
    marginRight: 5,
    borderColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    paddingHorizontal: 5,
    height: 40,
    borderRadius: 5,
  },
});

export default home;
