import { createAction } from 'redux-actions'
import { apiPut } from '../api'
import { UPDATE_CUSTOMER } from '../constants'
import { urlCustomers } from './../api/urls'

export const updateCustomer = createAction(UPDATE_CUSTOMER,
    (id, customer) => apiPut(urlCustomers, id, customer)())