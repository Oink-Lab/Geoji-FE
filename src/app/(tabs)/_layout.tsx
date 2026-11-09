import { Tabs } from "expo-router/js-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  AnalysisIcon,
  ChallengeIcon,
  HomeIcon,
  PropertyIcon,
  SettingsIcon,
} from "@/components/icons/tab-icons";

// 탭 아이콘 색 (Figma 기준, 1-4에서 테마 파일로 옮길 예정)
const ICON_ACTIVE = "#C9466A";   // 선택된 탭: 진한 분홍
const ICON_INACTIVE = "#E7A9B6"; // 선택 안 된 탭: 연분홍

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, 17),
          marginHorizontal: 15,
          height: 68,
          borderRadius: 34,
          backgroundColor: "#FDE8EB",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: { paddingVertical: 10 },
        tabBarActiveTintColor: "#111418",   // 선택된 탭 "글자" 색
        tabBarInactiveTintColor: "#A2A0AA", // 선택 안 된 탭 "글자" 색
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? ICON_ACTIVE : ICON_INACTIVE} />
          ),
        }}
      />
      <Tabs.Screen
        name="property"
        options={{
          title: "자산",
          tabBarIcon: ({ focused }) => (
            <PropertyIcon color={focused ? ICON_ACTIVE : ICON_INACTIVE} />
          ),
        }}
      />
      <Tabs.Screen
        name="challenge"
        options={{
          title: "챌린지",
          tabBarIcon: ({ focused }) => (
            <ChallengeIcon color={focused ? ICON_ACTIVE : ICON_INACTIVE} />
          ),
        }}
      />
      <Tabs.Screen
        name="analysis"
        options={{
          title: "분석",
          tabBarIcon: ({ focused }) => (
            <AnalysisIcon color={focused ? ICON_ACTIVE : ICON_INACTIVE} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "설정",
          tabBarIcon: ({ focused }) => (
            <SettingsIcon color={focused ? ICON_ACTIVE : ICON_INACTIVE} />
          ),
        }}
      />
    </Tabs>
  );
}