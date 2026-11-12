// 2026-09 를 2026년 9월로
export function formatMonth(month: string):string{
    const year= month.split("-")[0];
    const monthNumber = month.split("-")[1];
    return `${year}년 ${Number(monthNumber)}월`
}

// 두 날짜 사이가 며칠인지: daysBetween("2026-09-19", "2026-09-22") → 3
export function daysBetween(from: string, to: string): number {
  const ms = new Date(to).getTime() - new Date(from).getTime(); // 밀리초 차이
  return Math.round(ms / (1000 * 60 * 60 * 24));                // 하루 = 1000ms × 60초 × 60분 × 24시간
}
