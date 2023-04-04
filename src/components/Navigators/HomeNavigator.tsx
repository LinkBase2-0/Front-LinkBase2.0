import React from "react"; 
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Home } from "../../screens/Usuario/Home/Home";
import ProviderScreen from "../ProviderScreen";
import CategoryDetail from "../../screens/Usuario/CategoryDetail/CategoryDetail";

type RootStackParamList = {
  "Overview": undefined;
  "Provider": undefined; 
  "Category Detail": { categoryName: string };
}

const HomeNavigator: React.FC = () => {

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Overview" component={Home}/>
      <Stack.Screen name="Provider" component={ProviderScreen}/>
      <Stack.Screen name="Category Detail" component={CategoryDetail}/>
    </Stack.Navigator>
  );
}

export type OverviewProps = NativeStackScreenProps<RootStackParamList, "Overview">;
export type ProviderProps = NativeStackScreenProps<RootStackParamList, "Provider">;
export default HomeNavigator;