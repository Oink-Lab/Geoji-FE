// 챌린지 상태: 진행 중 / 성공 / 실패 (포기도 실패에 포함 — 명세서 0-5 "즉시 실패")
export type ChallengeStatus = "active" | "success" | "fail";

// 챌린지 하나
export type Challenge = {
  id: string;             // 고유 번호
  name: string;           // 챌린지 이름 ("첫 번째 챌린지")
  startDate: string;      // 시작일 "2026-09-19"
  days: number;           // 기간 (며칠 버틸지)
  budget: number;         // 총예산
  reminderTime: string;   // 기록 알림 시간 "21:00"
  status: ChallengeStatus;
};