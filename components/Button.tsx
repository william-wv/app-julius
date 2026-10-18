import { forwardRef } from "react";
import { Pressable, Text, View, type PressableProps } from "react-native";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps extends Omit<PressableProps, "children" | "style"> {
  label: string;
  variant?: Variant;
}

// Nomes completos (sem template string) para o Tailwind encontrar as classes no código.
const variants: Record<Variant, { container: string; label: string }> = {
  primary: { container: "btn-primary", label: "btn-label-primary" },
  secondary: { container: "btn-secondary", label: "btn-label-secondary" },
  outline: { container: "btn-outline", label: "btn-label-outline" },
};

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
      className={`btn ${variants[variant].container} active:opacity-80 ${disabled ? "opacity-40" : ""}`}
      {...rest}
    >
      <Text className={variants[variant].label}>{label}</Text>
    </Pressable>
  );
});
