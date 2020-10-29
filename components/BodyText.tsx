import React, { ReactNode } from "react";
import { Text, StyleSheet, TextProps, TextStyle } from "react-native";

export interface BodyTextProps extends TextProps {
	children: ReactNode;
	style: TextStyle;
}

const BodyText: React.FunctionComponent<BodyTextProps> = ({
	children,
	style,
}) => {
	return <Text style={{ ...style, ...styles.bodyText }}>{children}</Text>;
};

const styles = StyleSheet.create({
	bodyText: {
		fontFamily: "open-sans",
	},
});

export default BodyText;
