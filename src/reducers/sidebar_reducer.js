import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions/actions'
// old state, action
const sidebar_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    //  now we change the state
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    //  now we change the state
    return { ...state, isSidebarOpen: false }
  }
  // carry out the action and return a new state
  // return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default sidebar_reducer
