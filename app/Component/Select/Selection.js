import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Selection = ({ selection, current, setActive, setCurrent }) => {
  const handleClose = () => {
    setActive(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <TouchableOpacity style={styles.bill_close} onPress={handleClose}>
          <Ionicons name="close" size={20} />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <View style={styles.textinput_wrap}>
            <TextInput
              style={styles.textinput}
              placeholder="Nhập tên thể loại"
            />
          </View>
          <ScrollView style={{ marginTop: 10 }}>
            {selection?.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  setCurrent(index);
                }}
                key={index + "Selection"}
                style={[styles.item, index == current && styles.item_active]}
              >
                <Text style={styles.item_txt}>{item?.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_cancel} onPress={handleClose}>
            <Text style={styles.bill_txt}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  wrap: {
    width: "80%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: "10%",
    elevation: 3,
    position: "relative",
    justifyContent: "space-between",
  },
  bill_close: {
    position: "absolute",
    right: 5,
    top: 5,
    width: 25,
    height: 25,
    borderBlockColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_container: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  btn_confirm: {
    marginHorizontal: 3,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255,0,0,0.5)",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  btn_cancel: {
    marginHorizontal: 3,
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  bill_txt: {
    color: "white",
  },
  textinput_wrap: {
    marginTop: 20,
  },
  label_txt: {
    fontSize: 16,
    fontFamily: "RobotoBold",
    color: "rgba(255,0,0,0.8)",
  },
  textinput: {
    width: "100%",
    minHeight: 37,
    marginTop: 8,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
  },
  item: {
    flex: 1,
    height: 40,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  item_txt: {
    fontSize: 15,
    fontFamily: "RobotoMedium",
    marginLeft: 3,
  },
  item_active: {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});

export default Selection;
