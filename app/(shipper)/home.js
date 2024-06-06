import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
const home = () => {
  const [haveOrder, setHaveOrder] = useState("A");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
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
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={styles.btn}
          >
            <Text style={{ color: "white" }}>Quét mã QR</Text>
          </TouchableOpacity>
        </View>
      </View>
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
});

export default home;
