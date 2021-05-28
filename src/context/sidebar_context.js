import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/sidebar_reducer'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions/actions'

const initialState = {
  isSidebarOpen: false,
}

const SidebarContext = React.createContext()

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // opens sidebar
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  // closes sidebar
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }
  return (
    <SidebarContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}
// make sure use
export const useSidebarContext = () => {
  return useContext(SidebarContext)
}
