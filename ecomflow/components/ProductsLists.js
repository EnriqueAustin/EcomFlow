import React from 'react';
import { FlatList, Text } from 'react-native';
import { products } from "../products";
import ProductCard from './ProductCard';

export default function ProductList() {
    return(
        <FlatList
            data={products}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) => <ProductCard {...item} />}
            contentContainerStyle={{ paddingHorizontal: 15 }}
        />
    )
}