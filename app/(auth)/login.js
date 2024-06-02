import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
const login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  function onAuthStateChanged(user) {
    if (user) {
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  async function signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (err) {
      console.log(err);
    }
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  }

  const navigation = useNavigation();

  const handleLogin = () => {
    let finalNumber = "+84" + phoneNumber;
    console.log(finalNumber);
    signInWithPhoneNumber(finalNumber);
  };
  const handleLoginWithZalo = () => {};
  return (
    <LinearGradient colors={["#ffffff", "rgba(288,122,122,0.5)"]}>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Đăng nhập</Text>
          </View>
          <View style={styles.input_form_container}>
            <View style={styles.input_form}>
              <TextInput
                style={styles.input_text}
                placeholder="Nhập số điện thoại"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
            <View style={styles.input_form}>
              <TextInput
                style={styles.input_text}
                placeholder="Nhập mật khẩu"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={handleLogin}>
              <View style={styles.button}>
                <Text style={styles.btn_text}>Đăng nhập</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.forgot_container}>
            <Link href={"(home)/home"}>
              <Text style={styles.forgot_text}>Quên mật khẩu?</Text>
            </Link>
          </View>
          <View style={styles.new_auth_container}>
            <TouchableOpacity onPress={handleLoginWithZalo}>
              <View style={styles.new_auth_icon}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={{
                    uri: "https://res.cloudinary.com/sttruyen/image/upload/v1717299550/oxhtadscmh5ynhwbpp5o.png",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.register_container}>
            <Text style={styles.register_txt}>
              Nếu bạn chưa có tài khoản
              <Link href={"(auth)/register"}>
                <Text style={styles.register_btn_txt}> Đăng ký ?</Text>
              </Link>
            </Text>
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
export default login;
