import { type ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { AppText } from "./app-text";

type TabHeaderProps = {
  title: string;
  right?: ReactNode; // 오른쪽에 넣을 것 (없어도 됨)
  onTitlePress?: () => void; // 제목을 눌렀을 때 (없으면 그냥 글자)
};

export function TabHeader({ title, right, onTitlePress }: TabHeaderProps) {
  return (
    <View style={styles.header}>
      {/* 왼쪽: 큰 제목 (22 Bold) */}
      <Pressable onPress={onTitlePress} disabled={!onTitlePress}>
        <AppText variant="title">{title}</AppText>
      </Pressable>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",             // 가로로 놓기
    justifyContent: "space-between",  // 양 끝으로 벌리기 (피그마의 SPACE_BETWEEN)
    alignItems: "center",      // 세로 가운데 맞추기
  },
});
