import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Center,
  Image,
  ArrowBackIcon,
} from "native-base";
import { ReviewsAdminProps } from "../../../../App";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

//colors
import COLORS from "../../../styles/theme";

import { ScrollView } from "react-native-gesture-handler";
import { EditSvgAdmin, TrashIcon2 } from "../../../assets/svgImages/Admin/Intro/index";
import FiltroPositivos from "./FiltroPositivos/Filtro";

const reviews = [
  {
    id: 1,
    nombre: "Bob Johnson",
    image: require("./img/user.png"),
    puntuacion: 4,
    description: "Excelente servicio al cliente y productos de alta calidad.",
    fecha: "7/12/2023",
  },
  {
    id: 2,
    nombre: "Bob Johnson",
    image: require("./img/user.png"),
    puntuacion: 5,
    description: "Increíble experiencia de compra. Recomendado totalmente.",
    fecha: "7/12/2023",
  },
  {
    id: 3,
    nombre: "Bob Johnson",
    image: require("./img/user.png"),
    puntuacion: 3,
    description: "Buenos precios, pero el envío tardó más de lo esperado.",
    fecha: "7/12/2023",
  },
  {
    id: 4,
    nombre: "Bob Johnson",
    image: require("./img/user.png"),
    puntuacion: 3,
    description: "Buenos precios, pero el envío tardó más de lo esperado.",
    fecha: "7/12/2023",
  },
  {
    id: 5,
    nombre: "Bob Johnson",
    image: require("./img/user.png"),
    puntuacion: 3,
    description: "Buenos precios, pero el envío tardó más de lo esperado.",
    fecha: "7/12/2023",
  },
  {
    id: 6,
    nombre: "Bob Johnson",
    image: require("./img/user.png"),
    puntuacion: 3,
    description: "Buenos precios, pero el envío tardó más de lo esperado.",
    fecha: "7/12/2023",
  },
  {
    id: 7,
    nombre: "Bob Johnson",
    image: require("./img/user.png"),
    puntuacion: 3,
    description: "Buenos precios, pero el envío tardó más de lo esperado.",
    fecha: "7/12/2023",
  },
  {
    id: 8,
    nombre: "Bob Johnson",
    image: require("./img/user.png"),
    puntuacion: 3,
    description: "Buenos precios, pero el envío tardó más de lo esperado.",
    fecha: "7/12/2023",
  },
];

const ReviewsAdmin: React.FC<ReviewsAdminProps> = ({ navigation }) => {
  // Genera íconos de estrella
  const generarIconosEstrella = (num: number): JSX.Element[] => {
    const iconos = [];
    for (let i = 0; i < 5; i++) {
      const icono = i < num ? "star" : "star-o";
      const color = COLORS.COLORS.WHITE;
      const backgroundColor = i < num ? COLORS.COLORS.LINKBASECOLOR : "gray";

      iconos.push(
        <View
          key={i}
          style={{
            borderColor: "white",
            backgroundColor,
            padding: 3,
            height: "80%",
            borderRadius: 5,
          }}
        >
          <FontAwesome name={icono} color={color} />
        </View>
      );
    }
    return iconos;
  };

  return (
    <Box
      safeArea
      display="flex"
      flex="1"
      justifyContent="flex-start"
      bgColor="white"
    >
      <Box>
        <Box px={0.05} pt="10" pb="3" flexDirection="row" alignItems="center">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate({
                name: "Home Admin",
                params: { isAdmin: true },
              })
            }
          >
            <ArrowBackIcon
              size="6"
              color="#464444"
              style={{ marginLeft: "25%" }}
            />
          </TouchableOpacity>
          <Center>
            <Text
              mx={0.2}
              fontFamily="body"
              fontSize="4xl"
              fontWeight="700"
              color={COLORS.COLORS.BLACK}
            >
              Reseñas
            </Text>
          </Center>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate({ name: "Intro", params: { isAdmin: true } })
            }
          >
            <Ionicons
              name="person-circle-outline"
              size={24}
              color={COLORS.COLORS.LINKBASECOLOR}
              style={{ marginLeft: "20%" }}
            />
          </TouchableOpacity>
        </Box>
        <VStack space={2} alignItems="center">
          <Text px="16" fontFamily="body" fontWeight="400" textAlign="center">
            Ve y administra reseñas de Office Depot
          </Text>
        </VStack>
        <Center>
          <HStack space={2} alignItems="center" px={4} py={2}>
            <Box width={100}>
              <FiltroPositivos />
            </Box>
          </HStack>
        </Center>
      </Box>
      <ScrollView>
        {reviews.map((review) => (
          <Box
            key={review.id}
            bg="#ffffff"
            shadow={2}
            borderRadius={20}
            m={5}
            position="relative"
          >
            <Image
              marginTop={10}
              marginLeft={5}
              source={review.image}
              alt={review.nombre}
              height={36}
              width={45}
              resizeMode="contain"
              marginBottom={4}
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="65%"
              width="100%"
              marginRight="58%"
              borderRadius={20}
            >
              <View style={{ display: "flex" }}>
                <Text
                  fontFamily={COLORS.FONTS.OUTFITBOLD}
                  fontWeight="700"
                  fontSize={12}
                  color="#000000"
                >
                  {review.nombre}
                </Text>
              </View>
            </Box>
            <Box
              position="absolute"
              top={3}
              left={0}
              right={0}
              bottom={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="75%"
              width="100%"
              borderRadius={20}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "-9%",
                }}
              >
                {generarIconosEstrella(review.puntuacion)}

                <Text
                  style={{ color: "black", marginLeft: "3%", marginBottom: 1 }}
                >
                  {review.fecha}
                </Text>
              </View>
            </Box>
            <TouchableOpacity
              onPress={() => {
                // Lógica para eliminar la imagen aquí
              }}
              style={{
                position: "absolute",
                top: 12,
                right: "10%",
                height: "15%",
                width: "8%",
                borderRadius: 5,
                padding: 4,
              }}
            >
              <EditSvgAdmin />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // Lógica para eliminar la imagen aquí
              }}
              style={{
                position: "absolute",
                top: 12,
                right: "2%",
                height: "15%",
                width: "8%",
                borderRadius: 5,
                padding: 4,
              }}
            >
              <TrashIcon2 />
            </TouchableOpacity>

            <Center>
              <View
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: "5%",
                }}
              >
                <Text>{review.description}</Text>
              </View>
            </Center>
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

export default ReviewsAdmin;
