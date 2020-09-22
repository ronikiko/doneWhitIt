import React from 'react'
import { Text, StyleSheet } from 'react-native'

const ErrMessage = ({ error, visable }) => {
	if (!error || !visable) return null
	return <Text style={styles.error}>{error}</Text>
}

const styles = StyleSheet.create({
	error: {
		color: 'red',
	},
})

export default ErrMessage
