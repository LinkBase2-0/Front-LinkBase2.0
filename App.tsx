import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_700Bold,
  Outfit_800ExtraBold,
} from "@expo-google-fonts/outfit";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import COLORS from "./src/styles/theme";
import Intro from "./src/components/Intro";
import LogInScreen from "./src/components/LogInScreen";
import { Main } from "./src/screens/Usuario/Main/Main";
import theme from "./theme";
import Register from "./src/screens/Register/Register";

type RootStackParamList = {
  "Intro": undefined;
  "Log In": undefined;
  "Main": undefined;
  "Register": undefined;
}

const App = () => {

  const Stack = createStackNavigator<RootStackParamList>();

  const [fontsLoaded] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <ThemeProvider theme={COLORS}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Log In" component={LogInScreen} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

export type IntroProps = NativeStackScreenProps<RootStackParamList, "Intro">
export type LogInProps = NativeStackScreenProps<RootStackParamList, "Log In">
export type MainProps = NativeStackScreenProps<RootStackParamList, "Main">
export type RegisterProps = NativeStackScreenProps<RootStackParamList, "Register">
export default App;