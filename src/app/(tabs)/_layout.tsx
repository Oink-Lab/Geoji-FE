import { colors, fonts, radius } from "@/constants/theme";
import { Tabs } from "expo-router/js-tabs";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  AnalysisIcon,
  ChallengeIcon,
  HomeIcon,
  PropertyIcon,
  SettingsIcon,
} from "@/components/icons/tab-icons";

const ICON_ACTIVE = colors.primary;   // 선택된 탭: 진한 분홍
const ICON_INACTIVE = colors.primaryLight; // 선택 안 된 탭: 연분홍

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
          borderRadius: radius.pill,
          backgroundColor: colors.pinkSoft,
          borderTopWidth: 0,
          elevation: 0,
        },
        // 탭 글자를 직접 그림: 선택된 탭은 Bold, 나머지는 Regular
        tabBarLabel: ({ focused, color, children }) => (
          <Text
            style={{
              fontFamily: focused ? fonts.bold : fonts.regular,
              fontSize: 11,
              color,
            }}
          >
            {children}
          </Text>
        ),
        tabBarItemStyle: { paddingVertical: 10 },
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