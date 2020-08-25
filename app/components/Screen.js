import React from 'react'
import {SafeAreaView, StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'

const Screen = ({childern}) => {
    return (
        <SafeAreaView style={styles.container}>
            {childern}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
    }
})

export default Screen