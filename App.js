import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, Platform, SafeAreaView } from 'react-native'
import ItemListScreen from './app/screens/ItemListScreen'
import WellcomScreen from './app/screens/WellcomScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
// import Card from './app/components/Card'
import MeassagesScreen from './app/screens/MessagesScreen'

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<MeassagesScreen />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f4f4',
	},
})
