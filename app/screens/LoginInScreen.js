import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppTextinput from '../components/AppTextinput'
import Screen from '../components/Screen'
import ButtonComp from '../components/ButtonComp'

const LoginInScreen = ({navigation}) => {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	return (
		<Screen style={styles.con}>
			<Image
				style={styles.logo}
				source={require('../../assets/logo-red.png')}
			/>
			<AppTextinput
				placeholder="Email"
				autoCapitalize="none"
				autoCorrect={false}
				icon="text"
				onChangeText={(text) => setEmail(text)}
			/>

			<AppTextinput
				placeholder="Password"
				autoCapitalize="none"
				autoCorrect={false}
				icon="lock"
				secureTextEntry={true}
				onChangeText={(text) => setPassword(text)}
			/>

			<ButtonComp
				title="Login"
				onPress={() => navigation.navigate('Account') }
			/>
		</Screen>
	)
}

const styles = StyleSheet.create({
	con: {
		padding: 20,
	},
	logo: {
		width: 70,
		height: 70,
		alignSelf: 'center',
		marginTop: 40,
		marginBottom: 20,
	},
})

export default LoginInScreen
