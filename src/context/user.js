import React from 'react'

const UserContext = React.createContext({
  user: null,
  isLoggedIn: false,
  toggleUser: () => {}
})

UserContext.displayName = 'UserContext'

export const Provider = UserContext.Provider
export default UserContext
