import {ADD_PROPERTY,GET_PROPERTY,GET_PROPERTY_VIRAR,GET_PROPERTY_VASAI,GET_PROPERTY_NALLASOPARA} from '../Actions/types'

const initialState = {
    property: {},
    properties: [],
    loading:false
}

export default function (state= initialState,action) {
    switch(action.type) {
        case ADD_PROPERTY:
            return {
                ...state,
                property:action.payload
            }
        default:
            return state
    }
}