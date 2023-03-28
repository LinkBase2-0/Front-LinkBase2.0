//statusBar
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

//encapsulamiento

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

//COLORS
import COLORS from "./src/styles/theme";

//ruta login
import { Login } from "./src/screens/Login/Login";

import { IntroScreen } from "./src/screens/IntroScreen/Intro";

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
    <ThemeProvider theme={COLORS}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />

      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <IntroScreen />
        </View>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: COLORS.COLORS.ATTENTION_LIGHT4,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    paddingTop: 30,
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
