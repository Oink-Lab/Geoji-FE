import { colors } from "@/constants/theme";
import { formatShortAmount } from "@/utils/amount";
import { AppText } from "./app-text";

type AmountType = "expense" | "income" | "available" | "past" | "result";

type AmountTextProps = {
  amount: number;
  type: AmountType;
  variant?: "amount" | "amountLarge" | "calendarAmount";
  showUnit?: boolean;
  short?: boolean; // true면 줄여 쓰기 (캘린더용)

};

const TYPE_COLORS: Record<Exclude<AmountType, "result">, string> = {
  expense: colors.expense,
  income: colors.income,
  available: colors.available,
  past: colors.past,
};

export function AmountText({
  amount,
  type,
  variant = "amount",
  showUnit = false,
  short = false,
}: AmountTextProps) {
  const isResult = type === "result";
  // 아낌이면 true. 0원(딱 맞게 쓴 날)은 일단 아낌으로 봄 → 팀 확인 필요
  const isSaved = amount >= 0;

  // 색: 결과면 아낌 초록 / 초과 빨강, 아니면 표에서 꺼내기
  const color = isResult
    ? (isSaved ? colors.income : colors.expense)
    : TYPE_COLORS[type];

  // 부호: 결과일 때만
  const sign = isResult ? (isSaved ? "+" : "-") : "";
  // 바꾼 뒤: short면 줄여 쓰고, 아니면 쉼표
  const number = short
    ? formatShortAmount(Math.abs(amount))
    : Math.abs(amount).toLocaleString("ko-KR");

  const unit = showUnit ? "원" : "";

  return (
    <AppText variant={variant} color={color}>
      {sign}{number}{unit}
    </AppText>
  );
}
