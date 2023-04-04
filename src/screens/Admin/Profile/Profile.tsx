import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { PasswordSvg, BoardSvg, GearSvg, QmSvg } from "../../../assets/svgImages/Usuario/Profile/index";

import {
  Container,
  ProfilePic,
  Title,
  Description,
  Button,
  Line,
  Option,
  Logout,
} from "../../Usuario/Profile/styles";
import { ProfileAdminProps } from "../../../../App";
import { ArrowBackIcon } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const ProfileAdmin: React.FC<ProfileAdminProps> = ({ navigation }) => {
  return (
    <ScrollView style={{backgroundColor: "white"}}>
      <Container
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "20%",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate({
              name: "Home Admin",
              params: { isAdmin: true },
            })
          }
        >
          <ArrowBackIcon
            size="6"
            color="#464444"
            style={{ marginRight: "75%" }}
          />
        </TouchableOpacity>
        <ProfilePic source={require("../../Usuario/Profile/pic.jpeg")} />
        <Title>Alexandra</Title>
        <Description>alexandra@mail.com</Description>
        {/* //onPress={() => navigation.navigate("Edit")} */}
        <Line />
        <View style={{ marginTop: 54, alignSelf: "flex-start" }}>
          <TouchableOpacity
            style={styles.options}
            onPress={() =>
              navigation.navigate("Password Admin", { isAdmin: true })
            }
          >
            <PasswordSvg style={{ marginLeft: 41 }} />
            <Option>Cambiar contraseña</Option>
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
    //marginBottom: 21,
  },
});
export { ProfileAdmin };
