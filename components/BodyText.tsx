import React, { ReactNode } from "react";
import { Text, StyleSheet, TextProps } from "react-native";

export interface BodyTextProps extends TextProps {
	children: ReactNode;
}

const BodyText: React.FunctionComponent<BodyTextProps> = ({ children }) => {
	return <Text style={styles.bodyText}>{children}</Text>;
};

const styles = StyleSheet.create({
	bodyText: {
		fontFamily: "open-sans",
	},
});

export default BodyText;
