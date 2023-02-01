import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from 'nativewind';

export default function ProductCard({
    image,
    category,
    title,
    price,
    description,
}) {
    const [count, setCount] = React.useState(1);
    const { colorScheme } = useColorScheme();
    return (
        <View className='w-full bg-red dark:bg-gray-50/10' >
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
        </View>
    )
}