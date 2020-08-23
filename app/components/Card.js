import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import colors from '../config/colors'

const Card = ({ title, subTitle, image }) => {
	return (
		<View style={styles.card}>
			<Image
				style={styles.image}
				source={image}
				blurRadius={Platform.OS === 'android' ? 2 : 2}
			/>
			<Text>{title}</Text>
			<Text>{subTitle}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		width: '90%',
		height: 'auto',
		backgroundColor: colors.white,
		borderRadius: 20,
		alignSelf: 'center',
	},
	image: {
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		width: '100%',
		height: 200,
	},
})

export default Card
