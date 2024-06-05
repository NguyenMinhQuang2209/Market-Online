import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import messaging from "@react-native-firebase/messaging";
import { GetToken } from "./Component/Notification/Notification";
import PushNotification from "react-native-push-notification";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PlayfairBold: require("../assets/fonts/Playfair/PlayfairDisplay-Bold.ttf"),
    PlayfairBlack: require("../assets/fonts/Playfair/PlayfairDisplay-Black.ttf"),
    PlayfairExtraBold: require("../assets/fonts/Playfair/PlayfairDisplay-ExtraBold.ttf"),
    PlayfairMedium: require("../assets/fonts/Playfair/PlayfairDisplay-Medium.ttf"),
    PlayfairRegular: require("../assets/fonts/Playfair/PlayfairDisplay-Regular.ttf"),
    PlayfairSemiBold: require("../assets/fonts/Playfair/PlayfairDisplay-SemiBold.ttf"),
    RobotoMedium: require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    RobotoMediumItalic: require("../assets/fonts/Roboto/Roboto-MediumItalic.ttf"),
    RobotoBlack: require("../assets/fonts/Roboto/Roboto-Black.ttf"),
    RobotoBold: require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    RobotoThin: require("../assets/fonts/Roboto/Roboto-Thin.ttf"),
    RobotoBoldItalic: require("../assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (loaded) {
      PushNotification.createChannel(
        {
          channelId: "notification",
          channelName: "Default Channel",
          channelDescription: "A default channel for notifications",
          importance: 4,
          vibrate: true,
        },
        (created) => {
          //console.log(`createChannel returned '${created}'`)
        }
      );

      GetToken();

      messaging()
        .getInitialNotification()
        .then(async (remoteMessage) => {
          if (remoteMessage) {
            console.log(
              "Notification caused app to open from quit state",
              remoteMessage.notification
            );
          }
        });

      messaging().onNotificationOpenedApp((remoteMessage) => {
        console.log(
          "Notification caused app to open from background state",
          remoteMessage.notification
        );
      });

      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log(
          "message handle in the background!",
          remoteMessage.notification
        );
      });

      const unsubscribe = messaging().onMessage(async (remoteMessage) => {
        PushNotification.localNotification({
          channelId: "notification",
          title: remoteMessage.notification?.title,
          message: remoteMessage.notification?.body,
        });
      });

      return unsubscribe;
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(landingpage)" options={{ headerShown: false }} />
          <Stack.Screen name="(orderDetail)" options={{ headerShown: false }} />
          <Stack.Screen name="(being)" options={{ headerShown: false }} />
          <Stack.Screen name="(storeowner)" options={{ headerShown: false }} />
          <Stack.Screen name="(order)" options={{ headerShown: false }} />
          <Stack.Screen name="(news)" options={{ headerShown: false }} />
          <Stack.Screen name="(profile)" options={{ headerShown: false }} />
          <Stack.Screen name="(product)" options={{ headerShown: false }} />
          <Stack.Screen name="(store)" options={{ headerShown: false }} />
          <Stack.Screen name="(payment)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(notification)"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(chat)" options={{ headerShown: false }} />
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
