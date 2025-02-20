import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import Swal from "sweetalert2";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    const newUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (updateData) =>{
        // console.log(updateData)
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }

     // login user
     const loginUser = (email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

     // logout User
     const handleLogout=()=>{
        setLoading(true)
        signOut(auth).then((res) => {
            console.log(res)
            Swal.fire({
                title: "sign out",
                text: "You are successfully sign out",
                icon: "success"
              });
          }).catch((error) => {
            console.log(error)
          });
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
        user,setUser,
        handleLogout,
        loginUser
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