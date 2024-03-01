import { Image, Text, View } from "react-native";
import { Product } from "@/types";

interface IProductListItemProps {
  product: Product;
}

const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export default function ProductListItem({
  product,
}: Readonly<IProductListItemProps>) {
  return (
    <View className="bg-white rounded-xl p-4 flex-1 max-w-[50%]">
      <Image
        resizeMode="contain"
        className="w-full aspect-square"
        source={{
          uri: product.image ?? defaultPizzaImage,
        }}
      />
      <Text className="my-2 text-xl font-semibold">Pizza Peperoni</Text>
      <Text className="text-blue-500">$12.99</Text>
    </View>
  );
}
