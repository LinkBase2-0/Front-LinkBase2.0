import React from "react";
import { Text, View } from "react-native/types";


const App: React.FC = () => {
    return (
        //EN VEZ DE DIV ES VIEW
        <View>
            {/* EN VEZ DE H1 O OTRO TAG DE STRING ES: */}
            <Text>Hola como estan</Text>
        </View>
    )
}

//podemos exportar de dos maneras 
//export default App;

export {App};
