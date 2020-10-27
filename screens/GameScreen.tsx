import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";

import NumberContainer from "../components/NumberContainer";

const generateRandomBetween = (
	min: number,
	max: number,
	exclude: number
): number => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const randomNumber = Math.floor(Math.random() * (max - min)) + min;
	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return randomNumber;
	}
};

export interface GameScreenProps {
	userChoice: number;
}

const GameScreen: React.FunctionComponent<GameScreenProps> = ({
	userChoice,
}) => {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, userChoice)
	);
	return (
		<View style={styles.container}>
			<Text>Opponent's guess:</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonsContainer}>
				<Button title="Lower" onPress={() => {}} />
				<Button title="Greater" onPress={() => {}} />
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 20,
		width: 300,
		maxWidth: "80%",
	},
});

export default GameScreen;
