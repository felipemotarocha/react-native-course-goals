import React from "react";
import { TextInput, StyleSheet, TextStyle, TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
	style?: TextStyle;
}

const Input: React.FunctionComponent<InputProps> = (props) => {
	const { style } = props;
	return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: "#333333",
		borderBottomWidth: 1,
		marginVertical: 10,
	},
});

export default Input;
