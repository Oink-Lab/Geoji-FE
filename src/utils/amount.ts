// 캘린더용 금액 줄여 쓰기: 8000 → "8천", 12000 → "1.2만", 2000000 → "200만"
export function formatShortAmount(amount: number): string {
  if (amount >= 10000) {
    const man = Math.floor(amount / 1000) / 10; // 12345 → 12 → 1.2
    return `${man}만`;
  }
  if (amount >= 1000) {
    const cheon = Math.floor(amount / 100) / 10; // 4500 → 45 → 4.5
    return `${cheon}천`;
  }
  return `${amount}`;
}
