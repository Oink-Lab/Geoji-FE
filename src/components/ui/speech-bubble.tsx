import { colors, radius, spacing } from "@/constants/theme";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import { AppText } from "./app-text";

type SpeechBubbleProps = {
    message: string;
    style?: StyleProp<ViewStyle>; // 바깥 배치용 (예: 홈에서 캐릭터보다 오른쪽으로 들여쓰기)
}

export function SpeechBubble({ message, style }: SpeechBubbleProps) {
    return (
        <View style={[styles.bubble, style]}>
            <AppText variant="bubble" color={colors.white}>
                {message}
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    bubble: {
        alignSelf: "flex-start",
        backgroundColor: colors.bubble,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.bubbleY,
        borderTopLeftRadius: radius.md,
        borderTopRightRadius: radius.md,
        borderBottomLeftRadius: radius.xs,
        borderBottomRightRadius: radius.md,
    }
})
