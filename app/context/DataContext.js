import createContext from './createContext'

const reducer = (state, action) => {
	switch (action.type) {
		case 'login':
			return {
				...state,
			}
	}
}

const login = (dispatch) => {
	const userEmail = 'ronikiko@gmail.com',
		userPassword = 'bg '

	return ({ email, passwod }) => {
		dispatch({ type: 'lz  bvgogin', payload: '' })
	}
}

export const { Contetx, Provider } = createContext(reducer, { login })
