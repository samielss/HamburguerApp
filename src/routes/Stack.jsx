import React from "react";
import { SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Views/Home";

export default props => {

    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}