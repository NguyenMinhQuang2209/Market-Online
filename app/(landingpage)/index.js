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
import { Redirect, useFocusEffect, useNavigation } from "expo-router";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
const index = () => {
  const navigation = useNavigation();
  const checkAccessToken = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      console.log(token);
      if (token) {
        const decoded = jwtDecode(token);
        if (decoded?.role) {
          switch (decoded?.role) {
            case "CUSTOMER":
              navigation.navigate("(home)", {
                screen: "home",
              });
              break;
            default:
              navigation.navigate("(storeowner)", {
                screen: "product",
              });
              break;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  useFocusEffect(
    useCallback(() => {
      let timeShow = setTimeout(() => {
        checkAccessToken();
      },0);
      return () => {
        clearTimeout(timeShow);
      };
    }, [checkAccessToken])
  );

  const handleNavigation = ({ folder, screen, params }) => {
    navigation.navigate(folder, {
      screen: screen,
      params: params,
    });
  };

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
              folder: "(auth)",
              screen: "login",
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
