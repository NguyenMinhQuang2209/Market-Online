import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const changePassword = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("(home)", {
      screen: "home",
    });
  };
  const handleBack = () => {
    navigation.navigate("(home)", {
      screen: "home",
    });
  };
  return (
    <LinearGradient colors={["#ffffff", "rgba(288,122,122,0.5)"]}>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Đổi mật khẩu</Text>
          </View>
          <View style={styles.input_form_container}>
            <View style={styles.input_form}>
              <TextInput
                style={styles.input_text}
                placeholder="Nhập mật khẩu cũ"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.input_form}>
              <TextInput
                style={styles.input_text}
                placeholder="Nhập mật khẩu mới"
                secureTextEntry={true}
              />
            </View>
            <View style={styles.input_form}>
              <TextInput
                style={styles.input_text}
                placeholder="Nhập lại mật khẩu mới"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View>
            <TouchableWithoutFeedback onPress={handleLogin}>
              <View style={styles.button}>
                <Text style={styles.btn_text}>Đổi mật khẩu</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.register_container}>
            <Text style={styles.register_txt}>Quay lại màn hình</Text>
            <TouchableOpacity onPress={handleBack}>
              <Text style={styles.register_btn_txt}> trang chủ ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
const windowWidth = Dimensions.get("window").width - 50;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "PlayfairExtraBold",
  },
  input_form_container: {
    marginTop: 70,
  },
  input_form: {
    marginVertical: 10,
  },
  input_text: {
    width: windowWidth,
    height: 50,
    backgroundColor: "rgba(255,255,255,0.6)",
    color: "black",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    fontFamily: "RobotoMedium",
  },
  button: {
    width: windowWidth - 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E47070",
    height: 40,
    borderRadius: 20,
    marginTop: 20,
  },
  btn_text: {
    color: "white",
    fontSize: 15,
  },
  forgot_container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 50,
    marginTop: 15,
  },
  forgot_text: {
    color: "red",
    fontFamily: "RobotoBoldItalic",
  },
  register_container: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  register_txt: {
    fontSize: 15,
  },
  register_btn_txt: {
    color: "rgba(0,0,255,0.7)",
    fontFamily: "RobotoBold",
  },
  new_auth_container: {
    marginTop: 20,
    flexDirection: "row",
  },
  new_auth_icon: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
export default changePassword;
