import {combineReducers,legacy_createStore} from 'redux'
import taskReducer from './TaskReducer'

const rootReducer= combineReducers({taskReducer})

let store = legacy_createStore(rootReducer)

export default store