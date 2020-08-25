import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import colors from '../config/colors'
import Screen from './Screen'

const SelerInfo = ({ title, subTitle, image }) => {
	return (
			<Screen>
				<View style={styles.container}>
					<Image style={styles.image} source={image} />
					<View>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.subTitle}>{subTitle}</Text>
					</View>
				</View>
			</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginHorizontal: 15,
	},
	title: {
		fontSize: 17,
	},
	subTitle: {
		color: colors.light,
	},
})

export default SelerInfo
