import { Stack } from "expo-router";

import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [ fontsLoaded ] = useFonts({
    "PressStart2P-Regular": require('../assets/fonts/PressStart2P-Regular.ttf'),
    "JosefinSans-Bold": require('../assets/fonts/JosefinSans-Bold.ttf'),
    "JosefinSans-Light": require('../assets/fonts/JosefinSans-Light.ttf'),
    "JosefinSans-Medium": require('../assets/fonts/JosefinSans-Medium.ttf'),
    "JosefinSans-Regular": require('../assets/fonts/JosefinSans-Regular.ttf'),
    "JosefinSans-SemiBold": require('../assets/fonts/JosefinSans-SemiBold.ttf'),
    "JosefinSans-Thin": require('../assets/fonts/JosefinSans-Thin.ttf')
  })

  useEffect(() => {
  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) return null;

  return <Stack />;
}
