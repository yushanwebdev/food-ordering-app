import { defaultPizzaImage } from "@/components/ProductListItem";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Product() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

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
