import React, { useState, useRef, useEffect } from "react";
import {
	View,
	StyleSheet,
	Alert,
	ScrollView,
	Text,
	FlatList,
	Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/Card";
import BodyText from "../components/BodyText";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

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

const renderListItem = (value: number, rounds: any) => (
	<View key={value} style={styles.listItem}>
		<BodyText>#{rounds}</BodyText>
		<BodyText>{value}</BodyText>
	</View>
);

export interface GameScreenProps {
	userChoice: number;
	gameOver: (rounds: number) => void;
}

const GameScreen: React.FunctionComponent<GameScreenProps> = ({
	userChoice,
	gameOver,
}) => {
	const initialGuess = generateRandomBetween(1, 100, userChoice);
	const [pastGuesses, setPastGuesses] = useState<number[]>([initialGuess]);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
		Dimensions.get("window").height
	);
	const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
		Dimensions.get("window").width
	);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(() => {
		const updateLayout = () => {
			setAvailableDeviceHeight(Dimensions.get("window").height);
			setAvailableDeviceWidth(Dimensions.get("window").width);
		};
		Dimensions.addEventListener("change", updateLayout);

		return () => Dimensions.removeEventListener("change", updateLayout);
	});

	useEffect(() => {
		if (currentGuess === userChoice) {
			gameOver(pastGuesses.length);
		}
	}, [currentGuess, userChoice, gameOver]);

	const handleNextGuess = (direction: "lower" | "greater") => {
		if (
			(direction === "lower" && currentGuess < userChoice) ||
			(direction === "greater" && currentGuess > userChoice)
		) {
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
			currentLow.current = currentGuess + 1;
		}
		const nextNumber = generateRandomBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);
		setCurrentGuess(nextNumber);
		setPastGuesses((currentPastGuesses) => [nextNumber, ...currentPastGuesses]);
	};

	if (availableDeviceHeight < 500) {
		return (
			<View style={styles.container}>
				<BodyText>Opponent's guess:</BodyText>
				<View style={styles.controls}>
					<MainButton onPress={() => handleNextGuess("lower")}>
						<Ionicons name="md-remove" size={24} color="white" />
					</MainButton>
					<NumberContainer>{currentGuess}</NumberContainer>
					<MainButton onPress={() => handleNextGuess("greater")}>
						<Ionicons name="md-add" size={24} color="white" />
					</MainButton>
				</View>

				<View style={styles.listContainer}>
					<ScrollView contentContainerStyle={styles.listContent}>
						{pastGuesses.map((guess, index) =>
							renderListItem(guess, pastGuesses.length - index)
						)}
					</ScrollView>
				</View>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<BodyText>Opponent's guess:</BodyText>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonsContainer}>
				<MainButton onPress={() => handleNextGuess("lower")}>
					<Ionicons name="md-remove" size={24} color="white" />
				</MainButton>
				<MainButton onPress={() => handleNextGuess("greater")}>
					<Ionicons name="md-add" size={24} color="white" />
				</MainButton>
			</Card>
			<View style={styles.listContainer}>
				<ScrollView contentContainerStyle={styles.listContent}>
					{pastGuesses.map((guess, index) =>
						renderListItem(guess, pastGuesses.length - index)
					)}
				</ScrollView>
			</View>
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
	controls: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "80%",
		alignItems: "center",
	},
	listContainer: {
		width: Dimensions.get("window").width > 350 ? "60%" : "80%",
		flex: 1,
	},
	listContent: {
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	listItem: {
		borderColor: "#CCCCCC",
		borderWidth: 1,
		padding: 15,
		marginVertical: 10,
		backgroundColor: "#FFFFFF",
		flexDirection: "row",
		justifyContent: "space-around",
		width: "60%",
	},
});

export default GameScreen;
