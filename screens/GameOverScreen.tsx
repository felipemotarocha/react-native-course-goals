import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TItleText";
import colors from "../constants/colors";

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
			<TitleText>The game is over!</TitleText>
			<View style={styles.imageContainer}>
				<Image
					// source={require("../assets/success.png")}
					source={{
						uri:
							"https://image.freepik.com/vetores-gratis/game-over-sinal-de-neon_191108-127.jpg",
					}}
					style={styles.image}
				/>
			</View>
			<View style={styles.resultContainer}>
				<BodyText style={styles.resultText}>
					Your phone needed <Text style={styles.highlight}>{rounds}</Text>{" "}
					rounds to guess the number{" "}
					<Text style={styles.highlight}>{userNumber}</Text>!
				</BodyText>
			</View>
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
	imageContainer: {
		borderRadius: 200,
		borderWidth: 3,
		borderColor: colors.primary,
		overflow: "hidden",
		width: 300,
		height: 300,
		marginVertical: 30,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	resultContainer: {
		marginHorizontal: 20,
		marginVertical: 15,
	},
	resultText: {
		textAlign: "center",
		fontSize: 20,
	},
	highlight: {
		color: colors.primary,
		fontFamily: "open-sans-bold",
	},
});

export default GameOverScreen;
