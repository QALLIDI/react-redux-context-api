import React , { useContext, useState, useReducer } from 'react'
import { ADD_USER, REMOVE_USER, LIST_USERS, GET_USER, DETAIL_USER } from './actions/Constantes'

const initialState = {}
const store = useContext(initialState)
const { Provider } = store

const stateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state,action) => {
        switch(action.type) {
            case ADD_USER :
                return state;
            default :
                throw new Error();  
        }
    }, initialState)
    return <Provider value = {{ state, dispatch }}>{ children }</Provider>
}

export { store, stateProvider }