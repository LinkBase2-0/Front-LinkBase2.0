import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
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
import { Login } from "./src/screens/Usuario/Login/Login";
import { IntroScreen } from "./src/screens/Usuario/IntroScreen/Intro";
import { Home } from "./src/screens/Usuario/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import 'react-native-gesture-handler';
import { MyTabs } from "./src/components/Navbar/Navbar";
import { Main } from "./src/screens/Usuario/Main/Main";



export default function App() {
  const [fontsLoaded] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <ThemeProvider theme={COLORS}>
        <NavigationContainer>
          <StatusBar style="dark" translucent backgroundColor="transparent" />

          <View style={styles.container}>
            <View style={styles.imageContainer}>
             <Main/>
            </View>
          </View>
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    paddingTop: 0,
  },
  imageContainer: {
    flex: 3,
    paddingTop: 0,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
