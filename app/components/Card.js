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
			<View style={styles.subContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subTitle}>{subTitle}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		width: '100%',
		height: 'auto',
		backgroundColor: colors.white,
		borderRadius: 20,
		overflow: 'hidden',
		marginVertical: 10,
	},
	image: {
		width: '100%',
		height: 200,
	},
	subContainer: {
		padding: 5,
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: '500',
		marginBottom: 7,
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: 'bold',
		paddingBottom: 5,
	},
})

export default Card
