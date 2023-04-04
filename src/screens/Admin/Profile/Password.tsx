import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { ArrowLeftIcon, UserCircleIcon } from "react-native-heroicons/solid";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  ProfilePic,
  EditText,
  EditInput,
  Button,
} from "../../Usuario/Profile/styles";
import { ScrollView } from "react-native-gesture-handler";
import { PasswordAdminProps } from "../../../../App";
import { Input } from "native-base";

const PasswordAdmin: React.FC<PasswordAdminProps> = ({ navigation }) => {
  const handleSubmit = () => {
    const title = "Aviso";
    const message = "Tu cambio ha sido realizado con éxito";
    Alert.alert(title, message, [
      {
        text: "OK",
        onPress: () => navigation.navigate("Profile Admin", { isAdmin: true }),
      },
    ]);
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={true}
          contentContainerStyle={{
            marginTop: "10%",
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            style={{ alignSelf: "flex-start", position: "absolute", left: 32 }}
            //onPress={() => navigation.navigate("ProfileDetail")}
          >
            <ArrowLeftIcon color="black" size={30} />
          </TouchableOpacity>
          <ProfilePic
            source={require("../../Usuario/Profile/pic.jpeg")}
            style={{ marginTop: 41 }}
          />
          <Text
            style={{ alignSelf: "flex-start", marginTop: 43, marginLeft: 62 }}
          >
            Contraseña Actual:
          </Text>
          <Input
            width="70%"
            variant="underlined"
            //placeholder="Underlined"
            style={{ alignSelf: "center", marginTop: 2 }}
          />
          <Text
            style={{ alignSelf: "flex-start", marginTop: 43, marginLeft: 62 }}
          >
            Nueva Contraseña:
          </Text>
          <Input
            width="70%"
            variant="underlined"
            secureTextEntry={true}
            //placeholder="Underlined"
            style={{ alignSelf: "center", marginTop: 2, width: "80%" }}
          />
          <Text
            style={{ alignSelf: "flex-start", marginTop: 43, marginLeft: 62 }}
          >
            Confirmar Contraseña:
          </Text>
          <Input
            width="70%"
            variant="underlined"
            secureTextEntry={true}
            //placeholder="Underlined"
            style={{ alignSelf: "center", marginTop: 2, width: "80%" }}
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
              Guardar
            </Text>
          </Button>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export { PasswordAdmin };
