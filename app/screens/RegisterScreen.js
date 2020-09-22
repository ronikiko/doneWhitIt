import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import {AppFormFiled, AppForm, SubmitButton } from '../components/forms'
import ButtonComp from '../components/ButtonComp'
import * as Yup from 'yup'


const validationSchema = Yup.object({
	email: Yup.string().required().email().label('Email'),
	name: Yup.string().required().label('Name'),
	password: Yup.string().required().length(6).label('Password'),
})


const RegisterScreen = ({navigation}) => {
    return (
        <Screen style={styles.con}>
			<Image
				style={styles.logo}
				source={require('../../assets/logo-red.png')}
			/>
            <AppForm
            initialValues={{ name:'', email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
            >
                 <AppFormFiled
					placeholder="Name"
					name="name"
					autoCapitalize="none"
					autoCorrect={false}
					icon="account"
				/>

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

				<SubmitButton title="Register" />
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

export default RegisterScreen