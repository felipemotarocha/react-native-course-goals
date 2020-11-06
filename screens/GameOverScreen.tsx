import React from "react";
import {
	View,
	StyleSheet,
	Button,
	Image,
	Text,
	Dimensions,
	ScrollView,
} from "react-native";

import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
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
		<ScrollView contentContainerStyle={styles.scrollView}>
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
				<MainButton onPress={restart}>NEW GAME</MainButton>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
		height: Dimensions.get("window").height - 90,
	},
	imageContainer: {
		width: Dimensions.get("window").width * 0.7,
		height: Dimensions.get("window").width * 0.7,
		borderRadius: (Dimensions.get("window").width * 0.7) / 2,
		borderWidth: 3,
		borderColor: colors.primary,
		overflow: "hidden",
		marginVertical: Dimensions.get("window").height / 30,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	resultContainer: {
		marginHorizontal: 20,
		marginVertical: Dimensions.get("window").height / 60,
	},
	resultText: {
		textAlign: "center",
		fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
	},
	highlight: {
		color: colors.primary,
		fontFamily: "open-sans-bold",
	},
});

export default GameOverScreen;
