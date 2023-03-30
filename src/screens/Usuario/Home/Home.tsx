import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import {
  TextProveedor,
  Container,
  SearchBar,
  SearchIcon,
  CategoryList,
  ScrollViewCategory,
  ScrollViewProveedor,
  ContainerCategory,
  ProveedorContainer,
  ProveedorImage,
  ProveedorName,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

import { Box } from "native-base";
import { HStack } from "native-base";
import SearchBas from "../../../components/Search/Search";

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
    name: "Categoría 1",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category1.png"),
  },
  {
    id: "2",
    name: "Categoría 2",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category2.png"),
  },
  {
    id: "3",
    name: "Categoría 3",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png"),
  },
  {
    id: "4",
    name: "Categoría 3",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png"),
  },
  {
    id: "5",
    name: "Categoría 3",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png"),
  },
  {
    id: "6",
    name: "Categoría 3",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png"),
  },
  {
    id: "7",
    name: "Categoría 3",
    icon: require("../../../assets/svgImages/Usuario/Home/imgs/categories/category3.png"),
  },
];

const proveedores: Proveedor[] = [
  {
    id: "1",
    title: "Proveedor 1",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/slider1.png"),
    review: 4.5,
    distance: "a 1 km",
  },
  {
    id: "2",
    title: "Proveedor 2",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/slider2.jpg"),
    review: 3.2,
    distance: "a 1 km",
  },
  {
    id: "3",
    title: "Proveedor 3",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/slider3.jpg"),
    review: 4.8,
    distance: "a 1 km",
  },
  {
    id: "4",
    title: "Proveedor 3",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/slider3.jpg"),
    review: 4.8,
    distance: "a 1 km",
  },
  {
    id: "5",
    title: "Proveedor 3",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/slider3.jpg"),
    review: 4.8,
    distance: "a 1 km",
  },
  {
    id: "6",
    title: "Proveedor 3",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/slider3.jpg"),
    review: 4.8,
    distance: "a 1 km",
  },
  {
    id: "7",
    title: "Proveedor 3",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/slider3.jpg"),
    review: 4.8,
    distance: "a 1 km",
  },
  {
    id: "8",
    title: "Proveedor 3",
    image: require("../../../assets/svgImages/Usuario/Home/imgs/slider3.jpg"),
    review: 4.8,
    distance: "a 1 km",
  },
];

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <Image
          style={{ height: 200, marginTop: 22}}
          source={require("../../../assets/svgImages/Usuario/Home/imgs/slider1.png")}
          resizeMode="cover"
        />
        <SearchBar  />
        <SearchIcon />

        <ContainerCategory>
          <ScrollViewCategory horizontal={true}>
            <Box
              borderWidth={1}
              borderColor="black"
              padding={4}
              borderRadius={8}
              margin={2}
            >
              <HStack space={4} alignItems="center">
                {categories.map((category) => (
                  <React.Fragment key={category.id}>
                    <Image source={category.icon} />
                    <Text>{category.name}</Text>
                  </React.Fragment>
                ))}
              </HStack>
            </Box>
          </ScrollViewCategory>
        </ContainerCategory>

        <TextProveedor>Proveedores Destacados</TextProveedor>
        <ProveedorContainer style={{height: 500}}>
          <ScrollViewProveedor horizontal={true}>
            {proveedores.map((proveedor) => (
              <ProveedorContainer key={proveedor.id}>
                <ProveedorImage source={proveedor.image} />
                <ProveedorName>{proveedor.title}</ProveedorName>
                <Text>{proveedor.review} {proveedor.distance}</Text>
              </ProveedorContainer>
            ))}
          </ScrollViewProveedor>
        </ProveedorContainer>
      </Container>
    </SafeAreaView>
  );
};

export { Home };
