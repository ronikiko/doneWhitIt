import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import SelerInfo from '../components/SelerInfo'

import ListItemSeperator from '../components/ListItemSeperator'

const messages = [
    {
        id: '1',
        title: 'D1',
        description: 'D1',
        image: require('../../assets/mosh.jpg')
    },
    {
        id: '2',
        title: 'D2',
        description: 'D2',
        image: require('../../assets/mosh.jpg')
    },
    {
        id: '3',
        title: 'D3',
        description: 'D3',
        image: require('../../assets/mosh.jpg')
    }
]

const MessagesScreen = () => {
    return (
       <FlatList  
            ItemSeparatorComponent={ListItemSeperator} 
            data={messages}
            keyExtractor={message => message.id}
            renderItem={(({item}) => (
                <TouchableHighlight activeOpacity={0.5}>
                    <SelerInfo 
                        image={item.image} 
                        title={item.title} 
                        subTitle={item.description} />  
                </TouchableHighlight>
                ))}
       
       />
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row'
    },
   
})

export default MessagesScreen