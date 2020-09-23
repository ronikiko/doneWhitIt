import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Button,
	FlatList,
	TouchableWithoutFeedback,
	Modal,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Screen from './Screen'
import PickerItem from './PickerItem'
import { useFormikContext } from 'formik'

const AppPicker = ({
	color = '#000',
	placeholder,
	items,
	onSelectItem,
	selectedItem,
}) => {
	const { values, setValues } = useFormikContext()
	const [visibleModel, setVisibleModel] = useState(false)

	return (
		<>
			<TouchableWithoutFeedback onPress={() => setVisibleModel(true)}>
				<View style={styles.container}>
					<MaterialCommunityIcons
						name="apps"
						color={color}
						size={30}
					/>
					<Text style={styles.input}>
						{values.category ? values.category : placeholder}
					</Text>
					<MaterialCommunityIcons
						name="chevron-down"
						color={color}
						size={30}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={visibleModel} animationType="slide">
				<Screen>
					<Button
						title="close"
						onPress={() => setVisibleModel(false)}
					/>
					<FlatList
						data={items}
						keyExtractor={(item) => item.values.toString()}
						renderItem={({ item }) => (
							<PickerItem
								item={item.label}
								onPress={() => {
									setValues({ category: item.label })
									setVisibleModel(false)
									onSelectItem(item)
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
