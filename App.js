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
import LoginScreen from './app/screens/LoginInScreen'
import RegisterScreen from './app/screens/RegisterScreen'
import StartScreen from './app/screens/StartScreen'
import EditlistingScreen from './app/screens/EditlistingScreen'

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
				<Stack.Screen name="Start" component={StartScreen} />
				<Stack.Screen
					options={{
						header: () => null,
					}}
					name="Account"
					component={AccountScreen}
				/>
				<Stack.Screen name="Messages" component={MeassagesScreen} />
				<Stack.Screen name="Edit" component={EditlistingScreen} />
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="Listings" component={ListingsScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
