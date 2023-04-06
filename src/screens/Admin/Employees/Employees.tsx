import React, {useState, useEffect} from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import {Container, Title, Description, EmployeeSearch, SearchIcon, EmployeeContainer,FullName, BusinessName, Role, Mail, Trash} from "./styles"
import { EmployeeInfo } from "./EmployeeInfo";
import { EmployeesProps } from "../../../../App";

interface Empleado {
  id: string;
  fullName: string;
  company: string;
  role: string;
  email: string;
}


const Employees: React.FC<EmployeesProps> = () => {

  const empleadosInit : Empleado[] = [
    {
      id:"1",
      fullName: "Juan Pérez",
      company: "Office Depot",
      role: "Gerente Ventas",
      email: "juanperez@officedepot.com",

    },
    {
      id:"2",
      fullName: "Carlos González",
      company: "Office Depot",
      role: "Director Finanzas",
      email: "carlosgonzalez@officedepot.com",

    },
    {
      id:"3",
      fullName: "Pedro Fernández",
      company: "Office Depot",
      role: "CEO",
      email: "pedrofernandez@officedepot.com",

    },
    {
      id:"4",
      fullName: "María Trejo",
      company: "Office Depot",
      role: "Gerente Marketing",
      email: "mariatrejo@officedepot.com",

    },
    {
      id:"5",
      fullName: "Mauricio Rodríguez",
      company: "Office Depot",
      role: "Jefe Compras",
      email: "mauriciorodriguez@officedepot.com",

    },
    {
      id:"6",
      fullName: "Pedro Pérez",
      company: "Office Depot",
      role: "Jefe RH",
      email: "pedroperez@officedepot.com",

    },
    {
      id:"7",
      fullName: "Daniel Morales",
      company: "Analista Sistemas",
      role: "Analista Sistemas",
      email: "danielmorales@officedepot.com",

    },
    {
      id:"8",
      fullName: "Sofía Córdova",
      company: "Office Depot",
      role: "Practicante Marketing",
      email: "sofiacordova@officedepot.com",

    }
  ]

  const [search,setSearch] = useState("")
  const [empleados, setEmpleados] = useState(empleadosInit);

  const handleDelete =(id:string)=>{
    const updatedItems = empleados.filter((empleado) => empleado.id !== id);
    setEmpleados(updatedItems);
  }

  const handleSearch = (query:string)=>{
    setSearch(query)
    if(query ==="") return setEmpleados(empleadosInit)
    const filteredItems = empleados.filter((empleado)=> empleado.fullName.includes(search))
    setEmpleados(filteredItems)
  }

  return (    
    // <SafeAreaView>
    <Container>
      <Title>Trabajadores</Title>
      {/* Esta linea esta hardcodeada */}      
      <Description>Ve y administra a los empleados de Office Depot</Description>
      <View>
      <EmployeeSearch placeholder="Busca Colaboradores" placeholderTextColor={"#666161"} value={search} onChangeText={(query)=>handleSearch(query)}/>
       <SearchIcon color="black"/>
      </View>       
       <ScrollView style={{width:"100%"}} contentContainerStyle={{alignItems:"center"}}>
        {empleados.map(empleado=><EmployeeInfo id={empleado.id} fullName={empleado.fullName} company={empleado.company} role={empleado.role} email={empleado.email}onDelete={handleDelete}/>)}
       </ScrollView>

    </Container>
    // </SafeAreaView>
  );
};


export { Employees };