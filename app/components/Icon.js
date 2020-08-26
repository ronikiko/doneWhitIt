import React from 'react'
import { View, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Icon = ({
	name = 'trash',
	size = 50,
	backgroundColor = '#000',
	color = '#fff',
}) => {
	return (
		<Screen>
			<View
				style={{
					width: size,
					height: size,
					borderRadius: size / 2,
					backgroundColor,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<MaterialCommunityIcons
					name={name}
					size={size * 0.5}
					color={color}
				/>
			</View>
		</Screen>
	)
}

const styles = StyleSheet.create({})

export default Icon
