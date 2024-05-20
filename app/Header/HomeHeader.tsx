import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";

const HomeHeader = () => {
  const handleSearch = () => {
    console.log("HEre");
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.search_container}>
          <TouchableOpacity
            style={styles.search_icon_container}
            onPress={handleSearch}
          >
            <EvilIcons name="search" size={30} color="#000" />
          </TouchableOpacity>
          <TextInput style={styles.text_input} placeholder="Tìm kiếm..." />
        </View>
        <View style={styles.bell_container}>
          <View style={{ position: "relative" }}>
            <EvilIcons name="bell" size={35} color="#000" />
            <View style={styles.bell_number}>
              <Text style={styles.bell_number_txt}>20</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal:10,
    paddingVertical:10,
    marginTop: 10,
  },
  search_container: {
    width: "85%",
    borderRadius: 40,
    backgroundColor: "rgba(0,0,0,0.07)",
    height: 45,
    marginHorizontal: "5%",
    marginLeft:0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  bell_container: {
    width: "10%",
  },
  text_input: {
    width: "90%",
    paddingHorizontal: 10,
    height: 40,
    fontSize: 15,
  },
  search_icon_container: {
    backgroundColor: "transparent",
    width: "10%",
  },
  bell_number: {
    position: "absolute",
    right: 0,
    top: -10,
    height: 20,
    width: 20,
    backgroundColor: "rgba(255,0,0,1)",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bell_number_txt: {
    fontSize: 10,
    color: "white",
  },
});

export default HomeHeader;
