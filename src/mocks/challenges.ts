import type { Challenge } from "@/types/challenge";

export const MOCK_CHALLENGES: Challenge[] = [
  {
    id: "c1",
    name: "첫 번째 챌린지",
    startDate: "2026-09-01",   // 9/1 ~ 9/7
    days: 7,
    budget: 50000,
    reminderTime: "21:00",
    status: "success",
  },
  {
    id: "c2",
    name: "두 번째 챌린지",
    startDate: "2026-09-08",   // 9/8 ~ 9/14
    days: 7,
    budget: 45000,
    reminderTime: "09:00",
    status: "fail",
  },
  {
    id: "c3",
    name: "세 번째 챌린지",
    startDate: "2026-09-19",   // 9/19 ~ 9/25, 9/22가 DAY 4
    days: 7,
    budget: 50000,
    reminderTime: "21:00",
    status: "active",
  },
];
