import PrimaryButton from "@/components/PrimaryButton";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { cn } from "@/lib/utils";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

const sizes = ["S", "M", "L", "XL"];

export default function Product() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  const [selectedSize, setSelectedSize] = useState("XL");

  const addToCart = () => {
    console.warn("Add to cart", selectedSize);
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View className="flex-1 bg-white p-2.5">
      <Stack.Screen
        options={{
          title: product.name,
        }}
      />
      <Image
        className="w-full aspect-square"
        source={{
          uri: product.image ?? defaultPizzaImage,
        }}
      />
      <Text className="font-semibold my-2.5">Select size</Text>
      <View className="flex-row justify-around">
        {sizes.map((size) => (
          <Pressable
            key={size}
            onPress={() => setSelectedSize(size)}
            className={cn(
              "items-center justify-center w-12 rounded-full aspect-square",
              selectedSize === size && "bg-gray-300"
            )}
          >
            <Text
              className={cn(
                "text-xl font-medium text-gray-700",
                selectedSize === size && "text-black"
              )}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text className="mt-auto text-lg font-bold">${product.price}</Text>
      <PrimaryButton onPress={addToCart} text="Add to cart" />
    </View>
  );
}
