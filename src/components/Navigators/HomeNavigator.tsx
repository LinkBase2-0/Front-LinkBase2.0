import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Home } from "../../screens/Usuario/Home/Home";
import ProviderScreen from "../ProviderScreen";
import CategoryDetail from "../../screens/Usuario/CategoryDetail/CategoryDetail";

type RootStackParamList = {
  Overview: { navigate: any }; 
  Provider: undefined;
  CategoryDetail: { categoryName: string };
};

type Props = {
  route: any; // <---- Aquí se agrega la propiedad 'route'
};



const HomeNavigator: React.FC<Props> = ({ route }) => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Overview">
        {(props: OverviewProps) => <Home {...props} />}

        {/* Aquí se pasa la propiedad 'route' al componente 'Home' */}
      </Stack.Screen>
      <Stack.Screen name="Provider" component={ProviderScreen} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
    </Stack.Navigator>
  );
};

export type OverviewProps = NativeStackScreenProps<
  RootStackParamList,
  "Overview"
>;
export type ProviderProps = NativeStackScreenProps<
  RootStackParamList,
  "Provider"
>;
export default HomeNavigator;
