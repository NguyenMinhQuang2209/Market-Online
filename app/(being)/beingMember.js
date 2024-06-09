import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MemberComboCard from "../Component/Card/MemberComboCard";

const beingMember = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <MemberComboCard />
      </View>
      <View style={styles.wrap}>
        <MemberComboCard />
      </View>
      <View style={styles.wrap}>
        <MemberComboCard />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  wrap: {
    width: "45%",
    marginHorizontal: "2.5%",
    marginBottom: 20,
  },
});

export default beingMember;
