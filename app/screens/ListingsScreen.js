import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

const listings = [
	{
		id: 1,
		title: 'red shirt in very good condition 😜',
		price: '$100',
		image: require('../../assets/jacket.jpg'),
	},
	{
		id: 2,
		title: 'couch for sell very good condition 😜',
		price: '$100',
		image: require('../../assets/couch.jpg'),
	},
	{
		id: 3,
		title: 'red shirt in very good condition 😜',
		price: '$100',
		image: require('../../assets/jacket.jpg'),
	},
	{
		id: 4,
		title: 'red shirt in very good condition 😜',
		price: '$100',
		image: require('../../assets/jacket.jpg'),
	},
]
import Card from '../components/Card'

const ListingsScreen = () => {
	const [lists, setLists] = useState(listings)
	const [refreshing, setRwfrwshing] = useState(false)
	return (
		<View style={styles.container}>
			<FlatList
				refreshing={refreshing}
				onRefresh={() => {
					setLists(lists)
				}}
				data={lists}
				keyExtractor={(list) => list.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={item.price}
						image={item.image}
					/>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
})

export default ListingsScreen
