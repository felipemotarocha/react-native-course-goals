import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface GameOverScreenProps {}

const GameOverScreen: React.FunctionComponent<GameOverScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text>The game is over!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default GameOverScreen;
