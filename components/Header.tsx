import * as React from "react";
import { View, StyleSheet, Platform } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TItleText";

export interface HeaderProps {
	title: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
	return (
		<View style={styles.container}>
			<TitleText style={styles.title}>{title}</TitleText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 90,
		paddingTop: 36,
		backgroundColor: Platform.OS === "android" ? colors.primary : "white",
		alignItems: "center",
		justifyContent: "center",
		borderBottomColor: Platform.OS === "ios" ? "#CCCCCC" : "transparent",
		borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
	},
	title: {
		color: Platform.OS === "ios" ? colors.primary : "white",
	},
});

export default Header;
