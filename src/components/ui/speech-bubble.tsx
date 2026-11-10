import { colors, radius, spacing } from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import { AppText } from "./app-text";

type SpeechBubbleProps = {
    message: string;
}

export function SpeechBubble({ message }: SpeechBubbleProps) {
    return (
        <View style={styles.bubble}>
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