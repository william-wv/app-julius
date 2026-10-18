import { forwardRef } from "react";
import { Pressable, StyleSheet, Text, View, type PressableProps } from "react-native";
import { colors } from "../theme/colors";

type Variant = "primary" | "ghost";

interface ButtonProps extends Omit<PressableProps, "children" | "style"> {
  label: string;
  variant?: Variant;
}

// forwardRef permite usar dentro de <Link asChild> do expo-router.
export const Button = forwardRef<View, ButtonProps>(function Button(
  { label, variant = "primary", disabled, ...rest },
  ref,
) {
  return (
    <Pressable
      ref={ref}
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      {...rest}
    >
      <Text style={[styles.label, variant === "ghost" && styles.labelGhost]}>{label}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  primary: {
    backgroundColor: colors.accent,
  },
  ghost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.accent,
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.4,
  },
  label: {
    color: colors.background,
    fontSize: 16,
    fontWeight: "bold",
  },
  labelGhost: {
    color: colors.accent,
  },
});
