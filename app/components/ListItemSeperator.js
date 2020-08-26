import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'

const ListItemSeperator = () => {
	return <View style={styles.line} />
}

const styles = StyleSheet.create({
	line: {
		borderBottomColor: colors.superLight,
		borderWidth: 0.3,
	},
})

export default ListItemSeperator
