# 거지앱 (Geoji)

> 정한 돈으로 며칠 버티기
> **절약 챌린지 + AI 가계부**

소비를 직접 기록하고, AI 캐릭터와 함께 소비 습관을 확인하며, 절약 챌린지까지 이어지는 개인 가계부 앱입니다. 월 캘린더 기반 가계부, 월간 소비 분석, 거지 AI 채팅, "N일 동안 N원으로 버티기" 챌린지를 제공합니다.

이 저장소는 거지앱의 **프론트엔드(모바일 앱)** 저장소입니다.

---

## 📌 프로젝트 소개

- **소속**: Oink-Lab
- **분야**: 모바일 앱 프론트엔드 (iOS / Android)
- **기간**: 2026.11.09 ~ 2027.02.28 (V1 스토어 제출 목표)
- **백엔드 저장소**: [Oink-Lab/Geoji-BE](https://github.com/Oink-Lab/Geoji-BE)

### 문제 배경

가계부 앱은 기능이 많아질수록 금융 플랫폼처럼 복잡해지고, 기록은 며칠 못 가 끊기기 쉽습니다. **거지앱**은 기록 화면을 최대한 단순하게 만들고, "5만원으로 7일 버티기" 같은 짧은 챌린지와 장난스럽게 잔소리하는 AI 캐릭터로 기록을 계속하게 만드는 것을 목표로 합니다. 챌린지를 하지 않아도 일반 가계부로 쓸 수 있습니다.

### 핵심 기능 (V1)

| 기능 | 설명 |
| --- | --- |
| 가계부 | 월 캘린더에서 날짜를 눌러 지출 / 수입 직접 기록, 수정, 삭제 |
| 절약 챌린지 | 기간과 총예산을 정하면 하루 쓸 수 있는 돈을 매일 다시 계산 (남은 예산 ÷ 남은 일수) |
| 소비 분석 | 월 단위 카테고리별 소비, 챌린지 통계 |
| 거지 AI | 홈 하단 캐릭터 말풍선, 실제 기록을 바탕으로 답하는 AI 채팅 |

자세한 정책은 [기능명세서 V0.4](docs/spec.md)를 참고합니다.

---

## 👥 팀원 및 역할

| 역할 | 담당자 | 담당 |
| --- | --- | --- |
| 프론트엔드 · 디자인 | 이수빈 | 앱 전체 화면, Figma 디자인, 공통 컴포넌트 / 디자인 토큰, 빌드 · 배포 |
| 백엔드 | (이름) | API, 인증, AI 연동 ([Geoji-BE](https://github.com/Oink-Lab/Geoji-BE)), 프론트엔드 PR 리뷰 |

> 프론트엔드는 1인 개발입니다. 1월 초까지 Mock 데이터로 전체 화면을 완성한 뒤 API를 연동합니다.

---

## 🛠️ 기술 스택

| 분류 | 스택 |
| --- | --- |
| Language | TypeScript |
| Framework | Expo SDK 58, React Native 0.88, React 19 |
| Routing | Expo Router (파일 기반 라우팅, JS Tabs) |
| Styling | StyleSheet + 테마 토큰 (`src/constants/theme.ts`) |
| 폰트 | Noto Sans KR (@expo-google-fonts/noto-sans-kr) |
| 아이콘 | react-native-svg (Figma SVG → 컴포넌트) |
| 캐릭터 · 이미지 | expo-image (Figma 돼지 캐릭터가 이미지라 PNG로 내보냄) |
| 날짜 | dayjs |
| 패키지 매니저 | npm |
| 협업 도구 | GitHub, Notion, Figma |

### 도입 예정

| 분류 | 스택 | 시점 |
| --- | --- | --- |
| 클라이언트 상태 / Mock 저장소 | Zustand | 기록 화면 (11월 말) |
| 바텀시트 | @gorhom/bottom-sheet | 날짜별 거래내역 (11월) |
| 프로필 사진 | expo-image-picker | 프로필 수정 |
| 알림 | expo-notifications (로컬 예약 알림) | 기록 알림 |
| Lint | ESLint (expo lint) | 팀 결정 후 설정 |
| 서버 상태 / 캐싱 | TanStack Query | API 연동 (1월) |
| 빌드 · 배포 | EAS Build → TestFlight / Play 내부 테스트 | 1월 개발 빌드, 2월 베타 |

---

## 📁 폴더 구조

```text
geoji-app/
├── src/
│   ├── app/                   # 화면 (Expo Router: 파일 경로가 곧 라우트)
│   │   ├── _layout.tsx        # 앱 전체 레이아웃 (폰트 로딩 등)
│   │   └── (tabs)/            # 하단 탭 4개
│   │       ├── _layout.tsx    # 탭 바 설정
│   │       ├── index.tsx      # 홈
│   │       ├── challenge.tsx  # 챌린지
│   │       ├── analysis.tsx   # 분석
│   │       └── settings.tsx   # 설정
│   │
│   ├── components/
│   │   ├── ui/                # 공통 컴포넌트 (AppText, Button, Card, AmountText, SpeechBubble, TabHeader, PageHeader)
│   │   ├── home/              # 홈 전용 컴포넌트 (챌린지 배너 등)
│   │   └── icons/             # SVG 아이콘 컴포넌트
│   │
│   ├── api/                   # 데이터 함수 (지금은 Mock 반환 → 1월에 함수 안만 API로 교체)
│   ├── mocks/                 # Mock 데이터 (거래, 챌린지, 기준 날짜)
│   ├── types/                 # 타입 정의 (Transaction, Challenge)
│   ├── utils/                 # 순수 함수 (챌린지 계산, 날짜, 캘린더, 금액 합계)
│   ├── hooks/                 # 공통 hooks (useTabBarSpace)
│   └── constants/             # 테마 토큰 (colors, typography, spacing, radius 등)
│
├── assets/                    # 이미지(캐릭터 PNG), 아이콘 원본
├── docs/                      # 기능명세서(spec.md), 개발 일정(schedule.md)
├── .github/                   # 이슈 · PR 템플릿
└── app.json                   # Expo 앱 설정
```

화면은 Mock 데이터를 직접 가져오지 않고 항상 `src/api/`의 데이터 함수를 거칩니다. API 연동 시 화면 코드는 그대로 두고 함수 안쪽만 바꾸기 위해서입니다.

### 코드 규칙

- 색 · 글꼴 · 크기는 하드코딩하지 않고 `theme.ts` 토큰 사용
- 글자는 `Text` 대신 `AppText` 사용
- 금액은 `AmountText` 사용 (색 · 부호 규칙 내장)
- 챌린지 계산은 `src/utils/challenge.ts` 한 파일에 모음 (정책 확정 전이라 바꾸기 쉽게)
- 파일 · 폴더 이름은 영어 소문자 + 하이픈 (예: `speech-bubble.tsx`)

---

## 🌿 브랜치 컨벤션

- `main` : 배포 브랜치 (항상 실행 가능한 상태 유지)
- `dev` : 통합 개발 브랜치 (**기본 브랜치**, PR 대상)
- `feature/이슈번호-기능명` : 기능 단위 작업 브랜치

    예) `feature/3-home-calendar`, `feature/7-record-screen`

- `fix/이슈번호-내용`, `style/이슈번호-내용`, `docs/이슈번호-내용`, `chore/이슈번호-내용` : 버그 · 디자인 · 문서 · 설정 브랜치

**작업 흐름**: 이슈 생성 (템플릿) → 이슈 번호로 `dev`에서 작업 브랜치 생성 → 작업 · 커밋 → push → `dev`로 PR → 리뷰 후 머지 → 체크포인트마다 `dev` → `main` 머지

---

## 📝 커밋 컨벤션

```
종류: 작업 내용 요약

예시:
feat: 홈 월 캘린더 일반 모드 구현
fix: 챌린지 남은 일수 계산 오류 수정
style: 탭 바 높이, 위치 조정
refactor: 챌린지 계산 함수 분리
docs: README 작성
chore: dayjs 설치
```

| 종류 | 설명 |
| --- | --- |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| style | 디자인 · 스타일 변경 (로직 변경 없음) |
| refactor | 동작은 그대로 두고 코드 구조 개선 |
| docs | 문서 수정 |
| chore | 패키지 설치, 설정 등 기타 변경 |
| test | 테스트 추가 / 수정 |

---

## 🔀 이슈 · PR 컨벤션

### 이슈

- 작업을 시작하기 전에 이슈를 먼저 생성합니다. (화면 또는 기능 1개 = 이슈 1개)
- **New issue**를 누르면 유형(feat · fix · style · docs · chore)을 고르는 창이 뜨고, 고른 유형의 템플릿이 채워집니다. (`.github/ISSUE_TEMPLATE/`)
- 이슈 제목: `[종류] 작업 내용` 예) `[feat] 홈 월 캘린더 (일반 모드)`
- 이슈 본문: 할 일 체크리스트, Figma 화면 번호, 관련 명세서 항목

### PR

- PR 본문은 템플릿이 자동으로 채워집니다. (`.github/pull_request_template.md`)
- PR 제목: `종류: 작업 내용 (#이슈번호)`
- PR 본문: 관련 이슈(`closes #이슈번호`), 작업 내용, 스크린샷(UI 변경 시), 리뷰 포인트, 체크리스트
- 리뷰: 백엔드 팀원이 AI를 활용해 리뷰합니다. 리뷰 포인트에 계산 로직 · 데이터 함수처럼 꼭 봐야 할 부분을 적어 둡니다.
- 머지 전 **Files changed** 탭에서 스스로도 한 번 읽어봅니다.
- 머지 방식: Squash and Merge

---

## 🚀 실행 방법

```bash
# 저장소 클론
git clone https://github.com/Oink-Lab/Geoji-FE.git
cd Geoji-FE

# 패키지 설치
npm install

# 개발 서버 실행
npx expo start
```

실행 후 터미널에 나오는 QR 코드를 **Expo Go** 앱(iOS / Android)으로 스캔하면 폰에서 바로 확인할 수 있습니다. `i`를 누르면 iOS 시뮬레이터, `a`를 누르면 Android 에뮬레이터에서 열립니다.

```bash
# 타입 검사 (PR 전에 실행)
npx tsc --noEmit
```

> 현재는 Mock 데이터로 동작하므로 환경변수(.env)가 필요 없습니다. API 연동(1월) 시 이 항목을 추가합니다.
>
> ESLint는 아직 설정하지 않았습니다. `npm run lint`(`expo lint`)를 실행하면 ESLint를 자동으로 설치하려 하니, 팀에서 설정을 정한 뒤 사용합니다.

---

## 🗺️ 화면 목록 및 플로우

### 전체 플로우

```
스플래시 → 로그인 → 닉네임 설정
   → 홈 (월 캘린더 + 이번 달 요약 + 챌린지 배너 + 거지 AI 캐릭터)
        → 날짜 선택 → 거래내역 바텀시트 → 기록 화면 (지출 / 수입) / 거래 상세 (수정 · 삭제)
        → 거지 AI 캐릭터 → AI 채팅방
   → 챌린지 (진행 중 카드 + 지난 챌린지)
        → 챌린지 시작 → 진행 → 성공 / 실패 / 포기 → 결과 화면 → 재도전
   → 분석 (월간 카테고리별 소비 + 챌린지 통계)
   → 설정 (프로필 수정 · 기록 알림 · 계정 삭제 · 앱 정보)
```

### 하단 탭

| 탭 | 파일 | 라우트 | 역할 |
| --- | --- | --- | --- |
| 홈 | `src/app/(tabs)/index.tsx` | `/` | 월 캘린더 및 기록 |
| 챌린지 | `src/app/(tabs)/challenge.tsx` | `/challenge` | 진행 중 챌린지 / 지난 챌린지 / 새 챌린지 |
| 분석 | `src/app/(tabs)/analysis.tsx` | `/analysis` | 월간 소비 및 챌린지 분석 |
| 설정 | `src/app/(tabs)/settings.tsx` | `/settings` | 프로필 / 알림 / 계정 / 앱 정보 |

### 개발 진행 현황

| 기간 | 단계 | 상태 |
| --- | --- | --- |
| 11/9 ~ 11/15 | 셋업 + 공통 컴포넌트 + 홈 레이아웃 | 완료 |
| 11/16 ~ 12/20 | 1차 개발 A: 홈 · 기록 · 챌린지 (Mock) | 진행 중 |
| 12/21 ~ 1/3 | 1차 개발 B: 분석 · AI 채팅 · 설정 · 프로필 · 앱 진입 (Mock) | 예정 |
| 1/4 ~ 1/31 | 2차 개발: API 연동 | 예정 |
| 2/1 ~ 2/14 | 통합 테스트 & QA | 예정 |
| 2/15 ~ 2/28 | 베타 · 스토어 제출 | 예정 |

화면별 상세 일정은 [개발 일정](docs/schedule.md), 화면별 Figma 번호는 [기능명세서](docs/spec.md) 15장을 참고합니다.

---

## 📚 문서

| 문서 | 위치 |
| --- | --- |
| 기능명세서 V0.4 | [`docs/spec.md`](docs/spec.md) |
| 개발 일정 | [`docs/schedule.md`](docs/schedule.md) |
| 디자인 (Figma) | [V0.4 개발용 페이지](https://www.figma.com/design/8VLKnlmJsqjvqq6IvZPxtu/?node-id=195-627) |
