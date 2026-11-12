import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { TabHeader } from "@/components/ui/tab-header";
import { colors, radius, spacing } from "@/constants/theme";
import { formatMonth } from "@/utils/date";

export default function HomeScreen() {
  const month= "2026-09"; // 2주차에 월 이동 기능으로 바꾼다

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      {/* ① 헤더 */}
      <TabHeader title={`${formatMonth(month)} ▾`} right={<View style={styles.profile} />} />

      {/* ② 이번 달 요약 — 2단계 */}
      {/* ③ 챌린지 배너 — 3단계 */}
      {/* ④ 월 캘린더 — 2주차 */}
      {/* ⑤ 캐릭터 + 말풍선 — 4단계 */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,   // 흰 배경 토큰
    paddingHorizontal: spacing.screen, // 화면 좌우 여백 20
    paddingTop: spacing.lg,
  },
  profile: {
    // 임시 동그라미: 4단계에서 돼지 프로필 이미지로 바꿀 예정
    width: 41,
    height: 41,
    borderRadius: radius.pill,      // 동그랗게 (알약 모양 토큰)
    backgroundColor: colors.pinkSoft,
  },
});
