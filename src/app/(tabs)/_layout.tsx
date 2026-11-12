import { colors, fonts, radius, tabBar } from "@/constants/theme";
import { Tabs } from "expo-router/js-tabs";
import { Text } from "react-native";

import { useTabBarSpace } from "@/hooks/use-tab-bar-space";
import {
  AnalysisIcon,
  ChallengeIcon,
  HomeIcon,
  SettingsIcon
} from "@/components/icons/tab-icons";

const ICON_ACTIVE = colors.primary;   // 선택된 탭: 진한 분홍
const ICON_INACTIVE = colors.primaryLight; // 선택 안 된 탭: 연분홍

export default function TabLayout() {
  const { bottom } = useTabBarSpace();

  return (
    <Tabs
      safeAreaInsets={{ bottom: 0 }}
      screenOptions={{
        headerShown: false, // 기본 헤더(탭 이름 띠) 숨김 → 화면마다 TabHeader를 직접 그림
        tabBarStyle: {
          position: "absolute",
          bottom, // 계산은 useTabBarSpace에서 (화면 아래 여백과 같은 식을 쓰려고)
          marginHorizontal: tabBar.sideMargin,
          height: tabBar.height,
          borderRadius: radius.pill,
          backgroundColor: colors.pinkSoft,
          borderTopWidth: 0,
          elevation: 0,
        },
        // 탭 글자를 직접 그림: 선택된 탭은 Medium, 나머지는 Regular
        tabBarLabel: ({ focused, color, children }) => (
          <Text
            style={{
              fontFamily: focused ? fonts.medium : fonts.regular,
              fontSize: tabBar.labelSize,
              color,
            }}
          >
            {children}
          </Text>
        ),
        tabBarItemStyle: { paddingVertical: tabBar.itemPaddingY },
        tabBarActiveTintColor: colors.textPrimary,  // 선택된 탭 "글자" 색
        tabBarInactiveTintColor: colors.textSecondary, // 선택 안 된 탭 "글자" 색
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