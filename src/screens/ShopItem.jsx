import React from 'react'
import { Text } from "react-native"
import { Card, Image } from 'react-native-elements'


export const ShopItem = (furniture) => (
    < Card key={furniture.id} style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}>
        <Image
            source={{ uri: furniture.img }}
            style={{ width: 200, height: 200 }}
        />
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{furniture.name}</Text>
        <Text style={{ marginBottom: 5 }}>{furniture.description}</Text>
        <Text style={{ marginBottom: 5 }}>{furniture.price}</Text>
    </Card >
)