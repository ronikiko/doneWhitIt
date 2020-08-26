import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ItemListScreen from './app/screens/ItemListScreen'
import WellcomScreen from './app/screens/WellcomScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import MeassagesScreen from './app/screens/MessagesScreen'
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import { Header } from 'react-native/Libraries/NewAppScreen'

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<Stack.Navigator>
				<Stack.Screen
					name="Wellcom"
					component={WellcomScreen}
					options={{ header: () => null }}
				/>
				<Stack.Screen name="Account" component={AccountScreen} />
				<Stack.Screen name="Messages" component={MeassagesScreen} />
				<Stack.Screen name="Listings" component={ListingsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
