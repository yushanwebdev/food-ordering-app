import { View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";

const Root = () => {
  return (
    <View className="flex-[1] justify-center p-3">
      <Link href={"/(user)"} asChild>
        <PrimaryButton text="User" />
      </Link>
      <Link href={"/(admin)"} asChild>
        <PrimaryButton text="Admin" />
      </Link>
    </View>
  );
};

export default Root;
