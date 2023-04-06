import React from "react";
import {Alert,TouchableOpacity, View } from "react-native";
import {EmployeeContainer,FullName, BusinessName, Role, Mail, Trash} from "./styles"

interface Empleado {
    id: string;
    fullName: string;
    company: string;
    role: string;
    email: string;
    onDelete:Function;
  }

const EmployeeInfo: React.FC<Empleado> = ({id,fullName,company, role, email, onDelete}) => {

    const handleDelete = () => {
      const title = "Alerta"
      const message = "¿Eliminar usuario?"
      Alert.alert(title,message,[{
          text:"Confirmar",
          onPress: ()=>  onDelete(id),
      },{
          text:"Cancelar",
          onPress: ()=>console.log("Eliminación Cancelada")}])
      };

    return(
        <EmployeeContainer>
            <FullName key={id}>{fullName}</FullName>
            <View style={{flexDirection:"row", marginHorizontal:20, justifyContent:"space-between" }}>
              <BusinessName>{company}</BusinessName>
              <Role key={id}>{role}</Role>
              <TouchableOpacity onPress={handleDelete}>
                <Trash />
              </TouchableOpacity>              
            </View>
            <Mail>{email}</Mail>
            </EmployeeContainer>
    )
}

export {EmployeeInfo}