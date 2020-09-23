import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AppFormPicker } from '../components/forms'
import { AppFormFiled, SubmitButton } from '../components/forms'
import AppPicker from '../components/AppPicker'
import * as Yup from 'yup'
import Screen from '../components/Screen'

const categories = [
	{ label: 'food', values: 1 },
	{ label: 'pets', values: 2 },
	{ label: 'cars', values: 3 },
]

const validationSchema = Yup.object({
	title: Yup.string().required().label('Title'),
	price: Yup.string().required().label('Price'),
	category: Yup.string().required().label('Category'),
	description: Yup.string().required().label('Description'),
})

const EditlistingScreen = () => {
	const [category, setCategory] = useState(categories[0])
	return (
		<Screen style={styles.con}>
			<AppFormPicker
				initialValues={{
					title: '',
					price: '',
					category: '',
					description: '',
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormFiled
					placeholder="Title"
					name="title"
					autoCapitalize="none"
					autoCorrect={false}
					icon="text"
				/>

				<AppFormFiled
					placeholder="Price"
					name="price"
					autoCapitalize="none"
					autoCorrect={false}
					icon="text"
				/>

				<AppPicker
					placeholder="category"
					name="category"
					items={categories}
					onSelectItem={(item) => setCategory(item)}
					selectedItem={category}
				/>

				<AppFormFiled
					placeholder="Description"
					name="description"
					autoCapitalize="none"
					autoCorrect={false}
					icon="text"
				/>

				<SubmitButton title="Edit" />
			</AppFormPicker>
		</Screen>
	)
}

const styles = StyleSheet.create({
	con: {
		margin: 20,
	},
})

export default EditlistingScreen
