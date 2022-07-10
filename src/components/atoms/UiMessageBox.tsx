import React from "react";
interface props {
    formData: any
    setFormData: React.Dispatch<React.SetStateAction<any>>
    inputProps?: React.InputHTMLAttributes<HTMLTextAreaElement>
    className?:string;
  }
  
export const UiMessageBox:React.FC<props> =({formData,setFormData,inputProps,className})=>{
    return(
        <div className={`${className} w-full`}>
            <textarea className="w-full px-2 text-slate-600 text-sm rounded-md focus:outline-none appearance-none border border-slate-300" onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}  {...inputProps} ></textarea>
        </div>
    )
}