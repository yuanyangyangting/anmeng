import { createStore } from 'redux'
import {reducers} from './reducer'

const initState = {
  isLoading: false,
  token:123
}

let store = createStore(reducers,initState);

export default store