import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase.config";
export const authContext = createContext(null)
import PropTypes from 'prop-types';

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user , setUser] = useState(null)
    const [loading ,setLoading] = useState(true);

    const signUp = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email ,password)
    }

    const signIn =(email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email ,password);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const logOut = ()=>{
        setLoading(true)
     return signOut(auth)
    }

    const handlePasswordReset = (email)=>{
        return sendPasswordResetEmail(auth , email);
    }

console.log(user)

   const info ={
    user,
    loading,
    signUp ,
    signIn,
    logOut,
    handlePasswordReset
   } 


    return (
        <authContext.Provider value = {info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
  }