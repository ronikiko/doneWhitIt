import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Card from '../components/Card'
const ListingsScreen = () => {
	return (
		<View style={styles.container}>
			<Card
				title="new"
				subTitle="$100"
				image={require('../../assets/jacket.jpg')}
			/>
			<Card
				title="new"
				subTitle="$1000"
				image={require('../../assets/couch.jpg')}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
})

export default ListingsScreen
