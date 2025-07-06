import React, { createContext } from 'react'
  // eslint-disable-next-line react-refresh/only-export-components
  export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  
  const authInformation={
    name: "Hero"
  }
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider