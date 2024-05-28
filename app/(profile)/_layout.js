import { Tabs } from "expo-router";
import React from "react";
import DefaultHeader from "../Component/Header/DefaultHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
export default function ProfileLayout() {
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
        name="profile"
        options={{
          headerShown: true,
          header: () => <DefaultHeader title={"Sửa thông tin cá nhân"} />,
          title: "Sửa thông tin cá nhân",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "notifications" : "notifications-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
