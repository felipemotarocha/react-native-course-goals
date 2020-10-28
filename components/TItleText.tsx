import React, { ReactNode } from "react";
import { Text, StyleSheet, TextProps } from "react-native";

export interface TitleTextProps extends TextProps {
	children: ReactNode;
}

const TitleText: React.FunctionComponent<TitleTextProps> = ({ children }) => {
	return <Text style={styles.titleText}>{children}</Text>;
};

const styles = StyleSheet.create({
	titleText: {
		fontFamily: "open-sans-bold",
		fontSize: 18,
	},
});

export default TitleText;
