import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, Platform, SafeAreaView } from 'react-native'
import WellcomScreen from './app/screens/WellcomScreen'
import Card from './app/components/Card'

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<WellcomScreen />
			{/* <SafeAreaView
				style={{
					paddingTop: Platform.OS === 'android' ? 30 : 0,
				}}
			>
				<Card
					title="card test"
					subTitle="sub ttile"
					image={require('./assets/jacket.jpg')}
				/>
			</SafeAreaView> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f4f4',
	},
})
