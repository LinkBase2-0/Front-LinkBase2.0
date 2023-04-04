import React from "react"; 
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Home } from "../../screens/Usuario/Home/Home";
import ProviderScreen from "../ProviderScreen";

type RootStackParamList = {
  "Overview": undefined;
  "Provider": undefined; 
}

const HomeNavigator: React.FC = () => {

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Overview" component={Home}/>
      <Stack.Screen name="Provider" component={ProviderScreen}/>
    </Stack.Navigator>
  );
}

export type OverviewProps = NativeStackScreenProps<RootStackParamList, "Overview">;
export type ProviderProps = NativeStackScreenProps<RootStackParamList, "Provider">;
export default HomeNavigator;