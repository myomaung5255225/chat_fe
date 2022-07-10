import React from "react";
import { MainRouter } from "./routes";
import {ToastProvider} from 'react-toast-notifications'
export const App:React.FC =()=>{
  return(
   <ToastProvider>
     <MainRouter />
   </ToastProvider>
  )
}