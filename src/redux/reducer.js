import { combineReducers } from 'redux';
import isLoading from './isLoading'
import updateToken from './token'

export const reducers = combineReducers({
    isLoading:isLoading,
    token:updateToken
})