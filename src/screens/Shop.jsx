import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ShopList } from './ShopList';

export const Shop = () => {
    return (
        <View style={styles.container}>
            <ShopList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
