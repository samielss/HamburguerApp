import React from "react";
import { SafeAreaView } from "react-native";
import Stack from "./routes/Stack";

export default props => {
    return (
        <SafeAreaView style={{flex:1}}>
            <Stack/>
        </SafeAreaView>
    )
}
