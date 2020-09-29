import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ErrMessage from './ErrMessage'
import { TouchableWithoutFeedback } from 'react-native'
import Screen from '../Screen'
import PickerItem from '../PickerItem'

const AppPicker = ({
	name,
	icon,
	placeholder,
	items,
	selectedCategory,
	onSelectCategory,
}) => {
	const [visibleModal, setVisibleModal] = useState(false)
	const { setFieldValue, handleChange, errors, touched } = useFormikContext()

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setVisibleModal(true)}>
				<View style={styles.container}>
					<MaterialCommunityIcons name={icon} size={20} />
					<Text style={styles.input}>
						{selectedCategory
							? selectedCategory.label
							: placeholder}
					</Text>
					<MaterialCommunityIcons name="chevron-down" size={20} />

					<ErrMessage error={errors[name]} visable={touched[name]} />
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={visibleModal} animationType="slide">
				<Screen>
					<Button
						title="close"
						onPress={() => setVisibleModal(false)}
					/>

					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItem
								item={item.label}
								onPress={() => {
									onSelectCategory(item)
									setVisibleModal(false)
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		height: 50,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#c8d6e5',
		borderRadius: 20,
		padding: 10,
		marginBottom: 20,
		backgroundColor: '#fff',
	},
	input: {
		flex: 1,
		height: '100%',
		paddingLeft: 10,
		fontSize: 18,
	},
})

export default AppPicker
