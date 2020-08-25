import React from 'react'
import { StyleSheet, View, FlatList, TouchableHighlight } from 'react-native'
import SelerInfo from '../components/SelerInfo'

import ListItemSeperator from '../components/ListItemSeperator'
import DeleteSwipe from '../components/DeleteSwipe'

const messages = [
	{
		id: '1',
		title: 'D1',
		description: 'D1',
		image: require('../../assets/mosh.jpg'),
	},
	{
		id: '2',
		title: 'D2',
		description: 'D2',
		image: require('../../assets/mosh.jpg'),
	},
	{
		id: '3',
		title: 'D3',
		description: 'D3',
		image: require('../../assets/mosh.jpg'),
	},
]

const MessagesScreen = () => {
	return (
		<FlatList
			ItemSeparatorComponent={ListItemSeperator}
			data={messages}
			keyExtractor={(message) => message.id.toString()}
			renderItem={({ item }) => (
				<SelerInfo
					image={item.image}
					title={item.title}
					subTitle={item.description}
					onPress={() => console.log('Massage selected: ', item)}
					renderRightActions={() => <DeleteSwipe />}
				/>
			)}
		/>
	)
}

const styles = StyleSheet.create({})

export default MessagesScreen
