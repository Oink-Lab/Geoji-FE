import dayjs from "dayjs";

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
