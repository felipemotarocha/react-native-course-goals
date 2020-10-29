import * as React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	GestureResponderEvent,
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
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.6}>
			<View style={styles.container}>
				<Text style={styles.text}>{children}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
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
