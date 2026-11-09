import { StyleSheet, Text, View } from "react-native";

export default function AnalysisScreen() {
  return (
    <View style={styles.container}>
      <Text>분석</Text>
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