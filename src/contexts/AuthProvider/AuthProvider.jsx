import React from 'react';
import { createContext, useState } from 'react';
import app from '../../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    };

    const logOut = () => {
        return signOut(auth);
    };

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {user, providerLogin, logOut, createUser, signIn};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;