import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

const ButtonComp = ({ title, bgColor = colors.primary, onPress }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.container, { backgroundColor: bgColor }]}
		>
			<View>
				<Text style={styles.text}>{title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 50,
		backgroundColor: colors.primary,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
})

export default ButtonComp
