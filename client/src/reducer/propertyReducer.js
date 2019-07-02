import {ADD_PROPERTY,GET_PROPERTY,GET_PROPERTY_VIRAR,GET_PROPERTY_VASAI,GET_PROPERTY_NALLASOPARA, PROPERTY_LOADING} from '../Actions/types'

const initialState = {
    property: {},
    properties: [],
    loading:false
}

export default function (state= initialState,action) {
    switch(action.type) {
        case PROPERTY_LOADING:{
            return {
                loading:true
            }
        }
        case ADD_PROPERTY:
            return {
                ...state,
                property:action.payload
                
            }
        case GET_PROPERTY:
            return {
                ...state,
                properties:action.payload,
                loading:false
            }
        default:
            return state
    }
}