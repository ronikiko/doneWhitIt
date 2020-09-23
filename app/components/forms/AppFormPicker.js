import React from 'react'
import { Formik } from 'formik'

const AppFormPicker = ({
	children,
	onSubmit,
	initialValues,
	validationSchema,
}) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{() => children}
		</Formik>
	)
}

export default AppFormPicker
