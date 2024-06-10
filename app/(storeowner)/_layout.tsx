import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, Text, View } from "react-native";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="product"
        options={{
          title: "Sản phẩm",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.container}>
              <TabBarIcon
                name={focused ? "pricetag" : "pricetag-outline"}
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
        name="storeOrdering"
        options={{
          title: "Đơn hàng",
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
        name="store"
        options={{
          title: "Cửa hàng",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "storefront" : "storefront-outline"}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="storeprofile"
        options={{
          title: "Cá nhân",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="statistic"
        options={{
          title: "Thống kê",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "bar-chart" : "bar-chart-outline"}
              color={color}
            />
          ),
          tabBarItemStyle: {
            display: "none",
          },
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
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  number_txt: {
    color: "white",
    fontSize: 12,
    fontFamily: "RobotoBold",
  },
});
