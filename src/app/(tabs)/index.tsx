import { getActiveChallenge } from "@/api/challenges";
import { getTransactions } from "@/api/transactions";
import { RunningBanner } from "@/components/home/running-banner";
import { StartBanner } from "@/components/home/start-banner";
import { AmountText } from "@/components/ui/amount-text";
import { AppText } from "@/components/ui/app-text";
import { SpeechBubble } from "@/components/ui/speech-bubble";
import { TabHeader } from "@/components/ui/tab-header";
import { character, colors, radius, spacing } from "@/constants/theme";
import { useTabBarSpace } from "@/hooks/use-tab-bar-space";
import { MOCK_TODAY } from "@/mocks/today";
import { Challenge } from "@/types/challenge";
import { Transaction } from "@/types/transaction";
import { getDayNumber, getTodayAvailable } from "@/utils/challenge";
import { formatMonth } from "@/utils/date";
import { sumAmount } from "@/utils/transaction";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function HomeScreen() {
  const month = "2026-09"; // 2주차에 월 이동 기능으로 바꾼다
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const { space } = useTabBarSpace(); // 탭 바가 차지하는 높이

  // 진행 중인 챌린지는 달과 상관없으니 처음 한 번만
  useEffect(() => {
    getActiveChallenge().then((data) => setChallenge(data));
  }, []);

  //화면이 처음 나타날때, month 바뀔때 거래 내역 불러오기
  useEffect(() => {
    getTransactions(month).then((data) => setTransactions(data));
  }, [month]);

  const expenseTotal = sumAmount(transactions, "expense");
  const incomeTotal = sumAmount(transactions, "income");

  return (
    <SafeAreaView style={[styles.screen, { paddingBottom: space }]} edges={["top"]}>
      {/* ① 헤더 */}
      <TabHeader
        title={`${formatMonth(month)} ▾`}
        right={
          <View style={styles.profile}>
            <Image source={require("@/assets/images/pig-face.png")} style={styles.profileImage} contentFit="contain" />
          </View>
        }
      />

      {/* ② 이번 달 요약 */}
      <View style={styles.summary}>
        <AppText color={colors.textSecondary}>출금</AppText>
        <AmountText type="expense" amount={expenseTotal} />
        <AppText color={colors.textSecondary}>입금</AppText>
        <AmountText type="income" amount={incomeTotal} />
      </View>

      {/* ③ 챌린지 배너 — 3단계 */}
      {challenge ? (
        <RunningBanner challenge={challenge}
          dayNumber={getDayNumber(challenge, MOCK_TODAY)}
          todayAvailable={getTodayAvailable(challenge, transactions, MOCK_TODAY)} />
      ) : (<StartBanner />)}

      {/* ④ 월 캘린더 — 2주차 */}
      {/* ⑤ 캐릭터 + 말풍선 — 4단계 */}
      <View style={styles.bot}>
        <SpeechBubble message="또 배달이야? 냉장고는 인테리어냐?" style={styles.bubble} />
        <Image source={require("@/assets/images/pig-grumpy.png")} style={styles.character} contentFit="contain" />
      </View>

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
  summary: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: spacing.xs,
  },
  profile: {
    width: character.profileSize,
    height: character.profileSize,
    borderRadius: radius.pill,
    backgroundColor: colors.pinkSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: character.profileSize * 0.7, // 동그라미보다 조금 작게
    height: character.profileSize * 0.7,
  },
  bot: {
    marginTop: "auto", // 남는 공간을 위에 다 몰아서 → 맨 아래로 내려감
    gap: spacing.md,
  },
  bubble: {
    marginLeft: character.bubbleIndent,
  },
  character: {
    width: character.size,
    height: character.size,
  },

});
