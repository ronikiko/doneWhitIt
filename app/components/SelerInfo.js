import React from 'react'
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native'
import colors from '../config/colors'
import Screen from './Screen'
import Swipeable from 'react-native-gesture-handler/Swipeable'

const SelerInfo = ({
	title,
	subTitle,
	image,
	ImageComponent,
	onPress,
	renderRightActions,
}) => {
	return (
		<Screen>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight
					onPress={onPress}
					underlayColor={colors.superLight}
				>
					<View style={styles.container}>
						{ImageComponent}
						{image && <Image style={styles.image} source={image} />}
						<View style={styles.content}>
							<Text style={styles.title}>{title}</Text>
							{subTitle && (
								<Text style={styles.subTitle}>{subTitle}</Text>
							)}
						</View>
					</View>
				</TouchableHighlight>
			</Swipeable>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		backgroundColor: colors.white,
	},
	content: {
		marginHorizontal: 15,
		justifyContent: 'center',
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	title: {
		fontSize: 17,
	},
	subTitle: {
		color: colors.light,
	},
})

export default SelerInfo
