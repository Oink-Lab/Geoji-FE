import { ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { AppText } from "./app-text";

type PageHeaderProps = {
    title: string;
    onBack?: () => void; // 있으면 < 표시, 없으면 빈칸
    right?: ReactNode; // 오른쪽에 넣을 것 (없어도 됨)
}

export function PageHeader({ title, onBack, right }: PageHeaderProps) {
    return (
        <View style={styles.header}>
            {/*왼쪽 칸에 onBack 있을 때만 */}
            <View style={styles.side}>
                { onBack && (
                    <Pressable onPress={onBack} hitSlop={12}>
                        <AppText variant="backIcon">‹</AppText>
                    </Pressable>
                )}
            </View>
            {/*가운데: 제목*/}
            <AppText variant="pageTitle">{title}</AppText>

            {/*오른쪽 칸: 오른쪽 끝에 붙이기*/}
            <View style={[styles.side, styles.sideRight]}>
                {right}
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    side: {
        flex: 1,

    },
    sideRight: {
        alignItems: "flex-end",
    }


})