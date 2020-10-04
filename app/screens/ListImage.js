import React from 'react'
import {
	View,
	Image,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native'
import colors from '../config/colors'
import { EvilIcons } from '@expo/vector-icons'

const ListImage = () => {
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={() => console.log('trash')}>
				<View>
					<EvilIcons name="trash" size={40} color={colors.white} />
				</View>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => console.log('trash')}>
				<View>
					<EvilIcons name="trash" size={40} color={colors.white} />
				</View>
			</TouchableOpacity>

			<Image
				resizeMode="contain"
				style={styles.image}
				source={require('../../assets/chair.jpg')}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black,
	},
	image: {
		width: '100%',
		height: '100%',
	},
})

export default ListImage
