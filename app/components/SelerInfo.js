import React from 'react'
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native'
import colors from '../config/colors'
import Screen from './Screen'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import AppText from '../components/AppText'

const SelerInfo = ({
	title,
	subTitle,
	image,
	ImageComponent,
	onPress,
	renderRightActions,
	style,
}) => {
	return (
		<Screen>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight
					onPress={onPress}
					underlayColor={colors.superLight}
				>
					<View style={[styles.container, style]}>
						{ImageComponent}
						{image && <Image style={styles.image} source={image} />}
						<View style={styles.content}>
							<AppText style={styles.title} numberOfLines={1}>
								{title}
							</AppText>
							{subTitle && (
								<AppText style={styles.subTitle}>
									{subTitle}
								</AppText>
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
		width: 200,
		overflow: 'hidden',
		marginHorizontal: 15,
		justifyContent: 'center',
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	title: {
		fontSize: 16,
	},
	subTitle: {
		color: colors.light,
	},
})

export default SelerInfo
