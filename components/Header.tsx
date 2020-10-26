import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

export interface HeaderProps {
	title: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 90,
		paddingTop: 36,
		backgroundColor: colors.primary,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		color: "black",
		fontSize: 18,
	},
});

export default Header;
