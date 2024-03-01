import { Image, Text, View } from "react-native";
import products from "../../../assets/data/products";

const product = products[1];

export default function TabOneScreen() {
  return (
    <View className="bg-white rounded-xl">
      <Image
        className="w-full aspect-square"
        source={{
          uri: product.image,
        }}
      />
      <Text className="text-xl font-semibold my-2">Pizza Peperoni</Text>
      <Text className="text-blue-300">$12.99</Text>
    </View>
  );
}
