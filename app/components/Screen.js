import React from 'react'
import { SafeAreaView, StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'

const Screen = ({ children }) => {
	return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
	},
})

export default Screen
