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
import Card from "../components/Card";
import CustomInput from "../components/CustomInput";
import colors from "../constants/colors";

export interface StartGameScreenProps {}

const StartGameScreen: React.FunctionComponent<StartGameScreenProps> = () => {
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
	};

	let confirmedOutput;
	if (confirmed) {
		confirmedOutput = <Text>Chosen number: {selectedNumber}</Text>;
	}

	return (
		<TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
			<View style={styles.container}>
				<Text style={styles.title}>Start a new game!</Text>
				<Card style={styles.cardContainer}>
					<Text>Select a number</Text>
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
		fontSize: 20,
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
});

export default StartGameScreen;
