import { cn } from "@/lib/utils";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import colors from "tailwindcss/colors";

export default function MenuStack() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  color={colors.blue[500]}
                  size={25}
                  name="shopping-cart"
                  className={cn("mr-3 opacity-100", pressed && "opacity-50")}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
        }}
      />
    </Stack>
  );
}
