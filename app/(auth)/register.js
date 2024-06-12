import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import auth from "@react-native-firebase/auth";
import AuthService from "../service/auth/AuthService";
const register = () => {
  const navigate = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("0967000000");
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  const [confirmUI, setConfirmUI] = useState(false);

  const [username, setUsername] = useState("Minh Quang");
  const [password, setPassword] = useState("adminadmin");

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    phoneNumber: "",
  });

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

  const handleGetConfirmCode = () => {
    let finalNumber = "+84" + phoneNumber;
    signInWithPhoneNumber(finalNumber);
    setConfirmUI(true);
  };

  const handleRegister = async () => {
    const user = {
      username,
      password,
      phoneNumber,
    };

    const fieldName = {
      username: "Tên hiển thị",
      password: "Mật khẩu",
      phoneNumber: "Số điện thoại",
    };

    const fieldLength = {
      username: [10, 20],
      password: [8, 20],
      phoneNumber: [10, 10],
    };

    const checkFields = ["username", "password", "phoneNumber"];
    let newErr = {};
    let isErr = false;
    checkFields?.forEach((item) => {
      if (!user[item]) {
        newErr[item] = fieldName[item] + " không được bỏ trống!";
      } else {
        if (fieldLength[item]) {
          let min = fieldLength[item][0];
          let max = fieldLength[item][1];
          if (user[item].length < min) {
            newErr[item] =
              fieldName[item] + " không được ngắn hơn " + min + " kí tự!";
          } else {
            if (user[item].length > max) {
              newErr[item] =
                fieldName[item] + " không được dài hơn" + max + " kí tự!";
            }
          }
        }
      }

      if (newErr[item]) {
        isErr = true;
      }
    });

    setErrors({ ...newErr });
    try {
      const data = await AuthService.register(user);
      navigation.navigate("login", {
        message: data?.data?.Message,
      });
    } catch (err) {
      console.log(err?.response?.data);
    }
  };
  const handleLoginWithZalo = () => {};
  return (
    <LinearGradient colors={["#ffffff", "rgba(288,122,122,0.5)"]}>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Đăng ký</Text>
          </View>
          <View style={styles.input_form_container}>
            {errors?.username && (
              <View>
                <Text style={styles.error_txt}>{errors?.username}</Text>
              </View>
            )}
            <View style={styles.input_form}>
              <TextInput
                style={styles.input_text}
                placeholder="Nhập tên hiển thị *"
                value={username}
                onChangeText={setUsername}
              />
            </View>
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
            <TouchableOpacity onPress={handleRegister}>
              <View style={styles.button}>
                <Text style={styles.btn_text}>Đăng ký</Text>
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
              <Link href={"(auth)/login"}>
                <Text style={styles.register_btn_txt}> Đăng nhập ?</Text>
              </Link>
            </Text>
          </View>
        </View>
      </SafeAreaView>
      {confirmUI && (
        <View style={styles.enter_code_container}>
          <View style={styles.enter_code_wrap}>
            <TouchableOpacity
              onPress={() => {
                setConfirmUI(false);
              }}
              style={styles.close_icon}
            >
              <Ionicons name="close-circle-outline" size={25} />
            </TouchableOpacity>
            <View style={styles.enter_code_title}>
              <Text style={styles.enter_code_title_txt}>Nhập mã xác nhận</Text>
            </View>
            <View style={styles.input_container}>
              <TextInput style={styles.inputtext_2} placeholder="Mã xác nhận" />
            </View>
            <View style={styles.btn_container}>
              <TouchableOpacity
                onPress={handleRegister}
                style={styles.btn_wrap}
              >
                <Text style={styles.btn_txt}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
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
  enter_code_container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  enter_code_wrap: {
    width: "70%",
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 10,
    padding: 10,
  },
  close_icon: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  enter_code_title: {
    alignItems: "center",
    marginTop: 17,
  },
  enter_code_title_txt: {
    fontFamily: "RobotoMedium",
    fontSize: 18,
  },
  input_container: {
    marginTop: 20,
  },
  inputtext_2: {
    width: "100%",
    height: 40,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  btn_container: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 5,
  },
  btn_txt: {
    color: "white",
    fontFamily: "RobotoBlack",
  },
  btn_wrap: {
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: "rgba(255,0,0,0.8)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  error_txt: {
    color: "red",
    fontFamily: "RobotoMediumItalic",
  },
});
export default register;
