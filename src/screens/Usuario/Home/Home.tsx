import React from "react";
import { SafeAreaView, Image } from "react-native";
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

import { Box, Pressable } from "native-base";
import { Carousel } from "./carousel/Carousel";
import { OverviewProps } from "../../../components/Navigators/HomeNavigator";
//import { RenderItems } from "./carousel/Carousel";

interface Category {
  id: string;
  name: string;
  icon: any;
}

interface Proveedor {
  id: string;
  title: string;
  image: any;
  review: number;
  distance: string;
}

const categories: Category[] = [
  {
    id: "1",
    name: "Category 1",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category1.png"),
  },
  {
    id: "2",
    name: "Category 2",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category2.png"),
  },
  {
    id: "3",
    name: "Category 3",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png"),
  },
  {
    id: "4",
    name: "Category 4",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png"),
  },
  {
    id: "5",
    name: "Category 5",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png"),
  },
  {
    id: "6",
    name: "Category 6",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png"),
  },
];


const Home: React.FC<OverviewProps> = ({ navigation }) => {
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
              {categories.map((category) => (
                <CategoriaCard key={category.id}>
                  <Pressable
                    bg="#FFFFFF"
                    rounded="lg"
                    p={0}
                    width="100%"
                    height="70%"
                    justifyContent="center"
                    alignItems="center"
                    onPress={()=> navigation.navigate("Category Detail", {categoryName:category.name})}
                  >
                    <Image
                      source={category.icon}
                      style={{ width: "33%", height: "55%" }}
                    />
                    <CategoriaCardText style={{ width: "65%", height: "30%" , fontSize: 10}}>{category.name}</CategoriaCardText>
                  </Pressable>
                </CategoriaCard>
              ))}
            </GridContainer>
            </Box>
          </ScrollViewCategory>
        </ContainerCategory>
        <TextProveedor>Proveedores Destacados</TextProveedor>
        <ProveedorContainer
          style={{ display: "flex", justifyContent: "center", height: "90%", width: "100%", elevation: 1 }}
        >
          <Pressable onPress={() => navigation.navigate("Provider")}>
            <Carousel />
          </Pressable>
        </ProveedorContainer>
      </Container>
    </SafeAreaView>
  );
};

export { Home };
