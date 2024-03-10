import PrimaryButton from "@/components/PrimaryButton";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Stack } from "expo-router";

export default function CreateProductsScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [errors, setErrors] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("Price is required");
      return false;
    }
    if (isNaN(Number(price))) {
      setErrors("Price must be a number");
      return false;
    }
    return true;
  };

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("Create product", name);
    // TODO: Save in the Database
    resetFields();
  };

  return (
    <View className="flex-[1] justify-center p-3">
      <Stack.Screen options={{ title: "Create Product" }} />
      <Image
        className="w-1/2 mx-auto aspect-square"
        source={{
          uri: selectedImage ?? defaultPizzaImage,
        }}
      />
      <Text
        onPress={pickImageAsync}
        className="mx-auto mt-2 font-bold text-blue-500"
      >
        Select Image
      </Text>
      <Text className="text-gray-600">Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        className="p-3 bg-white rounded-md mt-1.5 mb-5"
      />

      <Text className="text-gray-600">Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        placeholder="9.99"
        className="p-3 bg-white rounded-md mt-1.5 mb-5"
      />
      <Text className="text-red-500">{errors}</Text>
      <PrimaryButton onPress={onCreate} text="Create" />
    </View>
  );
}
