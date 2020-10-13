import React from 'react'
import { Text, StyleSheet } from 'react-native'

const AppText = ({ children, style, ...otherProps }) => {
	return (
		<Text style={[styles.text, style]} {...otherProps}>
			{children}
		</Text>
	)
}

const styles = StyleSheet.create({
	text: {},
})

export default AppText
