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
    <View className="bg-white rounded-xl">
      <Image
        className="w-full aspect-square"
        source={{
          uri: product.image ?? defaultPizzaImage,
        }}
      />
      <Text className="text-xl font-semibold my-2">Pizza Peperoni</Text>
      <Text className="text-blue-500">$12.99</Text>
    </View>
  );
}
