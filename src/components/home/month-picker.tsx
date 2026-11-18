import { useEffect, useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppText } from "@/components/ui/app-text";
import { Button } from "@/components/ui/button";
import { WheelColumn } from "@/components/ui/wheel-column";
import { colors, radius, sheet, spacing, wheelPicker } from "@/constants/theme";
import { getYearOptions, MONTH_OPTIONS } from "@/utils/calendar";

type MonthPickerProps = {
  visible: boolean;
  selected: string;                  // 지금 홈 화면의 달 "2026-09"
  today: string;                     // 오늘 (미래 달은 못 고르게)
  onSelect: (month: string) => void; // 확인을 눌렀을 때
  onClose: () => void;
};

export function MonthPicker({ visible, selected, today, onSelect, onClose }: MonthPickerProps) {
  const insets = useSafeAreaInsets();

  // 아직 확정 안 한 값 (굴리는 동안 바뀜)
  const [draftYear, setDraftYear] = useState(Number(selected.split("-")[0]));   // 2026
  const [draftMonth, setDraftMonth] = useState(Number(selected.split("-")[1])); // 9

  // 열 때마다 지금 달로 되돌리기
  useEffect(() => {
    if (visible) {
      setDraftYear(Number(selected.split("-")[0]));
      setDraftMonth(Number(selected.split("-")[1]));
    }
  }, [visible, selected]);


  // 확인: 2026, 8 → "2026-08"
  const confirm = () => {
    onSelect(`${draftYear}-${String(draftMonth).padStart(2, "0")}`);
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Pressable style={styles.dim} onPress={onClose} />

        <View style={[styles.sheet, { paddingBottom: spacing.xl + insets.bottom }]}>
          <View style={styles.handle} />
          <AppText variant="sheetTitle">월 선택</AppText>

          {/* 굴리는 줄 2개 + 가운데 분홍 띠 */}
          <View style={styles.wheel}>
            <View style={styles.highlight} />
            <WheelColumn items={getYearOptions(today)} selected={draftYear} suffix="년" onChange={setDraftYear} />
            <WheelColumn items={MONTH_OPTIONS} selected={draftMonth} suffix="월" onChange={setDraftMonth} />
          </View>

          <Button title="확인" onPress={confirm} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-end" },
  dim: { ...StyleSheet.absoluteFill, backgroundColor: colors.dim },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: sheet.radius,
    borderTopRightRadius: sheet.radius,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.screen,
    gap: spacing.lg,
  },
  handle: {
    alignSelf: "center",
    width: sheet.handleWidth,
    height: sheet.handleHeight,
    borderRadius: sheet.handleHeight / 2,
    backgroundColor: colors.handle,
  },
  wheel: {
    flexDirection: "row",
    height: wheelPicker.itemHeight * wheelPicker.visibleCount, // 44 × 5
  },
  highlight: {
    position: "absolute",
    left: 0,
    right: 0,
    top: wheelPicker.itemHeight * 2, // 위에서 2칸 내려온 곳 = 가운데
    height: wheelPicker.itemHeight,
    borderRadius: radius.sm,
    backgroundColor: colors.pinkSoft,
  },
});
