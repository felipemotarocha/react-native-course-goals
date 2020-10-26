import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export interface StartGameScreenProps {}

const StartGameScreen: React.FunctionComponent<StartGameScreenProps> = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Start a new game!</Text>
			<View style={styles.inputContainer}>
				<Text>Select a number</Text>
				<TextInput />
				<View style={styles.buttonContainer}>
					<Button title="Reset" onPress={() => {}} />
					<Button title="Confirm" onPress={() => {}} />
				</View>
			</View>
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
	inputContainer: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
		// iOS Shadows
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.26,
		// Android Shadows
		elevation: 5,
	},
	buttonContainer: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		paddingHorizontal: 15,
	},
});

export default StartGameScreen;
