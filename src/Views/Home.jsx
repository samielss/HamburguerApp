import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import List from "../components/List";
import { Button } from "@rneui/themed";

export default props => {
    const Style = StyleSheet.create(
        {
            button:{
                position: "absolute",
                zIndex: 1,
                backgroundColor: "#4CB051",
                width: "90%",
                bottom: 0,
                padding: 15,
                borderRadius: 10,
                alignSelf: "center",
                marginBottom: 10
            }
        }
    )
    return (
        <View style={{flex: 1}}>
            <Pressable style={Style.button}><Text style={{fontWeight: "bold", color: "white", textAlign:"center"}}>Continue</Text></Pressable>
            <List/>
        </View>
    )
}
