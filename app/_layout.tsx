import React, { useState } from "react";
import { Stack, Tabs } from 'expo-router'
// Import your global CSS file
import "../global.css";
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//
import SplashScreenComponent from "@/components/SplashScreenComponent"; // Importa el Splash Screen



const RootLayout = () => {
  ///para splash
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  // Si el splash está visible, mostrarlo antes de la navegación
  if (isSplashVisible) {
    return <SplashScreenComponent onFinish={() => setIsSplashVisible(false)} />;
  }
/////////


  return (
    <View className='flex-1'>
      <StatusBar style='dark'/>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}

export default RootLayout