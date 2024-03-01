import { Pressable, Text, View } from "react-native";
import { forwardRef } from "react";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

export default forwardRef<View | null, ButtonProps>(function Button(
  { text, ...pressableProps },
  ref
) {
  return (
    <Pressable
      ref={ref}
      {...pressableProps}
      className="items-center p-4 bg-blue-400 rounded-[100px] my-2.5"
    >
      <Text className="font-semibold text-white">{text}</Text>
    </Pressable>
  );
});
