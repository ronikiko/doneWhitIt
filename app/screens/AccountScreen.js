import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Screen from '../components/Screen'
import SelerInfo from '../components/SelerInfo'
import { FlatList } from 'react-native'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeperator from '../components/ListItemSeperator'

const manuItems = [
	{
		title: 'My Listings',
		screen: 'Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		screen: 'Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
	},
]
const AccountScreen = ({ navigation }) => {
	return (
		<Screen>
			<Text style={styles.header}>Account</Text>
			<View style={styles.container}>
				<SelerInfo
					title="Roni Kiko"
					subTitle="A Free Lancer guy!😇 "
					image={require('../../assets/roni.png')}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					ItemSeparatorComponent={ListItemSeperator}
					data={manuItems}
					keyExtractor={(menu) => menu.title}
					renderItem={({ item }) => {
						return (
							<SelerInfo
								onPress={() => navigation.navigate(item.screen)}
								title={item.title}
								ImageComponent={
									<Icon
										backgroundColor={
											item.icon.backgroundColor
										}
										name={item.icon.name}
									/>
								}
							/>
						)
					}}
				/>
			</View>
			<View>
				<SelerInfo
					onPress={() => navigation.navigate('Wellcom')}
					title="Logout"
					ImageComponent={
						<Icon name="logout" backgroundColor="#ffe66d" />
					}
				/>
			</View>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
	},
	header: {
		fontSize: 30,
		margin: 20,
	},
})

export default AccountScreen
