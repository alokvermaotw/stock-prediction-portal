import {useState, useContext, createContext} from 'react'

// create the context

const AuthContext = createContext();



const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken') //double !! mark to convert access token to true or false
    );
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};