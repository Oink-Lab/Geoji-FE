@AGENTS.md

# 거지앱 프론트엔드

절약 챌린지 + 가계부 앱. Expo(SDK 58) + TypeScript.
- 백엔드: 별도 저장소 Oink-Lab/Geoji-BE
- 기능명세서: `docs/spec.md` (V0.4)
- 개발 일정: `docs/schedule.md`

## 디자인 (Figma)
- 개발 기준 페이지: 「V0.4 개발용 (명세서 V0.4 기준)」
  https://www.figma.com/design/8VLKnlmJsqjvqq6IvZPxtu/?node-id=195-627
- 화면별 node-id는 `docs/spec.md` 15장 "화면 목록" 참고
- 「V2 보류」 페이지와 「IA V1 화면」 · 「UI 전체 화면」(이전 버전) 페이지 화면은 구현하지 않음
- 화면을 만들기 전에 해당 화면을 Figma에서 확인하고 색·크기·간격을 맞출 것
- Figma 값은 바로 하드코딩하지 말고 `theme.ts` 토큰으로 옮겨서 사용
- 명세서와 Figma가 다르면 구현 전에 먼저 물어볼 것

## 기술 결정
- 하단 탭 4개: 홈 / 챌린지 / 분석 / 설정 (자산 탭은 V2)
- 하단 탭: `expo-router/js-tabs` 사용 (Native Tabs X → 알약 모양 탭 바 커스텀 때문)
- 아이콘: Figma에서 SVG로 내보내 `react-native-svg` 컴포넌트로 변환 (`src/components/icons/`)
- 글꼴: Noto Sans KR, Regular/Medium/Bold 3개만 굵기별 경로로 import (용량 때문)
- 스타일: `StyleSheet` + `src/constants/theme.ts` 토큰

## 코드 규칙
- 색·글꼴·크기는 하드코딩 금지 → 항상 `theme.ts`의 `colors`, `typography`, `spacing`, `radius` 사용
- 글자는 `Text` 대신 `AppText` 사용
- 공통 컴포넌트: `src/components/ui/`
- 파일·폴더 이름은 영어 소문자 + 하이픈 (예: `speech-bubble.tsx`)
- 이미지·아이콘 파일 이름도 영어로
- 금액 색: 소비 빨강(expense) / 입금 초록(income) / 쓸 수 있는 돈 파랑(available) / 챌린지 전 거래 회색(past)
- 금액 부호: 일반 가계부는 부호 없이 색으로만. `+`(아낌) / `-`(초과)는 챌린지 하루 결과에만 사용

## Git
- 기본 브랜치: `dev` (모든 PR 대상). `main`은 체크포인트마다 `dev` → `main`
- **모든 작업은 이 순서로** (`dev`에 직접 커밋하지 않음):
  1. GitHub 이슈 생성 (`.github/ISSUE_TEMPLATE/` 유형 선택) → 이슈 번호 받기
  2. 최신 `dev`에서 이슈 번호로 브랜치 생성: `feature/번호-기능명` (버그 `fix/`, 디자인 `style/`, 문서 `docs/`, 설정 `chore/`)
  3. 개발 · 커밋
  4. push
  5. `dev`로 PR (`.github/pull_request_template.md`, 본문에 `closes #번호`) → 리뷰 후 Squash and Merge
- 이슈 제목: `[종류] 내용` / PR 제목: `종류: 내용 (#번호)`
- 커밋 메시지: `종류: 내용`
  - feat(기능) / fix(버그) / style(디자인) / refactor(구조 개선) / chore(설정·정리) / docs(문서) / test(테스트)

## 일정
- 새 작업을 시작하기 전에 `docs/schedule.md`에서 현재 주차 작업을 확인

## 설계 시 주의
- 캘린더: 2주차에 일반 모드부터 만들고 4주차에 챌린지 상태를 얹음 → 날짜 칸은 처음부터 상태를 추가할 수 있게 설계
- 챌린지 정책 미확정(시작일 포함 일수, 원 단위 처리, 수정·삭제 시 재계산, 동시 진행 여부) → 11/30 전 팀 확정. 그 전까지 계산 로직은 한 파일에 모아서 바꾸기 쉽게
- API: 1/3까지 Mock으로 완성. 화면에서 Mock 데이터를 직접 가져오지 말고 데이터 함수를 거치게 → 나중에 함수 안만 API로 교체
- 로그인: 방식 미확정. 소셜 로그인은 Expo Go에서 안 되므로 1월 개발 빌드 전환 전까지 UI + Mock 로그인으로 구현
- 스코프: 명세서 10장(V2)·11장(V1 제외) 기능은 구현하지 않음