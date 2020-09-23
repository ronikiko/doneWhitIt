import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const PickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{item}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

export default PickerItem