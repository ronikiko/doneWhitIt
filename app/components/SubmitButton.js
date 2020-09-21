import React from 'react'
import ButtonComp from './ButtonComp'

import { useFormikContext } from 'formik'

const SubmitButton = ({ title }) => {
	const { handleSubmit } = useFormikContext()

	return <ButtonComp title={title} onPress={handleSubmit} />
}

export default SubmitButton
