import { StyleSheet, View } from "react-native";

import { AppText } from "@/components/ui/app-text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { colors, spacing } from "@/constants/theme";

// 챌린지가 없을 때 홈 배너 (Figma Banner/Start)
export function StartBanner() {
  return (
    <Card>
      <View style={styles.row}>
        {/* 왼쪽: 제목 + 설명 */}
        <View style={styles.texts}>
          <AppText variant="buttonMedium">챌린지 해볼래?</AppText> 
          <AppText variant="caption" color={colors.primary}>
            정한 돈으로 며칠 버티기
          </AppText>
        </View>

        {/* 오른쪽: 시작 버튼 */}
        {/* TODO: 챌린지 시작 화면을 만들면 그 화면으로 이동 */}
        <Button title="시작 ›" size="pill" onPress={() => {}} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",          // 가로로
    justifyContent: "space-between",         // 양 끝으로
    alignItems: "center",
  },
  texts: {
    gap: spacing.xxs,              // 제목과 설명 사이 2 (가장 작은 간격 토큰)
  },
});
