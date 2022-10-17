import React, { useContex, useState } from 'react'

const UserNameContext = React.createContext()
const UserNameUpdateContext = React.createContext()

export function useUserName() {
  return useContex(UserNameContext)
}

export function useUserNameUpdate() {
  return useContex(UserNameUpdateContext)
}

export function UserProvider({ children }) {
  const [userName, setUserName] = useState('')

  function updateUserName(name) {
    setUserName(name)
  }

  return (
    <UserNameUpdateContext.Provider value={updateUserName}>
      <UserNameContext.Provider value={userName}>
        {children}
      </UserNameContext.Provider>
    </UserNameUpdateContext.Provider>
  )
}
