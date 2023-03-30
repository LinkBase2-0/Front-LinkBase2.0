import React,{useState} from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { AddphotoSvg } from "../../../assets";
import { ArrowLeftIcon, UserCircleIcon }from "react-native-heroicons/solid";
import { Container, ProfilePic, EditText, EditInput, Button} from "./styles";

const Edit: React.FC = ({navigation}) => {
    return(
        <Container style={{marginTop: 88,
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start"}}>
                <TouchableOpacity  style={{alignSelf:"flex-start", position:"absolute", left:32}} onPress={()=> navigation.navigate("ProfileDetail")}>
                    <ArrowLeftIcon color ="black" size={30}/>
                </TouchableOpacity>          
            <ProfilePic source={require("./pic.jpeg")} style={{marginTop:63}}/>
            <AddphotoSvg style={{marginLeft:126}}/>
            <EditText style={{alignSelf:"flex-start", marginTop: 43, marginLeft:62}}>Nombre Usuario:</EditText>
            <EditInput autoCapitalize="none"/>
            <EditText style={{alignSelf:"flex-start", marginTop: 43, marginLeft:62}}>Editar Correo:</EditText>
            <EditInput autoCapitalize="none"/>
            <Button onPress={()=> navigation.navigate("ProfileDetail")}>
                 <Text style={{
                  fontFamily: "Outfit_700Bold",
                  color: "#fff",  
                  fontSize: 17,
                  alignSelf:"center",
                  padding:17}}>
                    Editar Perfil
                </Text>
            </Button>
        </Container>
    )
}

export { Edit };
