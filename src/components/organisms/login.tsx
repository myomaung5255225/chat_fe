import React from 'react'
import { UiButton } from '../atoms/UiButton'
import { UiInput } from '../atoms/UiInput'
interface props {
  className?: string
  formData: any
  setFormData: React.Dispatch<React.SetStateAction<any>>
}
export const LoginForm: React.FC<props> = ({
  formData,
  setFormData,
  className
}) => {
  return (
    <div className={`flex flex-col space-y-3 text-sm ${className}`}>
      <UiInput
        formData={formData}
        inputProps={{
          type: 'email',
          required: true,
          placeholder: 'Email Address here...',
          id: 'email',
          name: 'email'
        }}
        setFormData={setFormData}
      />
      <UiInput
        formData={formData}
        inputProps={{
          type: 'password',
          required: true,
          placeholder: 'Password here...',
          id: 'password',
          name: 'password'
        }}
        setFormData={setFormData}
      />
      <UiButton buttonProps={{ type: 'submit' }}>
        <span>Login</span>
      </UiButton>
    </div>
  )
}
