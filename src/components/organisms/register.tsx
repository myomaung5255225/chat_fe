import React from "react";
import { UiButton } from "../atoms/UiButton";
import { UiInput } from "../atoms/UiInput";
interface props{
    formData:any;
    setFormData:React.Dispatch<React.SetStateAction<any>>
}
export const RegisterForm:React.FC<props> =({formData,setFormData})=>{
    return(
        <div className="flex flex-col space-y-4 text-sm">
            <UiInput formData={formData} setFormData={setFormData} inputProps={{type:'text',placeholder:"Full Name..",name:"name",id:"name"}} />
            <UiInput formData={formData} setFormData={setFormData} inputProps={{type:'email',placeholder:"Email Address..",name:"email",id:"email"}} />
            <UiInput formData={formData} setFormData={setFormData} inputProps={{type:'password',placeholder:"Password..",name:"password",id:"password"}} />
            <UiInput formData={formData} setFormData={setFormData} inputProps={{type:'password',placeholder:"Password..",name:"c_password",id:"c_password"}} />
            <UiButton buttonProps={{type:'submit'}}>
                <span>Signup</span>
            </UiButton>
        </div>
    )
}