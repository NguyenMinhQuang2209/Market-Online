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
      <Tabs.Screen name="index" options={{
        headerShown:false
      }}/>
    </Tabs>
  );
}
