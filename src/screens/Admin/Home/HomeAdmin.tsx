import React from "react";
import {
  Box,
  Text,
  VStack,
  Icon,
  Input,
  HStack,
  Center,
  Image,
} from "native-base";
import { HomeAdminProps } from "../../../../App";
import { TouchableOpacity, View } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

//colors
import COLORS from "../../../styles/theme";
import Filtro from "./FiltroRating/Filtro";
import { SearchIcon } from "../../Usuario/Home/styles";
import { ScrollView } from "react-native-gesture-handler";
import { TrashSvg, UsersAdminSvg, YelpAdminSvg } from "../../../assets/svgImages/Admin/Intro";

const proveedores = [
  {
    id: 1,
    title: "Office Depot",
    image: require("../../../assets/svgImages/Admin/Intro/img/proveedorr.png"),
    promedio: 3.8,
  },
  {
    id: 2,
    title: "Proveedor 2",
    image: require("../../../assets/svgImages/Admin/Intro/img/proveedorr.png"),
    promedio: 4.5,
  },
  {
    id: 3,
    title: "Proveedor 3",
    image: require("../../../assets/svgImages/Admin/Intro/img/proveedorr.png"),
    promedio: 2.7,
  },
  {
    id: 4,
    title: "Proveedor 4",
    image: require("../../../assets/svgImages/Admin/Intro/img/proveedorr.png"),
    promedio: 3.9,
  },
  {
    id: 5,
    title: "Proveedor 5",
    image: require("../../../assets/svgImages/Admin/Intro/img/proveedorr.png"),
    promedio: 4.1,
  },
];

const HomeAdmin: React.FC<HomeAdminProps> = ({ navigation }) => {
  
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
        <Box px={0.05} pt="10" pb="6" flexDirection="row" alignItems="center">
          <Center>
            <Text
              mx={0.2}
              fontFamily="body"
              fontSize="4xl"
              fontWeight="700"
              color={COLORS.COLORS.BLACK}
              marginLeft="20%"
            >
              Proveedores
            </Text>
          </Center>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate({ name: "Profile Admin", params: { isAdmin: true } })
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
            Ve y administra los proveedores disponibles
          </Text>
        </VStack>
        <Center>
          <HStack space={2} alignItems="center" px={4} py={2}>
            <Box width={100}>
              <Filtro />
            </Box>
            <Box width={200}>
              <Input
                placeholder="Busca proveedores"
                fontFamily={COLORS.FONTS.OUTFITMEDIUM}
                variant="unstyled"
                py={0}
                px={0}
                shadow={1}
                borderRadius={15}
                height={10}
                color={COLORS.COLORS.BLACK}
                alignSelf="center"
                backgroundColor="#FFFFFF"
                placeholderTextColor={COLORS.COLORS.BLACK}
                InputLeftElement={
                  <Icon
                    as={<Ionicons name="search-outline" />}
                    size="md"
                    m={2}
                  />
                }
              />
            </Box>
          </HStack>
        </Center>
      </Box>
      <ScrollView>
        {proveedores.map((proveedor) => (
          <Box
            key={proveedor.id}
            bg="#ffffff"
            shadow={2}
            borderRadius={20}
            m={9}
            position="relative"
          >
            <Image
              source={proveedor.image}
              alt={proveedor.title}
              height={103}
              width={321}
              borderRadius={20}
              resizeMode="contain"
              marginBottom={4}
              //opacity={0.9}
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="rgba(0, 0, 0, 0.6)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={103}
              width="100%"
              borderRadius={20}
            >
              <Text
                fontFamily={COLORS.FONTS.OUTFITBOLD}
                fontWeight="700"
                fontSize={25}
                color="#FFFFFF"
              >
                {proveedor.title}
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                {generarIconosEstrella(proveedor.promedio)}
                {/* <YelpAdminSvg />
                <YelpAdminSvg />
                <YelpAdminSvg />
                <YelpAdminSvg />
                <YelpAdminSvg /> */}
                <Text style={{ color: "white", marginLeft: "2%" }}>20</Text>
              </View>
            </Box>
            <TouchableOpacity
              onPress={() => {
                // Lógica para eliminar la imagen aquí
              }}
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                //backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 20,
                padding: 13,
              }}
            >
              <TrashSvg />
            </TouchableOpacity>

            <Center>
              <View
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: "5%",
                }}
              >
                {/* <TouchableOpacity> */}
                  <Text>Administrar</Text>
                {/* </TouchableOpacity> */}
                <View
                  style={{
                    borderLeftWidth: 2,
                    paddingLeft: 18,
                    borderColor: "rgba(0,0,0,0.1)",
                    height: "250%",
                    marginTop: "-8%",
                  }}
                ></View>

                <TouchableOpacity
                onPress={() =>
                  navigation.navigate({ name: "Reviews Admin", params: { isAdmin: true } })
                }
                >
                  <YelpAdminSvg />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() =>
                  navigation.navigate({ name: "Employees", params: { isAdmin: true } })
                }
                >
                  <UsersAdminSvg />
                </TouchableOpacity>
              </View>
            </Center>
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

export default HomeAdmin;
