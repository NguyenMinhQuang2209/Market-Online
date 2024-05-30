import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
export default function OrderLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen
        name="order"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
