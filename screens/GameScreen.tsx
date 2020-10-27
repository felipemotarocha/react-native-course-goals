import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";

import NumberContainer from "../components/NumberContainer";

const generateRandomBetween: any = (
	min: number,
	max: number,
	exclude: number
) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
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
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const handleNextGuess = (direction: "lower" | "greater") => {
		if (
			(direction === "lower" && currentGuess < userChoice) ||
			(direction === "greater" && currentGuess > userChoice)
		) {
			console.log("wrong");
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{
					text: "Sorry!",
					style: "cancel",
				},
			]);
			return;
		}
		if (direction === "lower") {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}
		const nextNumber = generateRandomBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);
		setCurrentGuess(nextNumber);
	};

	return (
		<View style={styles.container}>
			<Text>Opponent's guess:</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonsContainer}>
				<Button title="Lower" onPress={() => handleNextGuess("lower")} />
				<Button title="Greater" onPress={() => handleNextGuess("greater")} />
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
