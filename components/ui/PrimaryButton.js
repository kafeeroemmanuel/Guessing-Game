import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  // function pressHandler() {
  //   onPressed();
  //   how to pass this function or directly pass props in the onPress props }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        {/* style={({pressed}) => pressed ? [ styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} styling pressable across all platforms, above style is only for android */}
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
