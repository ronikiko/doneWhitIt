import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { AppFormFiled, AppForm, SubmitButton } from '../components/forms'
import Screen from '../components/Screen'
import ButtonComp from '../components/ButtonComp'
import * as Yup from 'yup'

const validationSchema = Yup.object({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(6).label('Password'),
})

const LoginInScreen = ({ navigation }) => {
	return (
		<Screen style={styles.con}>
			<Image
				style={styles.logo}
				source={require('../../assets/logo-red.png')}
			/>
			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormFiled
					placeholder="Email"
					name="email"
					autoCapitalize="none"
					autoCorrect={false}
					icon="email"
				/>

				<AppFormFiled
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="password"
					placeholder="Password"
					secureTextEntry
				/>
				{/* error message component*/}

				<SubmitButton title="Login" />

				<ButtonComp
					title="Go In"
					bgColor="#ccc"
					onPress={() => navigation.navigate('Account')}
				/>
			</AppForm>
		</Screen>
	)
}

const styles = StyleSheet.create({
	con: {
		margin: 20,
	},
	logo: {
		width: 70,
		height: 70,
		alignSelf: 'center',
		marginTop: 40,
		marginBottom: 20,
	},
	err: {
		color: 'red',
	},
})

export default LoginInScreen
