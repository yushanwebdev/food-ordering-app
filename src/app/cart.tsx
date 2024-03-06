import CartListItem from "@/components/CartListItem";
import PrimaryButton from "@/components/PrimaryButton";
import { useCart } from "@/providers/CartProvider";
import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, Text, View } from "react-native";

export default function CartScreen() {
  const { items, total } = useCart();

  return (
    <View className="p-2.5">
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerClassName="gap-2.5"
      />
      <Text className="mt-5 text-xl font-medium">Total: ${total}</Text>
      <PrimaryButton text="Checkout" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
