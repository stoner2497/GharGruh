import axios from 'axios';

import {ADD_PROPERTY,GET_PROPERTY,GET_PROPERTY_VIRAR,GET_PROPERTY_VASAI,GET_PROPERTY_NALLASOPARA, GET_ERRORS, PROPERTY_LOADING } from './types';


export const addProperty = (userdata) => dispatch => {
    
        axios.post('/addproperty',userdata) 
            .then(res => {
                dispatch({
                    type:ADD_PROPERTY,
                    payload:res.data
                })
            }).catch(err => {
                dispatch({
                    type:GET_ERRORS,
                    payload:err || null
                })
            })
}


export const getProperties = (propertyData) => dispatch => {
    dispatch(setPropertyLoading())
    axios.get('/allproperty',propertyData)
     .then(res => {
         dispatch({
             type:GET_PROPERTY,
             payload:res.data
         })
     }).catch(err => {
         dispatch({
             type:GET_ERRORS,
             payload:err || null
         })
     })
}

export const setPropertyLoading = () =>  {
    return {
        type:PROPERTY_LOADING
    }
}