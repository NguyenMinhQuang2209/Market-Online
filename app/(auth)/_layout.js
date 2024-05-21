import { Tabs } from "expo-router";
import React from "react";
export default function LandingPageLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen name="login" options={{
        headerShown:false
      }}/>
      <Tabs.Screen name="register" options={{
        headerShown:false
      }}/>
    </Tabs>
  );
}
