import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import colors from '../config/colors'
import SelerInfo from '../components/SelerInfo'
import AppText from '../components/AppText'

const ItemListScreen = ({ image, title, subTitle }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} title={title} />
			<View style={styles.textContainer}>
				<AppText style={styles.title} numberOfLines={1}>
					{title}
				</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>

			<SelerInfo
				image={require('../../assets/mosh.jpg')}
				title="moshe hamedani"
				subTitle="soem info"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	image: {
		width: '100%',
		height: 300,
	},
	textContainer: {
		padding: 15,
		marginBottom: 25,
	},
	title: {
		fontSize: 20,
		fontWeight: '500',
		color: 'red',
	},
	subTitle: {
		color: colors.secondary,
		paddingVertical: 7,
		fontSize: 16,
		fontWeight: 'bold',
	},
})

export default ItemListScreen
