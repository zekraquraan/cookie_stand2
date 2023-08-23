import jwt from 'jsonwebtoken'
import { createContext, useContext, useState } from 'react'


const AuthContext = createContext()

export function useAuth() {
  const auth = useContext(AuthContext)
  if (!auth) {
    return("Error : Empty Auth ")

}
  return auth
}

const baseUrl =process.env.NEXT_PUBLIC_URL

export function AuthProvider(props) {
  const [state, setState] = useState({
    token: null,
    user: null,
    login,
    logout
  })

  async function login(username, password) {
    const url = baseUrl+"/api/token/"
    const options={
        method : "POST",
        body : JSON.stringify({username,password}),
        headers :{"Content-Type": "application/json"}

}
    const response = await fetch(url,options)
    const data = await response.json()
        console.log(data)
    
    const decodedAccess = jwt.decode(data.access)
    console.log(decodedAccess)

    const newState = {
      token: data,
      user: {
        username: decodedAccess.username,
        email: decodedAccess.email,
        id: decodedAccess.user_id
      }
    }
    console.log(newState)
    setState((prevState) => ({ ...prevState, ...newState }))
  }

  function logout() {
    const newState = {
      token: null,
      user: null
    }
    setState((prevState) => ({ ...prevState, ...newState }))
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  )
}

