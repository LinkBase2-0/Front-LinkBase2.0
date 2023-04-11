import styled from "styled-components/native";
import { ScrollView } from "native-base";

import Icon from "react-native-vector-icons/Ionicons";

export const Container = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.COLORS.WHITE};
`;

export const ContentWrapper = styled.View``;

export const SearchBar = styled.TextInput.attrs({
  placeholderTextColor: "black",
  placeholder: "¿Qué estás buscando?",
})`
  position: absolute;
  width: 84%;
  height: 49px;
  left: 34px;
  top: 125px;
  background: ${(props) => props.theme.COLORS.WHITE};
  border-radius: 15px;
  font-family: ${(props) => props.theme.FONTS.OUTFITLIGHT};
  padding-left: 25px;
  font-size: 16px;
`;

export const SearchIcon = styled(Icon).attrs({
  name: "search-outline",
  size: 20,
  color: "black",
})`
  position: absolute;
  left: 81.28%;
  right: 13.59%;
  top: 19.70%;
`;

export const ScrollViewCategory = styled(ScrollView)`
  position: absolute;
  width: 90%;
  left: 10%;
  top: 20%;
  border-radius: 15px;
  background: ${(props) => props.theme.COLORS.WHITE};
`;

export const ContainerCategory = styled.View`
  position: relative;
  margin-top: 20px;
  width: 90%;
  background: ${(props) => props.theme.COLORS.WHITE};
  border-radius: 50px;
`;

export const TextProveedor = styled.Text`
  display: flex;
  position: absolute;
  width: 100%;
  height: 25px;
  top: 56%;
  font-family: ${(props) => props.theme.FONTS.OUTFITEXTRABOLD};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.COLORS.BLACK};
`;
export const ProveedorContainer = styled.View`
  display: flex;
  margin-left: 4%;
`;

export const ProveedorImage = styled.Image``;

export const ProveedorName = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export const ScrollViewProveedor = styled(ScrollView)``;

export const GridContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const CategoriaCard = styled.View`
  margin-bottom: 10px;
  aspect-ratio: 1;
`;

export const CategoriaCardText = styled.Text`
  margin-top: 5px;
  font-size: 14px;
`;

export const SearchContainer = styled.View`
background: #FFFFFF;
box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.12);
border-radius: 15px;
width: 84%;
align-self:center;
margin-top:20px;
padding-bottom:10px;
`;

export const SearchTitle = styled.Text`
font-family:"Outfit_700Bold";
`;

export const SearchItem = styled.Text`
font-family:"Outfit_300Light";
margin-left:10px;
`;