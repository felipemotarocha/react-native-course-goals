import React, { ReactNode } from "react";
import { Text, StyleSheet, TextProps, TextStyle } from "react-native";

export interface TitleTextProps extends TextProps {
	children: ReactNode;
	style?: TextStyle;
}

const TitleText: React.FunctionComponent<TitleTextProps> = ({
	children,
	style,
}) => {
	return <Text style={{ ...styles.titleText, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
	titleText: {
		fontFamily: "open-sans-bold",
		fontSize: 18,
	},
});

export default TitleText;
