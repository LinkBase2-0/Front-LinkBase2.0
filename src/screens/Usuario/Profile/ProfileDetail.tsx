import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  PasswordSvg,
  BoardSvg,
  GearSvg,
  QmSvg,
} from "../../../assets/svgImages/Usuario/Profile";

import {
  Container,
  ProfilePic,
  Title,
  Description,
  Button,
  Line,
  Option,
  Logout,
} from "./styles";
import { ScrollView } from "react-native-gesture-handler";

type ProfileDetailProps = {
  navigation: any; // o cualquier otro tipo de objeto de navegación que estés usando
}


const ProfileDetail: React.FC<ProfileDetailProps> = ({ navigation }) => {
  return (
    <ScrollView style={{backgroundColor: "white"}}>
      <Container
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 108,
          marginBottom: 15,
          backgroundColor: "white",
        }}
      >
        <ProfilePic source={require("./pic.jpeg")} />
        <Title>Alexandra</Title>
        <Description>alexandra@mail.com</Description>
        <Button onPress={() => navigation.navigate("Edit")}>
          <Text
            style={{
              fontFamily: "Outfit_700Bold",
              color: "#fff",
              fontSize: 17,
              alignSelf: "center",
              padding: 17,
            }}
          >
            Editar Perfil
          </Text>
        </Button>
        <Line />
        <View style={{ marginTop: 54, alignSelf: "flex-start" }}>
          <TouchableOpacity
            style={styles.options}
            onPress={() => navigation.navigate("Password")}
          >
            <PasswordSvg style={{ marginLeft: 41 }} />
            <Option>Cambiar contraseña</Option>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.options}>
          <BoardSvg style={{marginLeft:41}}/>
          <Option>Registrar mi empresa</Option>          
        </TouchableOpacity>  */}
          <TouchableOpacity style={styles.options}>
            <GearSvg style={{ marginLeft: 41 }} />
            <Option>Ajustes</Option>
          </TouchableOpacity>
          <TouchableOpacity style={styles.options}>
            <QmSvg style={{ marginLeft: 41 }} />
            <Option>Centro de Ayuda</Option>
          </TouchableOpacity>
        </View>
        <Logout>
          <Text
            style={{
              fontFamily: "Outfit_700Bold",
              color: "#fff",
              fontSize: 9,
              alignSelf: "center",
            }}
          >
            Cerrar Sesión
          </Text>
        </Logout>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  options: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    marginBottom: 21,
  },
});
export { ProfileDetail };
