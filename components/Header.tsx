import * as React from "react";
import { View, StyleSheet, Platform } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TItleText";

export interface HeaderProps {
	title: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
	return (
		<View
			style={{
				...styles.headerBase,
				...Platform.select({
					ios: styles.headerIos,
					android: styles.headerAndroid,
				}),
			}}
		>
			<TitleText style={styles.title}>{title}</TitleText>
		</View>
	);
};

const styles = StyleSheet.create({
	headerBase: {
		width: "100%",
		height: 90,
		paddingTop: 36,
		alignItems: "center",
		justifyContent: "center",
	},
	headerIos: {
		backgroundColor: "white",
		borderBottomColor: "#CCCCCC",
		borderBottomWidth: 1,
	},
	headerAndroid: {
		backgroundColor: colors.primary,
	},
	title: {
		color: Platform.OS === "ios" ? colors.primary : "white",
	},
});

export default Header;
