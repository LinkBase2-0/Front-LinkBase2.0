import React from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import {
  EmployeeContainer,
  FullName,
  BusinessName,
  Role,
  Mail,
  Trash,
} from "./styles";
import axios from "axios";
import { ProfilePic } from "../../Usuario/Profile/styles";

interface Empleado {
  id: string;
  fullName: string;
  company: string;
  rol: string;
  charge: string;
  email: string;
  photoURL: string;
}

const EmployeeInfo: React.FC<Empleado> = ({
  id,
  fullName,
  company,
  charge,
  email,
  photoURL,
}) => {
  const handleDelete = async () => {
    const title = "Alerta";
    const message = "¿Eliminar usuario?";
    Alert.alert(title, message, [
      {
        text: "Confirmar",
        onPress: async () => {
          try {
            await axios.delete(`${process.env.IP_ADDRESS}/users/${id}`);
          } catch (error) {
            console.log(error);
          }
        },
      },
      {
        text: "Cancelar",
        onPress: () => console.log("Eliminación Cancelada"),
      },
    ]);
  };

  return (
    <EmployeeContainer>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ProfilePic
          source={{
            uri: photoURL
              ? photoURL
              : "https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png",
          }}
          style={{ height: 20, width: 20 , marginLeft: 15}}
        />
        <FullName key={id} style={{marginLeft:12}}>{fullName}</FullName>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          justifyContent: "space-between",
        }}
      >
        <BusinessName>{company}</BusinessName>
        <Role key={id}>{charge}</Role>
        <TouchableOpacity onPress={handleDelete}>
          <Trash />
        </TouchableOpacity>
      </View>
      <Mail>{email}</Mail>
    </EmployeeContainer>
  );
};

export { EmployeeInfo };
