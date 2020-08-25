import React from 'react'
import { View,Image, StyleSheet, TouchableOpacity } from 'react-native'
import { EvilIcons, Feather } from '@expo/vector-icons';
import colors from '../config/colors';

const ViewImageScreen = () => {
    return (

        <View style={styles.container}>
            <TouchableOpacity 
                 style={styles.rightIcon} 
                 onPress={() => console.log('trash')}>
                <View>
                    <EvilIcons 
                        name="trash" size={40} 
                        color={colors.white} 
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.leftIcon} onPress={() => console.log('name')}>
                <View>
                    <Feather 
                        name="x-circle" 
                        size={35}
                        color={colors.white} 
                    />
                </View>
            </TouchableOpacity>
         
           <Image 
           style={styles.image}
           resizeMode="contain"
           source={require('../../assets/chair.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.black
    },
    image: {
        width: '100%',
        height:'100%'
    },
    rightIcon:{
        position: 'absolute',
        top: 30,
        left:20,
        width: 40,
        height:40,
        zIndex:1
    },
    leftIcon: {
        position: 'absolute',
        top: 20,
        right:20,
        zIndex:1
    }
})

export default ViewImageScreen