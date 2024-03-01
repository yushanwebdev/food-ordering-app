import { Image, Text, View } from "react-native";
import products from "../../assets/data/products";

interface IProductListItemProps {
  product: (typeof products)[0];
}

export default function ProductListItem({
  product,
}: Readonly<IProductListItemProps>) {
  return (
    <View className="bg-white rounded-xl">
      <Image
        className="w-full aspect-square"
        source={{
          uri: product.image,
        }}
      />
      <Text className="text-xl font-semibold my-2">Pizza Peperoni</Text>
      <Text className="text-blue-500">$12.99</Text>
    </View>
  );
}
