import { handleActions } from 'redux-actions'
import { DELETE_CUSTOMER, FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER } from '../constants'

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTOMER]: (state, action) => {
        const customerPayload = action.payload
        const { id } = customerPayload // i = 2 name = 'nuevo nombre'
        //[ {id: 1, name: '', ...},
        //  {id: 1, name: 'viejo nombre', ...}, 
        //  {id: 3, name: '', ...}]
        const customers = state
        const intialValue = []
        //Primer iteracion
        //acumulado = []
        //{id: 1, name: '', ...}
        //[{id: 1, name: '', ...}]

        //Segunda iteracion
        //acumulado = [{id: 1, name: '', ...}]
        //{id: 2, name: 'viejo nombre', ...} => {id: 2, name: 'nuevo nombre', ...}
        //[{id: 1, name: '', ...}, {id: 2, name: 'nuevo nombre', ...}]
        const newCustomers = customers.reduce((acumulado, customer) => {
            if(customer.id === id) {
                return [...acumulado, customerPayload]
            } else {
                return [...acumulado, customer]
            }
        }, intialValue)
        return newCustomers
    },
    [DELETE_CUSTOMER]: (state, action) => state.filter(client => client.id !== action.payload)
}, [])