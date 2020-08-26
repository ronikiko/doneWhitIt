import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const DeleteSwipe = ({ onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name="trash-can"
					size={35}
					color={colors.white}
				/>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		width: 90,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default DeleteSwipe
