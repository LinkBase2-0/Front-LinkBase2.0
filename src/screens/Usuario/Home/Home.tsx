import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Box, Pressable } from "native-base";
import { OverviewProps } from "../../../components/Navigators/HomeNavigator";
import Carousel from "./carousel/Carousel";
import {
  TextProveedor,
  Container,
  SearchBar,
  SearchIcon,
  ScrollViewCategory,
  ContainerCategory,
  ProveedorContainer,
} from "./styles";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
const CARD_WIDTH = width / 3 - 25; // espacio entre las tarjetas
const CARD_HEIGHT = height / 10; // espacio entre las tarjetas

type Category = {
  id: string;
  name: string;
  iconURL: any;
};

export type Provider = {
  name: string;
  id: number;
  email: string;
  phone: string;
  web: string;
  photoURL: string;
  isPending: boolean;
  time: string;
  address: string;
  latitude: string;
  longitude: string;
  createdAt: string;
  updatedAt: string;
  UserId: number;
};

const categories: Category[] = [
  {
    id: "1",
    name: "Insumos",
    iconURL: "https://i.postimg.cc/SKNLzk85/Insumos.png",
  },
  {
    id: "2",
    name: "Maquinaria",
    iconURL: "https://i.postimg.cc/qqn2dRVt/Maquinaria.png",
  },
  {
    id: "3",
    name: "Repuestos",
    iconURL: "https://i.postimg.cc/15GDCfr2/Repuestos.png",
  },
  {
    id: "4",
    name: "Material de construccion",
    iconURL: "https://i.postimg.cc/8krRvyJ1/Material-de-construccion.png",
  },
  {
    id: "5",
    name: "Servicios",
    iconURL:
      "https://img.freepik.com/vector-premium/vector-icono-servicio-al-cliente-servicio-integral-atencion-al-cliente-mano-personas-ilustracion-vectorial_399089-2810.jpg",
  },
  {
    id: "6",
    name: "Profesionales",
    iconURL: "https://i.postimg.cc/3J5gFgm2/Profesionales.png",
  },
];

const Home: React.FC<OverviewProps> = ({ navigation }) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [categoriess, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function requestProviders(): Promise<void> {
      try {
        const { data } = await axios.get(`${process.env.IP_ADDRESS}/providers`);
        setProviders(data);
      } catch (error: any) {
        console.error(error.response.data);
      }
    }

    async function requestCategories(): Promise<void> {
      try {
        const { data } = await axios.get(
          `${process.env.IP_ADDRESS}/categories`
        );
        setCategories(data);
      } catch (error: any) {
        console.error(error.response.data);
      }
    }

    requestProviders();
    requestCategories();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Image
            style={{ height: 155, width: "100%" }}
            source={require("../../../assets/svgImages/Usuario/Home/imgs/slider1.png")}
            resizeMode="cover"
          />
          <SearchBar style={{ elevation: 3 }} />
          <SearchIcon style={{ elevation: 3 }} />
          <ContainerCategory style={{ height: 200 }}>
            <ScrollViewCategory style={{ elevation: 4 }}>
              <Box>
                {categories.map((category, rowIndex) => (
                  <View style={{ flexDirection: "row" }} key={rowIndex}>
                    {[0, 1, 2].map((colIndex) => {
                      const categoryIndex = rowIndex * 3 + colIndex;
                      if (!categories[categoryIndex]) {
                        return null;
                      }
                      const category = categories[categoryIndex];
                      return (
                        <TouchableOpacity
                          style={{
                            height: CARD_HEIGHT,
                            width: CARD_WIDTH,
                            borderRadius: 8,
                            backgroundColor: "#ffffff",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          onPress={() => {
                            navigation.navigate("CategoryDetail", {
                              categoryName: category.name,
                            });
                          }}
                          key={category.id}
                        >
                          <Image
                            source={{ uri: category.iconURL }}
                            style={{ width: "25%", height: "25%" }}
                          />
                          <Text
                            style={{
                              fontSize: 12,
                              textAlign: "center",
                              marginTop: 5,
                            }}
                          >
                            {category.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                ))}
              </Box>
            </ScrollViewCategory>
          </ContainerCategory>
          <TextProveedor>Proveedores Destacados</TextProveedor>
          <ProveedorContainer
            style={{
              display: "flex",
              justifyContent: "center",
              height: "58%",
              width: "100%",
              elevation: 1,
            }}
          >
            <Carousel providers={providers} />
          </ProveedorContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
