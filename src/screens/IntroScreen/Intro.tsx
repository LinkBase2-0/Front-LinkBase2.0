import React from "react";
//text,view,etc

import { SvgXml } from "react-native-svg";

import SvgComponent from "../../assets/IntroScreen/introScreen_svg";


import { View, Text } from "react-native";

import { Container } from "./styles";

const IntroScreen: React.FC = () => {
  return (
    <Container>
      <Text>Screen Intro</Text>
      <SvgComponent/>  
      {/* <SvgUri
        source={require("../../assets/IntroScreen/introScreen_svg")}
        width={200}
        height={200}
      /> */}
    </Container>
  );
};

export { IntroScreen };
