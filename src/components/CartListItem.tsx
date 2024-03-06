import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { CartItem } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "../providers/CartProvider";
import { defaultPizzaImage } from "./ProductListItem";

type CartListItemProps = {
  cartItem: CartItem;
};

const CartListItem = ({ cartItem }: CartListItemProps) => {
  const { updateQuantity } = useCart();
  return (
    <View className="bg-white rounded-lg p-1.5 flex-[1] flex-row items-center">
      <Image
        source={{ uri: cartItem.product.image ?? defaultPizzaImage }}
        className="w-20 aspect-square items-center mr-2.5"
        resizeMode="contain"
      />
      <View style={{ flex: 1 }}>
        <Text className="font-medium mb-1.5">{cartItem.product.name}</Text>
        <View className="flex-row gap-1.5">
          <Text className="font-bold color-blue-500">
            ${cartItem.product.price.toFixed(2)}
          </Text>
          <Text>Size: {cartItem.size}</Text>
        </View>
      </View>
      <View className="flex-row gap-2.5 items-center my-2.5">
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, -1)}
          name="minus"
          color="gray"
          className="p-1.5"
        />

        <Text className="text-lg font-medium">{cartItem.quantity}</Text>
        <FontAwesome
          onPress={() => updateQuantity(cartItem.id, 1)}
          name="plus"
          color="gray"
          className="p-1.5"
        />
      </View>
    </View>
  );
};

export default CartListItem;
