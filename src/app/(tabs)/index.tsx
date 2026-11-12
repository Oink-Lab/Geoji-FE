import { getTransactions } from "@/api/transactions";
import { StartBanner } from "@/components/home/start-banner";
import { AmountText } from "@/components/ui/amount-text";
import { AppText } from "@/components/ui/app-text";
import { TabHeader } from "@/components/ui/tab-header";
import { colors, radius, spacing } from "@/constants/theme";
import { Transaction } from "@/types/transaction";
import { formatMonth } from "@/utils/date";
import { sumAmount } from "@/utils/transaction";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function HomeScreen() {
  const month = "2026-09"; // 2주차에 월 이동 기능으로 바꾼다
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  //화면이 처음 나타날때, month 바뀔때 거래 내역 불러오기
  useEffect(() => {
    getTransactions(month).then((data) => setTransactions(data));
  }, [month]);

  const expenseTotal = sumAmount(transactions, "expense");
  const incomeTotal = sumAmount(transactions, "income");

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      {/* ① 헤더 */}
      <TabHeader title={`${formatMonth(month)} ▾`} right={<View style={styles.profile} />} />

      {/* ② 이번 달 요약 */}
      <View style={styles.summary}>
        <AppText color={colors.textSecondary}>출금</AppText>
        <AmountText type="expense" amount={expenseTotal}/>
        <AppText color={colors.textSecondary}>입금</AppText>
        <AmountText type="income" amount={incomeTotal}/>
      </View>

      {/* ③ 챌린지 배너 — 3단계 */}
      <StartBanner/>

      {/* ④ 월 캘린더 — 2주차 */}
      {/* ⑤ 캐릭터 + 말풍선 — 4단계 */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,   // 흰 배경 토큰
    paddingHorizontal: spacing.screen, // 화면 좌우 여백 25
    paddingTop: spacing.lg,
    gap: spacing.lg, // 헤더, 요약, 베너, 캘린더 사이의 간격
  },
  profile: {
    // 임시 동그라미: 4단계에서 돼지 프로필 이미지로 바꿀 예정
    width: 41,
    height: 41,
    borderRadius: radius.pill,      // 동그랗게 (알약 모양 토큰)
    backgroundColor: colors.pinkSoft,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: spacing.xs,
  }
});
