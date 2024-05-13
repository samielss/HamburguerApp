// import React, {useState} from "react";
// import { FlatList, Text, View } from "react-native";
// import { ThemeProvider } from "@rneui/themed";
// import { Avatar, ListItem } from "@rneui/base";
// import datalist from "../data/datalist";

import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import datalist from "../data/datalist";
import { ListItem, Avatar, ThemeProvider, Button } from '@rneui/themed';

export default props => {

    const Style = StyleSheet.create(
        {
            title: {
                fontWeight: "bold",
            },
            price: {
                fontWeight: "bold",
                color: "green",
                marginVertical: 5
            },
            count: {
                fontWeight: "bold",
                color: "black"
            },
            card: {
                margin: 10,
                paddingVertical: 15,
                backgroundColor: "white",
                borderRadius: 10,
                elevation: 10,
            }
        }
    )

    const [count, setCount] = useState(0)

    function getListItem({ item: data }) {

        return (
            <ThemeProvider >
                <ListItem style={Style.card}>
                    <Avatar source={{ uri: data.image }} size={80} rounded />
                    <ListItem.Content>
                        <ListItem.Title style={Style.title}>{data.title}</ListItem.Title>
                        <ListItem.Subtitle style={{ color: "gray" }}>{data.desc}</ListItem.Subtitle>
                        <Text style={Style.price}>{data.price} <Text style={{ color: "gray", fontWeight: "normal" }}>per item</Text></Text>
                    </ListItem.Content>
                    <ListItem.Chevron
                        style={{ padding: 7 }}
                        name="remove"
                        color="white"
                        backgroundColor="orange"
                        borderRadius={20}
                        size={20}
                        onPress={() => {
                            count = setCount(count - 1)
                        }}
                    />
                    <ListItem.Title style={Style.count}>{count}</ListItem.Title>
                    <ListItem.Chevron
                        style={{ padding: 7 }}
                        name="add"
                        color="white"
                        backgroundColor="orange"
                        borderRadius={20}
                        size={20}
                        onPress={() => {
                            count = setCount(+1)
                        }}
                    />
                </ListItem>
            </ThemeProvider>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={datalist}
                renderItem={getListItem}
            />
        </View>
    )

}