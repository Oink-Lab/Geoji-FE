import { MOCK_CHALLENGES } from "@/mocks/challenges";
import { Challenge } from "@/types/challenge";

// 지금 진행 중인 챌린지 (없으면 null)
export async function getActiveChallenge(): Promise<Challenge | null> {
    //Todo(1월 API 연동): 이 안만 서버 요청으로 바꾸기
    const active = MOCK_CHALLENGES.find((c) => c.status === "active");  //find는 true 나오면 멈춤. 하나만 찾는다
    // find가 찾은걸 c에 넣어주고 c.status로 active인 상태를 돌려줘라
    return active ?? null; //?? 는 왼쪽 비었음 오른쪽 쓴다
}

// 끝난 챌린지 목록 (성공 + 실패)
export async function getPastChallenges(): Promise<Challenge[]> {
    //Todo(1월 API 연동): 이 안만 서버 요청으로 바꾸기
    return MOCK_CHALLENGES.filter((c) => c.status !== "active"); // filter는 끝까지 확인해서 true인거 다 모은다
}