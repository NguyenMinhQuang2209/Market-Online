import { Tabs } from "expo-router";
import React from "react";
import DefaultHeader from "../Component/Header/DefaultHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
export default function NewsLayout() {
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
        name="create"
        options={{
          headerShown: true,
          header: () => <DefaultHeader title={"Tạo tin tức mới"} />,
        }}
      />
    </Tabs>
  );
}
