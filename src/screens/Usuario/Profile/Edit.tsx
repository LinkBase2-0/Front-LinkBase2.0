import React,{useState} from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { AddphotoSvg } from "../../../assets/svgImages/Usuario/Profile";
import { ArrowLeftIcon }from "react-native-heroicons/solid";
import { Container, ProfilePic, EditText, EditInput, Button} from "./styles";

const Edit: React.FC = ({navigation}) => {

    const handleSubmit = () =>{
        const title = "Aviso"
        const message = "Tu cambio ha sido realizado con éxito"
        Alert.alert(title,message,[{
            text:"OK",
            onPress: ()=> navigation.navigate("ProfileDetail"),
        }])
        
    }

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
            <Button onPress={handleSubmit}>
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
