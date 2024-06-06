import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, useNavigation } from "expo-router";
import axios from "axios";
const index = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  const navigation = useNavigation();
  const checkAccessToken = useCallback(async () => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      setInitialRoute(accessToken ? "(home)/home" : "(auth)/login");
    } catch (error) {
      setInitialRoute("(auth)/login");
    }
  }, []);
  // useEffect(() => {
  //   let timeShow = setTimeout(() => {
  //     checkAccessToken();
  //   }, 500);
  //   return () => {
  //     clearTimeout(timeShow);
  //   };
  // }, []);

  const handleNavigation = ({ folder, screen, params }) => {
    navigation.navigate(folder, {
      screen: screen,
      params: params,
    });
  };

  //return <Redirect href={"(shipper)/home"} />;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("@/assets/images/logo.png")}
        />
      </View>
      <View style={styles.role}>
        <View style={styles.role_wrap}>
          <Text style={styles.role_txt}>Bạn đang nhập với vai trò là: </Text>
          <TouchableOpacity
            onPress={() => {
              handleNavigation({
                folder: "(shipper)",
                screen: "home",
                params: null,
              });
            }}
          >
            <Text style={styles.shiper_txt}>Người giao hàng</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            handleNavigation({
              folder: "(storeowner)",
              screen: "storeOrdering",
              params: null,
            });
          }}
        >
          <Text style={styles.shiper_txt}>Vai trò khác</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: 250,
    height: 250,
  },
  role: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    marginBottom: 20,
  },
  role_wrap: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  role_txt: {
    fontSize: 15,
  },
  shiper_txt: {
    fontFamily: "RobotoMedium",
    fontSize: 16,
    textDecorationLine: "underline",
    color: "rgba(0,0,255,0.8)",
  },
});

export default index;
