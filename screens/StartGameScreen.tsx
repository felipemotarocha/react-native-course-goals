import * as React from "react";
import { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";

import colors from "../constants/colors";

import BodyText from "../components/BodyText";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import CustomInput from "../components/CustomInput";
import NumberContainer from "../components/NumberContainer";
import TitleText from "../components/TItleText";

export interface StartGameScreenProps {
	startGame: (selectedNumber: number) => void;
}

const StartGameScreen: React.FunctionComponent<StartGameScreenProps> = ({
	startGame,
}) => {
	const [number, setNumber] = useState("");
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState<number>();

	const handleNumberChange = (value: string) => {
		setNumber(value.replace(/[^0-9]/g, ""));
	};

	const handleKeyboardDismiss = () => {
		Keyboard.dismiss();
	};

	const handleInputReset = () => {
		setNumber("");
		setConfirmed(false);
	};

	const handleConfirm = () => {
		const chosenNumber = parseInt(number);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
				{
					text: "Okay",
					style: "destructive",
					onPress: handleInputReset,
				},
			]);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setNumber("");
		Keyboard.dismiss();
	};

	let confirmedOutput;
	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text>You selected:</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<MainButton onPress={() => startGame(selectedNumber as any)}>
					START GAME!
				</MainButton>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
			<View style={styles.container}>
				<TitleText style={styles.title}>Start a new game!</TitleText>
				<Card style={styles.cardContainer}>
					<BodyText>Select a number</BodyText>
					<CustomInput
						style={styles.input}
						blurOnSubmit
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="numeric"
						maxLength={2}
						onChangeText={(value) => handleNumberChange(value)}
						value={number}
					/>
					<View style={styles.buttonsContainer}>
						<View style={styles.button}>
							<Button
								title="Reset"
								onPress={handleInputReset}
								color={colors.secondary}
							/>
						</View>
						<View style={styles.button}>
							<Button
								title="Confirm"
								onPress={handleConfirm}
								color={colors.primary}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},
	title: {
		marginVertical: 10,
	},
	cardContainer: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
	},
	input: {
		width: 50,
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		paddingHorizontal: 15,
	},
	button: {
		flex: 1,
		marginHorizontal: 5,
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: "center",
	},
});

export default StartGameScreen;
