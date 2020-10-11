import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import {
	AppFormFiled,
	AppForm,
	SubmitButton,
	AppPicker,
} from '../components/forms'

import Screen from '../components/Screen'
import ButtonComp from '../components/ButtonComp'
import * as Yup from 'yup'

const validationSchema = Yup.object({
	title: Yup.string().required().min(3).label('Title'),
	price: Yup.number().required().max(10000).label('Price'),
	category: Yup.object().nullable().label('Category'),
	description: Yup.string().label('Description'),
})

const categories = [
	{ label: 'Cars', value: 1 },
	{ label: 'Tomatos', value: 2 },
	{ label: 'Galleries', value: 3 },
]

const EditListingScreen = ({ navigation, values, route }) => {
	const [field, setFieldValue] = useState(categories[1])
	return (
		<Screen style={styles.con}>
			<AppForm
				initialValues={{
					title: route.params.title,
					price: route.params.subTitle,
					category: field,
					description: '',
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormFiled
					placeholder={route.params.title}
					name="title"
					autoCapitalize="none"
					autoCorrect={false}
					icon="format-title"
				/>

				<AppFormFiled
					placeholder={route.params.subTitle}
					name="price"
					autoCapitalize="none"
					autoCorrect={false}
					icon="cash-usd"
				/>

				<AppPicker
					selectedCategory={field}
					onSelectCategory={(item) => setFieldValue(item.label)}
					items={categories}
					name="category"
					placeholder="category"
					icon="apps"
				/>

				<AppFormFiled
					placeholder="Description"
					name="description"
					autoCapitalize="none"
					autoCorrect={false}
					icon="text"
				/>
				<SubmitButton title="submit" />
			</AppForm>
		</Screen>
	)
}

const styles = StyleSheet.create({
	con: {
		margin: 20,
	},
})

export default EditListingScreen
