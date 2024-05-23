import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const DefaultHeader = ({title}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.icon_container}>
          <Link href={"(home)/home"}>
            <EvilIcons name="arrow-left" size={25} />
          </Link>
        </View>
        <View style={styles.title_container}>
          <Text style={styles.title_txt}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon_container: {
    width: "10%",
  },
  title_container: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
  },
  title_txt: {
    fontSize: 17,
  },
});

export default DefaultHeader;
