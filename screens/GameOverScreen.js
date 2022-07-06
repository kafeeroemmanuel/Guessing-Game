import { View, StyleSheet, Image, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen({ userNumber, roundsNumber, onRestart }) {
  return (
    <View style={styles.screen}>
      <Title>Game is over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      {/* A text component can be wrapped within another text component */}
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onRestart}>Start a new Game</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    // fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 25,
  },
  highlight: {
    // fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
