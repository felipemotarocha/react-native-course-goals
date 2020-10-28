import * as React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TItleText";

export interface HeaderProps {
	title: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
	return (
		<View style={styles.container}>
			<TitleText>{title}</TitleText>
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
});

export default Header;
