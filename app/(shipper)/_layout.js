import { Tabs } from "expo-router";
import React from "react";
import DefaultHeader from "../Component/Header/DefaultHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function NotificationLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true,
          header: () => <DefaultHeader title={"Màn hình chính"} />,
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
        name="order"
        options={{
          headerShown: true,
          header: () => <DefaultHeader title={"Danh sách đơn hàng"} />,
          title: "Danh sách hàng",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "archive" : "archive-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
