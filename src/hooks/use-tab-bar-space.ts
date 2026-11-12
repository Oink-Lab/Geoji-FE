import { useSafeAreaInsets } from "react-native-safe-area-context";

import { tabBar } from "@/constants/theme";

// 떠 있는 탭 바의 위치와 차지하는 높이를 계산
// - bottom: 화면 아래 끝에서 탭 바까지 거리 (탭 바 위치용)
// - space: 화면 아래 끝부터 탭 바 위쪽 끝까지 높이 (화면 내용이 탭 바에 안 가려지게 할 때)
export function useTabBarSpace() {
  const insets = useSafeAreaInsets();
  const bottom = Math.max(insets.bottom - tabBar.bottomLift, tabBar.minBottom);

  return { bottom, space: bottom + tabBar.height };
}
