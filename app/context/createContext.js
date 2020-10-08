import React, { useReducer, createContext } from 'react'

export default (reducer, actions, initialState) => {
	const Context = createContext()

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState)

		const bindFuncs = {}
		for (let key in actions) {
			bindFuncs[key] = actions[key](dispatch)
		}

		return (
			<Context.Provider value={{ state, ...bindFuncs }}>
				{children}
			</Context.Provider>
		)
	}

	return { Context, Provider }
}
