import { defaultPizzaImage } from "@/components/ProductListItem";
import { useCart } from "@/providers/CartProvider";
import { PizzaSize } from "@/types";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, View } from "react-native";

const sizes = ["S", "M", "L", "XL"] satisfies PizzaSize[];

export default function Product() {
  const { addItem } = useCart();
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<PizzaSize>("XL");

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push("/cart");
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
      <Text className="my-2 text-lg font-semibold">{product.name}</Text>
      <Text className="text-lg font-bold">${product.price}</Text>
    </View>
  );
}
