import { NotoSansKR_400Regular } from "@expo-google-fonts/noto-sans-kr/400Regular";
import { NotoSansKR_500Medium } from "@expo-google-fonts/noto-sans-kr/500Medium";
import { NotoSansKR_700Bold } from "@expo-google-fonts/noto-sans-kr/700Bold";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// 글꼴이 준비될 때까지 스플래시 화면을 자동으로 내리지 말라고 미리 요청
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // 글꼴 3개를 불러오기 시작. 다 되면 fontsLoaded가 true로 바뀜
  const [fontsLoaded, fontError] = useFonts({
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
  });

  // 불러오기가 끝나면(성공이든 실패든) 스플래시를 내림
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // 아직 준비 중이면 아무것도 그리지 않음 (스플래시가 대신 보임)
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}