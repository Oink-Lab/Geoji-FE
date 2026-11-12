import { Pressable, StyleSheet, type StyleProp, type ViewStyle } from "react-native";

import { buttonSize, colors } from "@/constants/theme";
import { AppText } from "./app-text";

type Variant = "primary" | "secondary" | "muted" | "danger";
type Size = keyof typeof buttonSize; // "large" | "medium" | "small"

type ButtonProps = {
  title: string;
  onPress: () => void;          // 눌렀을 때 실행할 함수
  variant?: Variant;            // 색 종류 (기본: primary)
  size?: Size;                  // 크기 (기본: large)
  disabled?: boolean;           // 비활성화 여부
  style?: StyleProp<ViewStyle>; // 바깥 배치용 (예: 팝업에서 flex: 1로 반씩 나누기)
  
};

// 색 종류별 배경색 + 글자색
const VARIANT_COLORS: Record<Variant, { background: string; text: string }> = {
  primary: { background: colors.primary, text: colors.white },           // 시작하기, 계속할래
  secondary: { background: colors.grayLight, text: colors.textPrimary }, // 취소
  muted: { background: colors.grayLight, text: colors.textSecondary },   // 포기, 챌린지 포기하기
  danger: { background: colors.danger, text: colors.white },             // 삭제
};

// 비활성화일 때는 색 종류와 상관없이 회색
const DISABLED_COLORS = { background: colors.grayDisabled, text: colors.textTertiary };

// 크기별 글자 스타일 (typography 이름)
const SIZE_TEXT = {
  large: "button",
  medium: "buttonMedium",
  small: "buttonSmall",
  pill: "buttonPill",
} as const;

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "large",
  disabled = false,
  style,
}: ButtonProps) {
  const palette = disabled ? DISABLED_COLORS : VARIANT_COLORS[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        buttonSize[size],                        // 높이 + 모서리
        { backgroundColor: palette.background }, // 배경색
        pressed && styles.pressed,               // 누르는 동안만 적용
        style,                                   // 밖에서 넘긴 배치 스타일
      ]}
    >
      <AppText variant={SIZE_TEXT[size]} color={palette.text}>
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
  pressed: {
    opacity: 0.8,
  },
});
