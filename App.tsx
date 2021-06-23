import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import Apploading from 'expo-app-loading';

import { StatusBar } from 'react-native';
import Background from './src/components/Background';
import SignIn from './src/screens/SignIn';
import Home from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <Apploading />;
  }

  return (
    <>
      <Background>
        <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />

        <Home />
      </Background>
    </>
  );
}
