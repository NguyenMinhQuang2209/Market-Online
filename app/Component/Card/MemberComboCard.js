import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const MemberComboCard = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title_wrap}>
          <Text style={styles.title_txt}>Gói 1 tháng</Text>
        </View>
        <View style={styles.price_wrap}>
          <Text style={styles.price_txt}>Giá: 20.000 VND</Text>
        </View>
        <View style={styles.content_wrap}>
          <Text style={styles.content_txt}>
            Bạn có thể trở thành thành viên trong vòng 1 tháng
          </Text>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_txt}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderColor: "rgba(0,0,0,0.1)",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 5,
    paddingVertical: 15,
  },
  title_wrap: {
    alignItems: "center",
    marginBottom: 10,
  },
  title_txt: {
    fontFamily: "RobotoBold",
    fontSize: 17,
    textAlign: "center",
  },
  price_wrap: {
    alignItems: "center",
  },
  price_txt: {
    fontFamily: "RobotoMedium",
    fontSize: 16,
  },
  content_wrap: {
    marginTop: 10,
  },
  content_txt: {
    fontSize: 15,
  },
  btn_container: {
    alignItems: "center",
  },
  btn: {
    marginTop: 10,
    width: "60%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
  },
  btn_txt: {
    color: "white",
    fontFamily: "RobotoMedium",
    fontSize: 15,
  },
});

export default MemberComboCard;
