import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess:{guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderRadius: 40,
    marginVertical: 8,
    borderWidth: 1,
    padding: 12,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    elevation: 4,
  },
});
