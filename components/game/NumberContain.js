import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContain({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContain;

const styles = StyleSheet.create({
  container: {
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontSize: 38,
    fontWeight: "bold",
    // fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});
