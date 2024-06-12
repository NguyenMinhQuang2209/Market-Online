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
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthService from "../service/auth/AuthService";
const login = () => {
  const [phoneNumber, setPhoneNumber] = useState("0967000000");
  const [password, setPassword] = useState("adminadmin");
  const [errors, setErrors] = useState({
    password: "",
    phoneNumber: "",
  });

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const user = {
        phoneNumber,
        password,
      };
      const fieldName = {
        password: "Mật khẩu",
        phoneNumber: "Số điện thoại",
      };

      const fieldLength = {
        password: [8, 20],
        phoneNumber: [10, 10],
      };

      const checkFields = ["password", "phoneNumber"];
      let newErr = {};
      let isErr = false;
      checkFields?.forEach((item) => {
        if (!user[item]) {
          newErr[item] = fieldName[item] + " không được bỏ trống!";
        } else {
          if (fieldLength[item]) {
            let min = fieldLength[item][0];
            let max = fieldLength[item][1];
            if (user[item].length < min || user[item].length > max) {
              newErr["password"] =
                "Số điện thoại hoặc mật khẩu không chính xác";
              newErr["phoneNumber"] =
                "Số điện thoại hoặc mật khẩu không chính xác";
            }
          }
        }

        if (newErr[item]) {
          isErr = true;
        }
      });

      setErrors({ ...newErr });
      const data = await AuthService.login(user);
      await AsyncStorage.setItem("accessToken", data?.data?.accessToken);
      await AsyncStorage.setItem("username", data?.data?.username);
      if (data?.data?.avatar) {
        await AsyncStorage.setItem("avatar", data?.data?.avatar);
      }
      navigation.navigate("(landingpage)");
    } catch (err) {
      console.log("Error: " + err);
    }
  };
  const handleLoginWithZalo = async () => {
    try{
      const data = await AuthService.zaloLogin();
      console.log(data?.data);
    }
    catch(err){
      console.log(err);
    }
  };
  return (
    <LinearGradient colors={["#ffffff", "rgba(288,122,122,0.5)"]}>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Đăng nhập</Text>
          </View>
          <View style={styles.input_form_container}>
            {errors?.phoneNumber && (
              <View>
                <Text style={styles.error_txt}>{errors?.phoneNumber}</Text>
              </View>
            )}
            <View style={styles.input_form}>
              <TextInput
                style={styles.input_text}
                placeholder="Nhập số điện thoại *"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
            {errors?.password && (
              <View>
                <Text style={styles.error_txt}>{errors?.password}</Text>
              </View>
            )}
            <View style={styles.input_form}>
              <TextInput
                style={styles.input_text}
                placeholder="Nhập mật khẩu *"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
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
  error_txt: {
    color: "red",
    fontFamily: "RobotoMediumItalic",
  },
});
export default login;
