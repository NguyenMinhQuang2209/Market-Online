import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import HomeHeader from "../Component/Header/HomeHeader";
import { StyleSheet, Text, View } from "react-native";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        header: () => <HomeHeader />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Tìm kiếm",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Giỏ hàng",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.container}>
            <TabBarIcon
              name={focused ? "cart" : "cart-outline"}
              color={color}
            />
            <View style={styles.number_container}>
              <Text style={styles.number_txt}>1</Text>
            </View>
          </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Yêu thích",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "heart" : "heart-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Cá nhân",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={color}
            />
          ),
          headerShown:false
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  number_container: {
    position: "absolute",
    top: -3,
    right: -8,
    width: 18,
    height: 18,
    backgroundColor: "red",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  number_txt:{
    color:"white",
    fontSize:12,
    fontFamily:"RobotoBold"
  }
});
