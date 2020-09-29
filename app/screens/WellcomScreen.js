import React from 'react'
import {
	View,
	StyleSheet,
	Text,
	ImageBackground,
	Image,
	Platform,
} from 'react-native'
import ButtonComp from '../components/ButtonComp'
import colors from '../config/colors'

const WellcomScreen = ({ navigation }) => {
	return (
		<ImageBackground
			blurRadius={Platform.OS === 'android' ? 5 : 10}
			style={styles.image}
			source={require('../../assets/background.jpg')}
		>
			<View style={styles.header}>
				<Image
					style={styles.logo}
					source={require('../../assets/logo-red.png')}
				/>
				<Text style={styles.headerText}>Sell What You Dont Need!</Text>
			</View>

			<ButtonComp
				title="login"
				bgColor={colors.primary}
				onPress={() => navigation.navigate('Login')}
				//onPress={() => console.log('dsds~')}
			/>
			<ButtonComp
				title="register"
				bgColor={colors.secondary}
				onPress={() => navigation.navigate('Edit')}
			/>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	header: {
		position: 'absolute',
		top: 70,
		alignItems: 'center',
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 50,
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 10,
		padding: 20,
	},
	logo: {
		width: 100,
		height: 100,
	},
})

export default WellcomScreen
