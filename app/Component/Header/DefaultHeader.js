import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const DefaultHeader = ({ title, to }) => {
  const [link, setLink] = useState("(home)/home");
  useEffect(() => {
    if (to) {
      setLink(to);
    }
  }, [to]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.icon_container}>
          <Link href={link}>
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
