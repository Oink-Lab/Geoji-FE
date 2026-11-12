import type { Transaction } from "@/types/transaction";

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "t1",
    type: "expense",
    amount: 4500,
    category: "카페",
    date: "2026-09-21",
    paymentMethod: "신한카드",
    memo: "스타벅스",
  },
  {
    id: "t2",
    type: "income",
    amount: 50000,
    category: "용돈",
    date: "2026-09-20",
    paymentMethod: "국민은행",
  },
  // 여기에 직접 추가해 보기 (id는 "t3", "t4"…)
    {
    id: "t3",
    type: "income",
    amount: 30000,
    category: "급여",
    date: "2026-09-02",
    paymentMethod: "현금",
  },
    {
    id: "t4",
    type: "expense",
    amount: 15000,
    category: "배달",
    date: "2026-09-07",
    paymentMethod: "토스뱅크",
    memo: "마라탕 먹음"
  },
];
