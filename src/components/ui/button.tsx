import { Pressable, StyleSheet } from "react-native";

import { colors, radius } from "@/constants/theme";
import { AppText } from "./app-text";

type ButtonProps = {
  title: string;
  onPress: () => void;                 // 눌렀을 때 실행할 함수
  variant?: "primary" | "secondary";   // 색 종류
  size?: "large" | "small";            // 크기
  disabled?: boolean;                  // 비활성화 여부
};

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "large",
  disabled = false,
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const isLarge = size === "large";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        isLarge ? styles.large : styles.small,
        isPrimary ? styles.primary : styles.secondary,
        pressed && styles.pressed,   // 누르는 동안만 적용
        disabled && styles.disabled, // 비활성화일 때만 적용
      ]}
    >
      <AppText
        variant={isLarge ? "button" : "buttonSmall"}
        color={isPrimary ? colors.white : colors.textPrimary}
      >
        {title}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
  },
  large: {
    paddingVertical: 15,
    borderRadius: radius.md, // 16
  },
  small: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: radius.pill,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.grayLight,
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.4,
  },
});