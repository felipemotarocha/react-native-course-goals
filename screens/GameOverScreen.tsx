import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export interface GameOverScreenProps {
	rounds: number | undefined;
	userNumber: number | undefined;
	restart: () => void;
}

const GameOverScreen: React.FunctionComponent<GameOverScreenProps> = ({
	rounds,
	userNumber,
	restart,
}) => {
	return (
		<View style={styles.container}>
			<Text>The game is over!</Text>
			<Text>Number of rounds: {rounds}</Text>
			<Text>Number was: {userNumber}</Text>
			<Button title="New game" onPress={restart}></Button>
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
