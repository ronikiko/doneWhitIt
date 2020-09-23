import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const PickerItem = ({ item, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={styles.picker}>{item}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	picker: {
		padding: 20,
		fontSize: 20,
	},
})

export default PickerItem
