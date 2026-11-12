// 2026-09 를 2026년 9월로

export function formatMonth(month: string):string{
    const year= month.split("-")[0];
    const monthNumber = month.split("-")[1];
    return `${year}년 ${Number(monthNumber)}월`
}