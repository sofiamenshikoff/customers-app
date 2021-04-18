import { FETCH_CUSTOMERS } from './../constants'
import { createAction } from 'redux-actions'
import { apiGet } from '../api'
import { urlCustomers } from '../api/urls'


//payload creator esta sin parametros porque al component did mount no le pasamos parametros
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers))
