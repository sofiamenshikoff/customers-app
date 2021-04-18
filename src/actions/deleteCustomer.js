import { createAction } from 'redux-actions'
import { apiDelete } from '../api'
import { DELETE_CUSTOMER } from '../constants'
import { urlCustomers } from './../api/urls'

export const deleteCustomer = createAction(DELETE_CUSTOMER,
    (id) => apiDelete(urlCustomers, id)())