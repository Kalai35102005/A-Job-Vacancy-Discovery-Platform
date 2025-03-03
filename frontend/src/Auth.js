import React,{useContext,useState} from 'react'
const AuthContext=React.createContext()
export function Auth(props) {
    const[user,setUser]=useState(null)
    const login=(username)=>{setUser(username)
    }
    const logout=()=>{
        setUser(null)
    }
  return (
    <div>
    <AuthContext.Provider value={{user,login,logout}}>
        {props.children}
    </AuthContext.Provider>
    </div>
  )}
    export const useAuth=()=>{
        return useContext(AuthContext)
    }
export default Auth