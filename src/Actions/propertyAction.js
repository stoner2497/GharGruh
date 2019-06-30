import axios from 'axios';

import {ADD_PROPERTY,GET_PROPERTY,GET_PROPERTY_VIRAR,GET_PROPERTY_VASAI,GET_PROPERTY_NALLASOPARA, GET_ERRORS } from './types';


export const addProperty = (userdata,config) => dispatch => {
    
        axios.post('/addproperty',userdata,config) 
            .then(res => {
                dispatch({
                    type:ADD_PROPERTY,
                    payload:res.data
                })
            }).catch(err => {
                dispatch({
                    type:GET_ERRORS,
                    payload:err.response.data || null
                })
            })
}