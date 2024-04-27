/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext } from "react";
import {useState } from "react";
import { useContext } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({children})=>{
    const [showLoginModal  , setShowLoginModal] = useState(false);
    const [showRegisterModal  , setShowRegisterModal] = useState(false);
    const [showProfileModal  , setShowProfileModal] = useState(false);

    const openLoginModal = ()=>{
        setShowLoginModal(true);
        document.body.style.overflow = 'hidden';
    }

    const closeLoginModal = ()=>{
        setShowLoginModal(false);
        document.body.style.overflow = "auto";
    }
    const closeCreateProfileModal = ()=>{
        setShowProfileModal(false);
        document.body.style.overflow = "auto";
    }
    
    const openRegisterModal = ()=>{
        setShowRegisterModal(true);
        document.body.style.overflow = 'hidden';
    }

    const closeRegisterModal = ()=>{
        setShowRegisterModal(false);
        document.body.style.overflow = "auto";
    }
    const openCreateProfileModal = ()=>{
        setShowProfileModal(true);
        document.body.style.overflow = 'hidden';
    }
    return (<ModalContext.Provider value={{showLoginModal , showRegisterModal , showProfileModal , closeCreateProfileModal , openLoginModal , closeLoginModal , openRegisterModal , closeRegisterModal , openCreateProfileModal , setShowProfileModal}}>{children}</ModalContext.Provider>);
};


export const useModal = () => {
    return useContext(ModalContext);
};