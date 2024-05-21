import { View, Text ,Button, StyleSheet} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>login</Text>
        <Link href={"(home)/home"}>
          <Text>Nhấn vào đây để về home</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    height:"100%",
    alignItems:"center",
    justifyContent:"center"
  }
});
export default login;
