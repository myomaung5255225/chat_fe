import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { AuthWrapper } from '../components/modules/AuthWrapper'
import { LoginForm } from '../components/organisms/login'
import { API } from '../services/api'
interface formProps {
  email: string
  password: string
}
export const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<formProps>({
    email: '',
    password: ''
  })
  const {addToast} = useToasts()
  const {push} = useHistory()
  const SubmitForm = (e:React.FormEvent)=>{
    e.preventDefault()
    API.post('/login',formData).then(res=>{
       if(res.data && res.data.statusCode===200){
        addToast("login successful",{appearance:'success',autoDismiss:true})
        sessionStorage.setItem('access_token',res.data.accessToken)
        window.location.reload()
        push('/protected')
       }
    })
    .catch(err=>{
        console.log(err)
    })
  }
  return (
    <AuthWrapper>
      <form onSubmit={(e:React.FormEvent)=>SubmitForm(e)} className='flex flex-col  px-2 py-2'>
         <LoginForm formData={formData} setFormData={setFormData} />
         
      </form>
    </AuthWrapper>
  )
}
