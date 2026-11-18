import { useEffect, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type ScrollViewInstance,
} from "react-native";

import { AppText } from "@/components/ui/app-text";
import { colors, wheelPicker } from "@/constants/theme";

type WheelColumnProps = {
  items: number[];                   // 고를 수 있는 값 [2025, 2026] / [1, ..., 9]
  selected: number;                  // 지금 가운데 있는 값
  suffix: string;                    // 뒤에 붙일 글자 "년" / "월"
  onChange: (value: number) => void; // 굴려서 바뀌었을 때
};

export function WheelColumn({ items, selected, suffix, onChange }: WheelColumnProps) {
  const scrollRef = useRef<ScrollViewInstance>(null); // 화면의 ScrollView를 잡는 손잡이
  const selectedIndex = items.indexOf(selected);

  // 고른 값이 가운데 오게 스크롤 위치 맞추기
  const scrollToSelected = () => {
    scrollRef.current?.scrollTo({ y: selectedIndex * wheelPicker.itemHeight, animated: false });
  };
  useEffect(scrollToSelected, [selectedIndex]);

  // 굴리기가 멈추면: 위치 ÷ 칸 높이 = 몇 번째 칸
  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.y / wheelPicker.itemHeight);
    const safeIndex = Math.min(Math.max(index, 0), items.length - 1); // 범위 밖으로 안 나가게
    onChange(items[safeIndex]);
  };

  return (
    <ScrollView
      ref={scrollRef}
      style={styles.column}
      contentContainerStyle={styles.content}
      snapToInterval={wheelPicker.itemHeight}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      onMomentumScrollEnd={handleScrollEnd}
      onLayout={scrollToSelected}
    >
      {items.map((item) => {
        const isSelected = item === selected;
        return (
          <View key={item} style={styles.item}>
            <AppText
              variant={isSelected ? "wheelItemSelected" : "wheelItem"}
              color={isSelected ? colors.textPrimary : colors.textTertiary}
            >
              {item}{suffix}
            </AppText>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  column: { flex: 1 },
  content: { paddingVertical: wheelPicker.itemHeight * 2 }, // 위아래 빈 공간 2칸
  item: { height: wheelPicker.itemHeight, alignItems: "center", justifyContent: "center" },
});
