import { MOCK_TRANSACTIONS } from "@/mocks/transactions";
import type { Transaction } from "@/types/transaction";

// 한 달의 거래 내역 가져오기 (month 예: "2026-09")
export async function getTransactions(month: string): Promise<Transaction[]> {
  // TODO(1월 API 연동): 이 안만 서버 요청으로 바꾸기
  return MOCK_TRANSACTIONS.filter((t) => t.date.startsWith(month));
}
