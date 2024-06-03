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
import { Alert } from "react-native";
import messaging from "@react-native-firebase/messaging";
import { GetToken } from "./Component/Notification/Notification";

import { Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function handleRegistrationError(errorMessage: string) {
  alert(errorMessage);
  throw new Error(errorMessage);
}

async function registerForPushNotificationsAsync() {
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      handleRegistrationError(
        "Permission not granted to get push token for push notification!"
      );
      return;
    }
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ??
      Constants?.easConfig?.projectId;
    if (!projectId) {
      handleRegistrationError("Project ID not found");
    }
    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(pushTokenString);
      return pushTokenString;
    } catch (e: unknown) {
      handleRegistrationError(`${e}`);
    }
  } else {
    handleRegistrationError("Must use physical device for push notifications");
  }
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

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
        Notifications.scheduleNotificationAsync({
          content: {
            title: remoteMessage.notification?.title,
            body: remoteMessage.notification?.body,
          },
          trigger: { seconds: 1 },
        });
      });

      return unsubscribe;
    }
  }, [loaded]);

  useEffect(() => {
    if (loaded) {
      registerForPushNotificationsAsync()
        .then((token) => setExpoPushToken(token ?? ""))
        .catch((error: any) => setExpoPushToken(`${error}`));

      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });

      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          console.log(response);
        });

      return () => {
        notificationListener.current &&
          Notifications.removeNotificationSubscription(
            notificationListener.current
          );
        responseListener.current &&
          Notifications.removeNotificationSubscription(
            responseListener.current
          );
      };
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
