import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
	const [userNumber, setUserNumber] = useState<number | null>();
	const [guessRounds, setGuessRounds] = useState(0);

	const handleConfigureNewGame = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const handleGameStart = (selectedNumber: number) => {
		setUserNumber(selectedNumber);
	};

	const handleGameOver = (rounds: number) => {
		setGuessRounds(rounds);
	};

	let content = <StartGameScreen startGame={handleGameStart} />;

	if (userNumber && guessRounds <= 0) {
		content = <GameScreen userChoice={userNumber} gameOver={handleGameOver} />;
	} else if (guessRounds > 0) {
		content = (
			<GameOverScreen
				rounds={guessRounds}
				userNumber={userNumber as any}
				restart={handleConfigureNewGame}
			/>
		);
	}
	return (
		<View style={styles.container}>
			<Header title="Guess a number" />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
