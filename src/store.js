import React , { useContext, useReducer } from 'react'

const initialState = {}
const store = useContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state,action) => {
        switch(action.type) {
            case 'ADD_USER' :
                return state;
            default :
                throw new Error();  
        }
    }, initialState)
    return <Provider value = {{ state, dispatch }}>{ children }</Provider>
}

export { store, StateProvider }