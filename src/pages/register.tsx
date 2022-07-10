import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { AuthWrapper } from '../components/modules/AuthWrapper'
import { RegisterForm } from '../components/organisms/register'
import { API } from '../services/api'
interface props {
  email: string
  password: string
  c_password: string
  name: string
}
export const RegisterPage: React.FC = () => {
  const [formData, setformData] = useState<props>()
  const {addToast} = useToasts()
  const {push} = useHistory()
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    API.post('/register',formData).then(res=>{
        if(res.data && res.data.statusCode===201){
            addToast("success",{appearance:'success',autoDismiss:true})
            sessionStorage.setItem('access_token',res.data.accessToken)
            window.location.reload()
            push('/protected')
        }
    })
  }
  return (
    <AuthWrapper>
      <form onSubmit={(e: React.FormEvent) => submitHandler(e)}>
        <RegisterForm formData={formData} setFormData={setformData} />
      </form>
    </AuthWrapper>
  )
}
