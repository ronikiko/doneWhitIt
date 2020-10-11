import React from 'react'
import { useFormikContext } from 'formik'
import AppPicker from './AppPicker'
import ErrMessage from './ErrMessage'


const AppFormPicker = ({items, name, placeholder}) => {
    const { setFieldValue, values, errors, touched } = useFormikContext()

    return (
        <>
            <AppPicker 
                items={items}
                onSelectCategory={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedCategory={values[name]}
            />
            <ErrMessage error={errors[name]} visable={touched[name]}/>
        </>
    )
}

export default AppFormPicker