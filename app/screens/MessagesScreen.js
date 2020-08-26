import React, { useState } from 'react'
import { StyleSheet, View, FlatList, TouchableHighlight } from 'react-native'
import SelerInfo from '../components/SelerInfo'

import ListItemSeperator from '../components/ListItemSeperator'
import DeleteSwipe from '../components/DeleteSwipe'

const MessagesScreen = () => {
	// initial array of data
	const init = [
		{
			id: '1',
			title: 'D1',
			description: 'D1',
			image: require('../../assets/roni.png'),
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
			image: require('../../assets/roni.png'),
		},
	]

	const [messages, setMessages] = useState(init)
	const [refreshing, setRefreshing] = useState(false)

	// handle Delete from the array of data
	const handleDelete = (message) => {
		const filterdMessage = messages.filter((m) => m.id !== message.id)
		setMessages(filterdMessage)
	}

	return (
		<FlatList
			ItemSeparatorComponent={ListItemSeperator}
			refreshing={refreshing}
			onRefresh={() => {
				setMessages([
					{
						id: '1',
						title: 'D1',
						description: 'D1',
						image: require('../../assets/roni.png'),
					},
				])
			}}
			data={messages}
			keyExtractor={(message) => message.id.toString()}
			renderItem={({ item }) => (
				<SelerInfo
					image={item.image}
					title={item.title}
					subTitle={item.description}
					onPress={() => console.log('Massage selected: ', item)}
					renderRightActions={() => (
						<DeleteSwipe onPress={() => handleDelete(item)} />
					)}
				/>
			)}
		/>
	)
}

const styles = StyleSheet.create({})

export default MessagesScreen
