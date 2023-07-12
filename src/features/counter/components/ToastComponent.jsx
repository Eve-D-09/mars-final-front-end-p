import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector, useDispatch } from "react-redux";
import {selectToastMessage, setToastMessage } from "../planetSlice";
import { useEffect } from "react";

const ToastComponent = () => {
    const toastMessage = useSelector(selectToastMessage);
    const dispatch = useDispatch();

    useEffect(() => {
      console.log(toastMessage);
        if(!toastMessage) return;
        toast(toastMessage);
        dispatch(setToastMessage(""));
    })

    return ( <>
      <ToastContainer />
    </> );
}
 
export default ToastComponent;