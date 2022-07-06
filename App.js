import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Colors from "./constants/colors";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessedRounds, setGuessedRounds] = useState(0);

  // const [fontsLoaded] = useFonts({
  //   "open-sans": require("./assets/fonts/OpenSans-Bold.ttf"),
  //   "open-sans-bold": require("./assets/fonts/OpenSans-Regular.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameIsOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessedRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    // by setting useNumber(null), both if statements below wont be truthy so the startgamescreen will be displayed first
    setUserNumber(null);
    setGuessedRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameIsOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessedRounds}
        onRestart={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
