// 지출 / 수입 (AmountText의 type과 이름을 맞춤 → 그대로 넘길 수 있음)
export type TransactionType = "expense" | "income";

// 카테고리 (명세서 V1 고정 목록)
export type ExpenseCategory = "식비" | "카페" | "배달" | "교통" | "쇼핑" | "생활" | "문화" | "기타";
export type IncomeCategory = "급여" | "용돈" | "환급" | "기타";

// 거래 하나
export type Transaction = {
  id: string;                                 // 고유 번호
  type: TransactionType;                      // 지출 / 수입
  amount: number;                             // 금액 (부호 없이 양수로 저장)
  category: ExpenseCategory | IncomeCategory; // 카테고리
  date: string;                               // 날짜 "2026-09-21"
  paymentMethod: string;                      // 결제수단
  memo?: string;                              // 메모 (없어도 됨)
};
