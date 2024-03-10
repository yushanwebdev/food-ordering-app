import PrimaryButton from "@/components/PrimaryButton";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { cn } from "@/lib/utils";
import { useCart } from "@/providers/CartProvider";
import { PizzaSize } from "@/types";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

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
