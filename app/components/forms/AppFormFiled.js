import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'
import AppTextinput from './AppTextinput'
import ErrMessage from './ErrMessage'

const AppFormFiled = ({ name, ...allProps }) => {
	const {
		setFieldTouched,
		handleChange,
		touched,
		errors,
	} = useFormikContext()

	return (
		<>
			<AppTextinput
				onBlur={() => setFieldTouched(name)}
				onChangeText={handleChange(name)}
				{...allProps}
			/>
			<ErrMessage error={errors[name]} visable={touched[name]} />
		</>
	)
}

const styles = StyleSheet.create({})

export default AppFormFiled
