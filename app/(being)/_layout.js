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
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen
        name="beingStoreowner"
        options={{
          headerShown: true,
          header: () => <DefaultHeader title={"Trở thành tiểu thương"} />,
        }}
      />
      <Tabs.Screen
        name="beingMember"
        options={{
          headerShown: true,
          header: () => <DefaultHeader title={"Gói thành viên"} />,
        }}
      />
    </Tabs>
  );
}
