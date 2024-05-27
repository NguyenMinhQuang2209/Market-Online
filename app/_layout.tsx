import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PlayfairBold:require('../assets/fonts/Playfair/PlayfairDisplay-Bold.ttf'),
    PlayfairBlack:require('../assets/fonts/Playfair/PlayfairDisplay-Black.ttf'),
    PlayfairExtraBold:require('../assets/fonts/Playfair/PlayfairDisplay-ExtraBold.ttf'),
    PlayfairMedium:require('../assets/fonts/Playfair/PlayfairDisplay-Medium.ttf'),
    PlayfairRegular:require('../assets/fonts/Playfair/PlayfairDisplay-Regular.ttf'),
    PlayfairSemiBold:require('../assets/fonts/Playfair/PlayfairDisplay-SemiBold.ttf'),
    RobotoMedium:require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
    RobotoMediumItalic:require('../assets/fonts/Roboto/Roboto-MediumItalic.ttf'),
    RobotoBlack:require('../assets/fonts/Roboto/Roboto-Black.ttf'),
    RobotoBold:require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
    RobotoThin:require('../assets/fonts/Roboto/Roboto-Thin.ttf'),
    RobotoBoldItalic:require('../assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
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
          <Stack.Screen name="(profile)" options={{ headerShown: false }} />
          <Stack.Screen name="(store)" options={{ headerShown: false }} />
          <Stack.Screen name="(payment)" options={{ headerShown: false }} />
          <Stack.Screen name="(notification)" options={{ headerShown: false }} />
          <Stack.Screen name="(chat)" options={{ headerShown: false }} />
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
