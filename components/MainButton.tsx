import * as React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	GestureResponderEvent,
	TouchableNativeFeedback,
	Platform,
} from "react-native";

import colors from "../constants/colors";

export interface MainButtonProps {
	children: React.ReactNode;
	onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const MainButton: React.FunctionComponent<MainButtonProps> = ({
	children,
	onPress,
}) => {
	let ButtonComponent: any = TouchableOpacity;

	if (Platform.OS === "android" && Platform.Version >= 21) {
		ButtonComponent = TouchableNativeFeedback;
	}
	return (
		<View style={styles.buttonContainer}>
			<ButtonComponent onPress={onPress} activeOpacity={0.6}>
				<View style={styles.container}>
					<Text style={styles.text}>{children}</Text>
				</View>
			</ButtonComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 8,
		overflow: "hidden",
	},
	container: {
		backgroundColor: colors.primary,
		paddingVertical: 10,
		paddingHorizontal: 28,
		borderRadius: 8,
	},
	text: {
		color: "#FFFFFF",
		fontFamily: "open-sans",
		fontSize: 16,
	},
});

export default MainButton;
