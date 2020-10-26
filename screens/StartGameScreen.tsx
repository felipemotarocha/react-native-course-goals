import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
import CustomInput from "../components/CustomInput";
import colors from "../constants/colors";

export interface StartGameScreenProps {}

const StartGameScreen: React.FunctionComponent<StartGameScreenProps> = () => {
	return (
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
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<Button title="Reset" onPress={() => {}} color={colors.secondary} />
					</View>
					<View style={styles.button}>
						<Button title="Confirm" onPress={() => {}} color={colors.primary} />
					</View>
				</View>
			</Card>
		</View>
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
