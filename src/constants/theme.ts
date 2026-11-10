// 거지앱 디자인 토큰 (Figma 「IA V1 화면」 기준)
// 색·글꼴·크기는 이 파일에서만 정의하고, 화면에서는 이름으로 가져다 쓴다.

export const colors = {
  // 배경
  background: "#FFFFFF",
  pinkSoft: "#FDE8EB",

  // 브랜드
  primary: "#C9466A",
  primaryLight: "#E7A9B6",
  bubble: "#D97A8B",

  // 글자
  textPrimary: "#111418",
  textSecondary: "#6B7684",
  textTertiary: "#A8B0BA",
  white: "#FFFFFF",

  // 금액 색 규칙
  expense: "#E10F00",   // 소비
  income: "#009349",    // 입금
  available: "#2F6BED", // 쓸 수 있는 돈
  past: "#A8B0BA",      // 챌린지 전 일반 거래

  // 챌린지 캘린더 배경
  challengeDay: "#E9F1FE",

  //보조 버튼 배경
  grayLight:"#F7F8F9" 
} as const;

// 굵기별 글꼴 이름 (_layout.tsx의 useFonts에 등록한 이름과 같아야 함)
export const fonts = {
  regular: "NotoSansKR_400Regular",
  medium: "NotoSansKR_500Medium",
  bold: "NotoSansKR_700Bold",
} as const;

// 글자 스타일 묶음: 글꼴 + 크기를 한 세트로
export const typography = {
  title: { fontFamily: fonts.bold, fontSize: 22 },
  amountLarge: { fontFamily: fonts.bold, fontSize: 16 },
  bannerTitle: { fontFamily: fonts.bold, fontSize: 15 },
  amount: { fontFamily: fonts.bold, fontSize: 14 },
  body: { fontFamily: fonts.regular, fontSize: 13 },
  caption: { fontFamily: fonts.regular, fontSize: 12 },
  label: { fontFamily: fonts.regular, fontSize: 11 },
  calendarDay: { fontFamily: fonts.medium, fontSize: 12 },
  calendarAmount: { fontFamily: fonts.medium, fontSize: 9 },
  button: {fontFamily: fonts.bold, fontSize: 16}, // 큰버튼
  buttonSmall : {fontFamily: fonts.bold, fontSize: 13}, // 작은 버튼
} as const;

// 간격 (Figma에서 반복되는 값)
export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 14,
  xl: 16,
  screen: 20, // 화면 좌우 여백
} as const;

// 모서리 둥글기
export const radius = {
  sm: 10,    // 캘린더 날짜 칸
  md: 16,    // 말풍선
  lg: 18,    // 챌린지 배너
  pill: 999, // 알약 모양 (버튼, 탭 바)
} as const;