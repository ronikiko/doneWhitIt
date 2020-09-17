import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import AppTextinput from '../components/AppTextinput'
import Screen from '../components/Screen'
import ButtonComp from '../components/ButtonComp'
import { Formik } from 'formik'
import * as Yup from 'yup'
import ErrMessage from '../components/ErrMessage'

const validationSchema = Yup.object({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().length(4).label('Password'),
})
const LoginInScreen = ({ navigation }) => {
	return (
		<Screen style={styles.con}>
			<Image
				style={styles.logo}
				source={require('../../assets/logo-red.png')}
			/>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({
					handleChange,
					handleSubmit,
					errors,
					setFieldTouched,
					touched,
				}) => (
					<>
						<AppTextinput
							placeholder="Email"
							autoCapitalize="none"
							autoCorrect={false}
							icon="email"
							onBlur={() => setFieldTouched('email')}
							onChangeText={handleChange('email')}
						/>
						<ErrMessage
							error={errors.email}
							visable={touched.email}
						/>

						<AppTextinput
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							onBlur={() => setFieldTouched('password')}
							onChangeText={handleChange('password')}
							placeholder="Password"
							secureTextEntry={true}
						/>
						{/* error message component*/}

						<ErrMessage
							error={errors.password}
							visable={touched.password}
						/>

						<ButtonComp title="Login" onPress={handleSubmit} />

						<ButtonComp
							title="Go In"
							bgColor="#ccc"
							onPress={() => navigation.navigate('Account')}
						/>
					</>
				)}
			</Formik>
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
