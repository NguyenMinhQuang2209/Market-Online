import { Tabs } from "expo-router";
import React from "react";
import DefaultHeader from "../Component/Header/DefaultHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
export default function PaymentLayout() {
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
        name="payment"
        options={{
          headerShown: true,
          header: () => <DefaultHeader title={"Xác nhận mua hàng"} to={{
            folder:"(home)",
            screen:"cart"
          }}/>,
          title: "Xác nhận mua hàng",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "notifications" : "notifications-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="address"
        options={{
          headerShown: true,
          header: () => <DefaultHeader title={"Địa chỉ mua hàng"} to={{
            folder:"(payment)",
            screen:"payment"
          }}/>,
          title: "Đại chỉ mua hàng",
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
