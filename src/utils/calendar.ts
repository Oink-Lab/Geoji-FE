import { CalendarCell } from "@/types/calendar";
import { Transaction } from "@/types/transaction";
import dayjs from "dayjs";
import { sumAmount } from "./transaction";

// 칸 목록을 7개씩 잘라서 줄(주)로 만들기
export function splitIntoWeeks(cells: CalendarCell[]): CalendarCell[][] {
  const weeks: CalendarCell[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    const week = cells.slice(i, i + 7);       // 7개 잘라내기
    while (week.length < 7) week.push(null);  // 마지막 줄이 모자라면 빈칸으로 채우기
    weeks.push(week);
  }
  return weeks;
}


// 한 달 캘린더 칸 목록 (일요일 시작, 1일 앞은 빈칸 null)
// getMonthDates("2026-09") → [null, null, "2026-09-01", ..., "2026-09-30"]
export function getMonthDates(month: string): (string | null)[] {
  const first = dayjs(`${month}-01`);      // 그 달 1일
  const daysInMonth = first.daysInMonth(); // 그 달은 며칠까지? (9월 → 30)
  const blanks = first.day();              // 1일의 요일 번호 = 앞 빈칸 수 (일요일 0 ~ 토요일 6)

  const cells: (string | null)[] = [];
  for (let i = 0; i < blanks; i++) {
    cells.push(null);                                   // 빈칸 채우기
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(first.date(d).format("YYYY-MM-DD"));     // 1일, 2일, ... 날짜 넣기
  }
  return cells;
}


// 날짜 목록 → 칸 정보 목록 (빈칸은 그대로 null)
export function getCalendarCells(
  month: string,
  transactions: Transaction[],
  today: string,
): CalendarCell[] {
  return getMonthDates(month).map((date) => {
    if (date === null) return null; // 빈칸은 그대로

    const dayTransactions = transactions.filter((t) => t.date === date); // 이 날짜의 거래만

    return {
      date,
      day: Number(date.split("-")[2]),          // "2026-09-22" → "22" → 22
      isToday: date === today,                 // 오늘인지
      expense: sumAmount(dayTransactions, "expense"),
      income: sumAmount(dayTransactions, "income"),
    };
  });
}