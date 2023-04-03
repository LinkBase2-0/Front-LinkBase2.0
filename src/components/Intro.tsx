import React from "react";
import { Box, Button, Image, Pressable, Text, VStack } from "native-base";
import { IntroProps } from "../../App";
import IntroSvg from "../assets/svg/IntroSvg";

const Intro: React.FC<IntroProps> = ({ navigation }) => {
  return (
    <Box
      safeArea
      display="flex"
      flex="1"
      justifyContent="center"
      bgColor="white"
    >
      <Pressable onPress={() => navigation.navigate("Main")}>
        <Box
          px="39"
          py="10"
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <Text
            fontFamily="body"
            fontSize="lg"
            fontWeight="500"
            color="#666161"
          >
            Omitir
          </Text>
        </Box>
      </Pressable>
      <VStack space={5} alignItems="center" mb="10">
        <IntroSvg />
        <Text
          fontFamily="body"
          fontSize="3xl"
          fontWeight="700"
          textAlign="center"
          color="#464444"
        >
          Conecta Con Proveedores
        </Text>
        <Text
          paddingBottom="6"
          px="12"
          fontFamily="body"
          fontWeight="400"
          textAlign="center"
        >
          LinkBase te permite encontrar y conectar con el proveedor indicado
          para hacer crecer tu negocio.
        </Text>
        <Box display="flex" flexDirection="row">
          <Button
            onPress={() => navigation.navigate("Log In", { isAdmin: false })}
            width="160"
            height="60"
            borderLeftRadius="15"
            borderRightRadius="0"
            bg="#981D9A"
            _pressed={{ bg: "#6f1570" }}
            shadow="9"
          >
            <Text
              fontFamily="heading"
              fontSize="lg"
              fontWeight="700"
              color="#ffffff"
            >
              Iniciar Sesión
            </Text>
          </Button>
          <Button
            onPress={() => navigation.navigate("Register")}
            width="160"
            height="60"
            borderLeftRadius="0"
            borderRightRadius="15"
            bg="#F3F3F3"
            _pressed={{ bg: "#d9d9d9" }}
            shadow="9"
          >
            <Text
              fontFamily="body"
              fontSize="lg"
              fontWeight="700"
              color="#545151"
            >
              Registrarse
            </Text>
          </Button>
        </Box>
        <Pressable
          onPress={() => navigation.navigate("Intro Admin", { isAdmin: true })}
        >
          <Text fontFamily="body" fontWeight="300" color="#981D9A">
            Eres Administrador?
          </Text>
        </Pressable>
      </VStack>
      <Image
        source={require("../assets/images/netGlobal.png")}
        alt="Net Global Logo"
        alignSelf="center"
        resizeMode="contain"
        size="lg"
      />
    </Box>
  );
};

export default Intro;
