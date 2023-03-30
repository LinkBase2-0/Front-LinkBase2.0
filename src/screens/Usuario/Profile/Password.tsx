import React,{useState} from "react";
import { Text, TouchableOpacity } from "react-native";
import { ArrowLeftIcon, UserCircleIcon }from "react-native-heroicons/solid";
import { Container, ProfilePic, EditText, EditInput, Button} from "./styles";

const Password: React.FC = ({navigation}) => {
    return(
        <Container style={{marginTop: 88,
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start"}}>
                <TouchableOpacity  style={{alignSelf:"flex-start", position:"absolute", left:32}} onPress={()=> navigation.navigate("ProfileDetail")}>
                    <ArrowLeftIcon color ="black" size={30}/>
                </TouchableOpacity>          
            <ProfilePic source={require("./pic.jpeg")} style={{marginTop:41}}/>
            
            <EditText style={{alignSelf:"flex-start", marginTop: 43, marginLeft:62}} >Contraseña Actual:</EditText>
            <EditInput secureTextEntry={true}/>
            <EditText style={{alignSelf:"flex-start", marginTop: 43, marginLeft:62}}>Nueva Contraseña:</EditText>
            <EditInput secureTextEntry={true}/>
            <EditText style={{alignSelf:"flex-start", marginTop: 43, marginLeft:62}}>Confirmar Contraseña:</EditText>
            <EditInput secureTextEntry={true}/>
            <Button onPress={()=> navigation.navigate("ProfileDetail")}>
                 <Text style={{
                  fontFamily: "Outfit_700Bold",
                  color: "#fff",  
                  fontSize: 17,
                  alignSelf:"center",
                  padding:17}}>
                    Guardar
                </Text>
            </Button>
        </Container>
    )
}

export { Password };
