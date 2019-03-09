import axios from 'axios'
import { GET_EXTRATOS } from './types'

// Recuperar Extratos via Rest API
export const getExtratos = () => dispatch => {
    axios.get('/api/extrato')
        .then(response => {
            dispatch({
                type: GET_EXTRATOS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}