import React, { useEffect, useState } from "react";
import { SafeAreaView, Image } from "react-native";
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
  GridContainer,
  CategoriaCard,
  CategoriaCardText,
} from "./styles";

type Category = {
  id: string,
  name: string,
  icon: any
}

export type Provider = {
  name: string,
  id: number,
  email: string,
  phone: string,
  web: string,
  photoURL: string,
  isPending: boolean,
  time: string,
  address: string,
  latitude: string,
  longitude: string,
  createdAt: string,
  updatedAt: string,
  UserId: number
}

const categories: Category[] = [
  {
    id: "1",
    name: "Insumos",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category1.png")
  },
  {
    id: "2",
    name: "Maquinaria",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category2.png")
  },
  {
    id: "3",
    name: "Repuestos",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png")
  },
  {
    id: "4",
    name: "Material de construccion",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png")
  },
  {
    id: "5",
    name: "Servicios",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png")
  },
  {
    id: "6",
    name: "Profesionales",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png")
  }
];

const Home: React.FC<OverviewProps> = ({ navigation }) => {
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    async function requestProviders (): Promise<void> {
      try {
        const {data} = await axios.get(`${process.env.IP_ADDRESS}/providers`);
        setProviders(data);
      } catch (error: any) {
        console.error(error.response.data);
      }
    }

    requestProviders();
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <Image
          style={{ height: 155, marginTop: 22, width: "100%" }}
          source={require("../../../assets/svgImages/Usuario/Home/imgs/slider1.png")}
          resizeMode="cover"
        />
        <SearchBar style={{ elevation: 3 }} />
        <SearchIcon style={{ elevation: 3 }} />
        <ContainerCategory>
          <ScrollViewCategory
            horizontal={true}
            style={{ elevation: 3 }}
            scrollEnabled={false}
          >
            <Box padding={1} borderRadius={8} margin={1}>
              <GridContainer>
              {categories.map(category => (
                <CategoriaCard key={category.id}>
                  <Pressable
                    bg="#FFFFFF"
                    rounded="lg"
                    p={0}
                    width="100%"
                    height="70%"
                    justifyContent="center"
                    alignItems="center"
                    onPress={() => {
                      navigation.navigate("CategoryDetail", { categoryName: category.name });
                    }}
                  >
                    <Image
                      source={category.icon}
                      style={{ width: "33%", height: "55%" }}
                    />
                    <CategoriaCardText
                      style={{ width: "65%", height: "30%", fontSize: 10 }}
                    >{category.name}</CategoriaCardText>
                  </Pressable>
                </CategoriaCard>
              ))}
              </GridContainer>
            </Box>
          </ScrollViewCategory>
        </ContainerCategory>
        <TextProveedor>Proveedores Destacados</TextProveedor>
        <ProveedorContainer style={{
          display: "flex",
          justifyContent: "center",
          height: "90%",
          width: "100%",
          elevation: 1
        }}>
          <Carousel providers={providers}/>
        </ProveedorContainer>
      </Container>
    </SafeAreaView>
  );
}

export default Home;