import React from "react";
import { View, StyleSheet, Button } from "react-native";

import BodyText from "../components/BodyText";

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
			<BodyText>The game is over!</BodyText>
			<BodyText>Number of rounds: {rounds}</BodyText>
			<BodyText>Number was: {userNumber}</BodyText>
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
