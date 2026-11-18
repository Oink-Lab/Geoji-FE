//캘린더 날짜 칸 하나
export type CalendarDay = {
  date: string;     // "2026-09-22"
  day: number;      // 22 (칸에 보이는 숫자)
  isToday: boolean; // 오늘이면 연분홍 배경
  expense: number;  // 그날 지출 합계
  income: number;   // 그날 입금 합계
  // 4주차: 챌린지 상태(사용 가능 금액, 하루 결과)는 여기에 추가
}

// 달력 칸 하나 = 날짜 칸 또는 빈칸(null)
export type CalendarCell = CalendarDay | null;