import {combineReducers} from 'redux'
import {LOADED_CLIENT, } from './actions'

import { deliveryAccessToken, spaceId } from '../../config'

const initialState = {
  authState: 'loading',
  deliveryAccessToken,
  spaceId
}

function loadedClient(state = initialState, action){
  switch (action.type){
    case LOADED_CLIENT:
      return [...state, {authstate: action.authstate}]
    default:
      return state
  }
}

const chucklesApp = combineReducers({loadedClient})

export default chucklesApp;
