import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
            //make a new array, put the new data inside and spread all the of previous entries into one array
            //DO NOT WANT TO MUTATE STATE
    }

    return state;
}