import * as React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

export interface CardProps {
	children: React.ReactNode;
	style?: ViewStyle;
}

const Card: React.FunctionComponent<CardProps> = ({ children, style }) => {
	return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
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
});

export default Card;
