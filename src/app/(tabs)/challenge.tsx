import { StyleSheet, Text, View } from "react-native";

export default function ChallengeScreen() {
  return (
    <View style={styles.container}>
      <Text>챌린지</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});