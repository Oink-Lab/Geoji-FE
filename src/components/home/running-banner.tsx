import { StyleSheet, View } from "react-native";

import { AmountText } from "@/components/ui/amount-text";
import { AppText } from "@/components/ui/app-text";
import { Card } from "@/components/ui/card";
import { colors, spacing } from "@/constants/theme";
import type { Challenge } from "@/types/challenge";

type RunningBannerProps = {
  challenge: Challenge;
  dayNumber: number;      // 오늘이 며칠째 (DAY 4)
  todayAvailable: number; // 오늘 쓸 수 있는 돈
};

// 챌린지 진행 중일 때 홈 배너 (Figma Banner/Running)
export function RunningBanner({ challenge, dayNumber, todayAvailable }: RunningBannerProps) {
  const budgetText = `${challenge.budget / 10000}만원`; // 50000 → "5만원"

  return (
    <Card>
      <View style={styles.content}>
        <View style={styles.row}>
          <AppText variant="bannerTitle">
            {budgetText}으로 {challenge.days}일 버티기
          </AppText>
          <AppText variant="caption" color={colors.textSecondary}>
            DAY {dayNumber} / {challenge.days} ›
          </AppText>
        </View>
        <View style={styles.row}>
          <AppText variant="caption" color={colors.textSecondary}>
            오늘 쓸 수 있는 돈
          </AppText>
          <AmountText type="available" amount={todayAvailable} variant="amountLarge" showUnit />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  content: { gap: spacing.xxs },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
