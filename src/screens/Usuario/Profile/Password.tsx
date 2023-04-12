import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from "react-native";
import { ArrowLeftIcon, UserCircleIcon } from "react-native-heroicons/solid";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ProfilePic, EditText, EditInput, Button } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

type ProfileEditPasswordProps = {
  navigation: any; // o cualquier otro tipo de objeto de navegación que estés usando
};

const Password: React.FC<ProfileEditPasswordProps> = ({ navigation }) => {
  const [user, setUser] = useState({});
  const[isLoading,setIsLoading] = useState(true)

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        const decodedToken:any = jwtDecode(value);
        const response = await axios.get(`${process.env.IP_ADDRESS}/users/${decodedToken.user.id}`);
        setUser(response.data)
      }
    } catch (error) {
      console.error(error);
    }
    finally {setIsLoading(false)}
  };

  useEffect(() => {    
    getToken();
  }, []);

  const handleSubmit = () => {
    const title = "Aviso";
    const message = "Tu cambio ha sido realizado con éxito";
    Alert.alert(title, message, [
      {
        text: "OK",
        onPress: () => navigation.navigate("ProfileDetail"),
      },
    ]);
  };
  if (isLoading) return <ActivityIndicator/>
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={true}
          contentContainerStyle={{
            marginTop: "8%",
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <TouchableOpacity
            style={{ alignSelf: "flex-start", position: "absolute", left: 32 }}
            onPress={() => navigation.navigate("ProfileDetail")}
          >
            <ArrowLeftIcon color="black" size={30} />
          </TouchableOpacity>
          <ProfilePic
            source={{uri: user.photoURL}}
            style={{ marginTop: 41 }}
          />

          <EditText
            style={{ alignSelf: "flex-start", marginTop: 43, marginLeft: 62 }}
          >
            Contraseña Actual:
          </EditText>
          <EditInput secureTextEntry={true} />
          <EditText
            style={{ alignSelf: "flex-start", marginTop: 43, marginLeft: 62 }}
          >
            Nueva Contraseña:
          </EditText>
          <EditInput secureTextEntry={true} />
          <EditText
            style={{ alignSelf: "flex-start", marginTop: 43, marginLeft: 62 }}
          >
            Confirmar Contraseña:
          </EditText>
          <EditInput secureTextEntry={true} />
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

export { Password };
