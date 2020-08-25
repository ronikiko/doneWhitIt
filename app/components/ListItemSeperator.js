import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'

const ListItemSeperator = () => {
	return <View style={styles.line} />
}

const styles = StyleSheet.create({
	line: {
		borderBottomColor: colors.light,
		borderWidth: 0.5,
		marginHorizontal: 20,
	},
})

export default ListItemSeperator
