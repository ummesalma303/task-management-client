import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    const newUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updateData) =>{
        // console.log(updateData)
        return updateProfile(auth.currentUser, updateData)
    }


    // onauth
    useEffect(() => {
       const subscribe = onAuthStateChanged(auth, (currentUser) => {
        setLoading(false)
        setUser(currentUser)
        console.log(currentUser)
       })
    
      return () => subscribe()
    }, [])
    




    const info = {
        newUser,
        loading,
        setLoading,
        updateUserProfile,
        user,setUser
    }
  return (
    <div>
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider> 
    </div>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
   };
export default AuthProvider;