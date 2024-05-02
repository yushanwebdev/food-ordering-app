import { FlatList } from "react-native";
import ProductListItem from "@/components/ProductListItem";
import products from "@assets/data/products";
import { Link } from "expo-router";

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerClassName="gap-2.5 p-3"
      columnWrapperClassName="gap-2.5"
    />
  );
}
