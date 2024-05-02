import { defaultPizzaImage } from "@/components/ProductListItem";
import { cn } from "@/lib/utils";
import products from "@assets/data/products";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import colors from "tailwindcss/colors";

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
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    color={colors.blue[500]}
                    size={25}
                    name="pencil"
                    className={cn("mr-3 opacity-100", pressed && "opacity-50")}
                  />
                )}
              </Pressable>
            </Link>
          ),
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
