import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, Platform, SafeAreaView } from 'react-native'
import ItemListScreen from './app/screens/ItemListScreen'
import WellcomScreen from './app/screens/WellcomScreen'
// import Card from './app/components/Card'

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<WellcomScreen />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f4f4',
	},
})
