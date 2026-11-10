import { type ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { colors, radius, spacing } from "@/constants/theme";

type CardProps = {
  children: ReactNode;
  backgroundColor?: string; // ? = 안 줘도 됨
};

export function Card({
  children,
  backgroundColor = colors.pinkSoft, // 안 주면 연분홍 (기본값)
}: CardProps) {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
    paddingLeft: spacing.cardX,
    paddingRight: spacing.lg,
  },
});