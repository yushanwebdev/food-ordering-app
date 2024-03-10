import { Image, Pressable, Text, View } from "react-native";
import { Product } from "@/types";
import { Link, useSegments } from "expo-router";

interface IProductListItemProps {
  product: Product;
}

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export default function ProductListItem({
  product,
}: Readonly<IProductListItemProps>) {
  const segments = useSegments<["(admin)"] | ["(user)"]>();
  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable className="bg-white rounded-xl p-4 flex-1 max-w-[50%]">
        <Image
          resizeMode="contain"
          className="w-full aspect-square"
          source={{
            uri: product.image ?? defaultPizzaImage,
          }}
        />
        <Text className="my-2 text-lg font-semibold">{product.name}</Text>
        <Text className="font-medium text-blue-500">
          ${product.price.toFixed(2)}
        </Text>
      </Pressable>
    </Link>
  );
}
