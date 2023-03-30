import styled from "styled-components/native";
import { ScrollView } from "native-base";

import Icon from "react-native-vector-icons/Ionicons";

export const Container = styled.View`
  position: relative;
  width: 390px;
  height: 844px;
  background: ${(props) => props.theme.COLORS.WHITE};
  border-radius: 50px;
`;

export const ContentWrapper = styled.View`
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 150px;
  /* o cualquier otro valor que funcione para tu diseño */
`;

export const SearchBar = styled.TextInput.attrs({
  placeholderTextColor: "gray",
  placeholder: "¿Qué estás buscando?",
})`
  position: absolute;
  top: 180px;
  left: 20px;
  right: 20px;
  height: 55px;
  background-color: white;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-color: ${(props) => props.theme.COLORS.BLACK};
  padding-right: 30px;
`;

export const SearchIcon = styled(Icon).attrs({
  name: "search-outline",
  size: 20,
  color: "gray",
})`
  position: absolute;
  top: 195px;
  right: 40px;
`;

export const CategoryList = styled.View`
  margin: 10px;
`;

export const CategoryItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ScrollViewCategory = styled(ScrollView)`
  background: ${(props) => props.theme.COLORS.WHITE};
`;

export const ContainerCategory = styled.View`
  position: relative;
  margin-top: 20px;
  width: 390px;
  height: 84px;
  background: ${(props) => props.theme.COLORS.WHITE};
  border-radius: 50px;
`;

export const TextProveedor = styled.Text`
  position: absolute;

  width: 230px;
  height: 25px;
  left: 79px;
  top: 410px;

  font-family: ${(props) => props.theme.FONTS.OUTFITBOLD};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;

  color: ${(props) => props.theme.COLORS.BLACK};
`;
export const ProveedorContainer = styled.View`
  display: flex;
  margin-left: 15px;
  margin-top: 60px;
`;

export const ProveedorImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const ProveedorName = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const ScrollViewProveedor = styled(ScrollView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
