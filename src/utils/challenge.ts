// 챌린지 계산은 전부 이 파일에 모음 (정책 미확정 → 바뀌면 여기만 고치기)
import type { Challenge } from "@/types/challenge";
import type { Transaction } from "@/types/transaction";
import { daysBetween } from "@/utils/date";
import { sumAmount } from "@/utils/transaction";

// 오늘이 챌린지 며칠째인지 (시작일 = DAY 1) ※ 시작일 포함 여부 팀 확인 필요
export function getDayNumber(challenge: Challenge, today: string): number {
  return daysBetween(challenge.startDate, today) + 1;
}

// 오늘 쓸 수 있는 돈 = 남은 예산 ÷ 남은 일수 (명세서 F101)
export function getTodayAvailable(
  challenge: Challenge,
  transactions: Transaction[],
  today: string,
): number {
  // 1. 시작일부터 어제까지의 거래만 고르기
  const beforeToday = transactions.filter(
    (t) => t.date >= challenge.startDate && t.date < today,
  );
  // 2. 그중 지출 합계 (만들어 둔 sumAmount 재사용!)
  const spent = sumAmount(beforeToday, "expense");

  const remainingBudget = challenge.budget - spent;
  const remainingDays = challenge.days - getDayNumber(challenge, today) + 1; // 오늘 포함

  // 3. 원 단위 아래는 버림 ※ 원 단위 처리 방식 팀 확인 필요
  return Math.floor(remainingBudget / remainingDays);
}
