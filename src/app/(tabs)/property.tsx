import { StyleSheet, Text, View } from "react-native";

export default function PropertyScreen() {
  return (
    <View style={styles.container}>
      <Text>자산</Text>
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