import { View, Text, StyleSheet, Image } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

const index = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  const checkAccessToken = useCallback(async () => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      setInitialRoute(accessToken ? "(home)/home" : "(auth)/login");
    } catch (error) {
      setInitialRoute("(auth)/login");
    }
  }, []);
  useEffect(() => {
    let timeShow = setTimeout(() => {
      checkAccessToken();
    },500);
    return () => {
      clearTimeout(timeShow);
    }
  }, []);

  return initialRoute ? (
    <Redirect href={"(auth)/login"} />
  ) : (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.image} source={require("@/assets/images/logo.png")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    height:"100%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white"
  },
  image:{
    width: 250,
    height:250,
  }
});

export default index;
