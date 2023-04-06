import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  VStack,
  Icon,
  Input,
  HStack,
  Center,
  //Image,
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
import {
  TrashSvg,
  UsersAdminSvg,
  YelpAdminSvg,
} from "../../../assets/svgImages/Admin/Intro";

//importar axios
import axios from "axios";
import { Image } from "react-native";

interface Review {
  id: number;
  ProviderId: number;
  stars: number;
}

interface Proveedor {
  id: number;
  UserId: number;
  address: string;
  createdAt: string;
  email: string;
  isPending: boolean;
  latitude: string;
  longitude: string;
  name: string;
  phone: string;
  photoURL: string;
  time: string;
  updatedAt: string;
  web: string;
}

const HomeAdmin: React.FC<HomeAdminProps> = ({ navigation }) => {
  const [proveedores, setProveedores] = useState<Proveedor[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const [filtro, setFiltro] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`${process.env.IP_ADDRESS}/providers`)
      .then((response) => {
        setProveedores(response.data);
        //console.log("PROVEEDORES", response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${process.env.IP_ADDRESS}/reviews`)
      .then((response) => {
        setReviews(response.data);
        //console.log("REVIEWS", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //sacar el promedio de las reviews
  const getPromedio = (proveedorId: number): number => {
    const providerReviews = reviews.filter(
      (review) => review.ProviderId === proveedorId
    );
    const starsSum = providerReviews.reduce(
      (acc, review) => acc + review.stars,
      0
    );
    return starsSum / providerReviews.length;
  };

  //sacar la cantidad de reviews
  const getCantidadReviews = (proveedorId: number): number => {
    const providerReviews = reviews.filter(
      (review) => review.ProviderId === proveedorId
    );
    return providerReviews.length;
  };

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

  //Filtrar los proveedores en función del valor de buqueda y rating, y ordenar por promedio de reviews
  const filteredProveedores = [...proveedores]
    .sort((a, b) => {
      if (filtro === 0) {
        return getPromedio(b.id) - getPromedio(a.id);
      } else {
        return getPromedio(a.id) - getPromedio(b.id);
      }
    })
    .filter((proveedor) => {
      // Filtro por nombre del proveedor
      const searchFilter = proveedor.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      // Filtro por rating del proveedor
      let ratingFilter = false;
      if (filtro === 0) {
        ratingFilter = true;
      } else {
        ratingFilter = getPromedio(proveedor.id) >= filtro;
      }

      // Retorna verdadero si ambos filtros son verdaderos
      return searchFilter && ratingFilter;
    });

  //filtrar por rating
  const filtrarPorRating = (rating: number) => {
    const nuevoFiltro = rating === filtro ? 0 : rating;
    setFiltro(nuevoFiltro);
  };

  const handleYelpIconPress = (proveedorId: number) => {
    navigation.navigate("Reviews Admin", { proveedorId });
    //navigation.navigate('Reseñas', { proveedorId });
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
              navigation.navigate({
                name: "Profile Admin",
                params: { isAdmin: true },
              })
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
              <Filtro filtrarPorRating={filtrarPorRating} />
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
                onChangeText={setSearchValue}
                value={searchValue}
              />
            </Box>
          </HStack>
        </Center>
      </Box>
      <ScrollView>
        {filteredProveedores.length > 0 &&
          filteredProveedores.map((proveedor) => {
            //console.log("PROVEEDOR INDIVIDUAL", proveedor);

            return (
              <Box
                key={proveedor.id}
                bg="#ffffff"
                shadow={2}
                borderRadius={20}
                m={9}
                position="relative"
              >
                <Image
                  source={{ uri: proveedor.photoURL }}
                  alt={proveedor.name}
                  style={{ height: 103, width: 321, marginBottom: 4 }}
                  //height={103}
                  //width={321}
                  borderRadius={20}
                  resizeMode="contain"
                  //marginBottom={4}
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
                    fontSize={18}
                    color="#FFFFFF"
                  >
                    {proveedor.name}
                  </Text>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    {generarIconosEstrella(getPromedio(proveedor.id))}
                    <Text style={{ color: "white", marginLeft: "2%" }}>
                      {getPromedio(proveedor.id)
                        ? getPromedio(proveedor.id)
                        : 0}
                      {" de (" + getCantidadReviews(proveedor.id) + " reviews)"}
                    </Text>
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
                      onPress={() => handleYelpIconPress(proveedor.id)}
                    >
                      <YelpAdminSvg />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate({
                          name: "Employees",
                          params: { isAdmin: true },
                        })
                      }
                    >
                      <UsersAdminSvg />
                    </TouchableOpacity>
                  </View>
                </Center>
              </Box>
            );
          })}
      </ScrollView>
    </Box>
  );
};

export default HomeAdmin;
