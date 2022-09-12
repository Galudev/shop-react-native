import React from 'react'
import { FlatList, Text, View } from "react-native"
import { furnitureList } from "../data/furnitureList"
import { ShopItem } from "./ShopItem"

export const ShopList = () => {
    return (
        <FlatList
            data={furnitureList}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: furniture }) => (
                < ShopItem {...furniture} />
            )
            }
        />
    )
}
