import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { ArrowLeftIcon, UserCircleIcon } from "react-native-heroicons/solid";
import DropdownComponent from "../../components/Dropdown";

import { Pressable } from "native-base";

import { Title, Description, Input, Button } from "./styles";
import { RegisterProps } from "../../../App";
import { TouchableOpacity } from "react-native";

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  type Form = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    empresa: string;
    cargo: string;
  };

  const handleSubmit = () => {
    const title = "Aviso";
    const message = "Te has registrado con éxito";
    Alert.alert(title, message, [
      {
        text: "OK",
        onPress: () =>
          navigation.navigate({ name: "Log In", params: { isAdmin: false } }),
      },
    ]);
  };

  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    empresa: "",
    cargo: "",
  });

  const handleInputChange = (key: keyof Form, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const empresas = [
    { label: "P&G", value: "1" },
    { label: "Unilever", value: "2" },
    { label: "Coca-Cola", value: "3" },
    { label: "Heineken", value: "4" },
  ];

  const puestos = [
    { label: "Jefe Calidad", value: "1" },
    { label: "Director Comercial", value: "2" },
    { label: "Gerente Finanzas", value: "3" },
    { label: "Analista RH", value: "4" },
    { label: "Ingeniero Sistemas", value: "5" },
    { label: "Gerente Ventas", value: "6" },
  ];

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAwareScrollView
        style={{ backgroundColor: "#fff" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{
          paddingTop: 80,
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        scrollEnabled={true}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate({ name: "Intro", params: { isAdmin: true } })
            }
          >
            <ArrowLeftIcon
              color="black"
              size={30}
              style={{
                alignSelf: "flex-start",
                position: "absolute",
                left: 32,
              }}
            />
          </TouchableOpacity>
          <Title>Registrarse</Title>
        </View>
        <Description>
          Crea una cuenta para empezar a conectar con proveedores cerca de ti
        </Description>
        <Input
          placeholder="Nombre y Apellido"
          value={form.name}
          onChangeText={(value) => handleInputChange("name", value)}
        />
        <Input
          placeholder="Email"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(value) => handleInputChange("email", value)}
        />
        <Input
          placeholder="Contraseña"
          secureTextEntry={true}
          value={form.password}
          onChangeText={(value) => handleInputChange("password", value)}
        />
        <Input
          placeholder="Confirmar Contraseña"
          secureTextEntry={true}
          value={form.passwordConfirm}
          onChangeText={(value) => handleInputChange("passwordConfirm", value)}
        />
        <DropdownComponent
          data={empresas}
          placeholderName={"Nombre de la Empresa"}
        />
        <DropdownComponent
          data={puestos}
          placeholderName={"Cargo en la Empresa"}
        />
        <Button onPress={handleSubmit}>
          <Text
            style={{
              fontFamily: "Outfit_700Bold",
              color: "#fff",
              fontSize: 17,
              alignSelf: "center",
              padding: 17,
            }}
          >
            Registrarse
          </Text>
        </Button>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Register;
