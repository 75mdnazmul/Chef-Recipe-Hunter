/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';   
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()



const AuthProviders = ({children}) => {
    const [user, serUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const loginWithGithub = () =>{
        return signInWithPopup(auth, githubProvider)
    }
    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser);
            serUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        createUser,
        loading,
        logIn,
        logOut,
        loginWithGoogle,
        loginWithGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;