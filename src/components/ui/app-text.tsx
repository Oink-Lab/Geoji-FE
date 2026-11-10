import { Text, type TextProps } from "react-native";

import { colors, typography } from "@/constants/theme";

// typography에 정의한 이름들("title" | "body" | ...)만 받을 수 있는 타입
type Variant = keyof typeof typography;

type AppTextProps = TextProps & {
  variant?: Variant; // 글자 스타일 이름 (기본: body)
  color?: string;    // 글자 색 (기본: textPrimary)
};

export function AppText({
  variant = "body",
  color = colors.textPrimary,
  style,
  ...rest
}: AppTextProps) {
  return <Text style={[typography[variant], { color }, style]} {...rest} />;
}