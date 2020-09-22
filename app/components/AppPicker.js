import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const AppPicker = ({ icon, color = '#000', ...allprops }) => {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons name={icon} color={color} size={30} />
			<TextInput {...allprops} style={styles.input} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		height: 50,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#c8d6e5',
		borderRadius: 20,
		padding: 10,
		marginBottom: 20,
		backgroundColor: '#fff',
	},
	input: {
		flex: 1,
		height: '100%',
		paddingLeft: 10,
		fontSize: 18,
	},
})

export default AppPicker
