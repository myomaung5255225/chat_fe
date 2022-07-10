import React from 'react'
import { SendIcon } from '../atoms/icons/sendIcon'
import { UiFileInput } from '../atoms/UiCustomFileInput'
import { UiMessageBox } from '../atoms/UiMessageBox'
interface props {
  formData: any
  setFormData: React.Dispatch<React.SetStateAction<any>>;
 
}
export const SendMessageForm: React.FC<props> = ({ formData, setFormData }) => {
  return (
    <div>
      <div className='flex flex-row w-full  max-w-screen-md space-x-2 fixed bottom-0 justify-start items-center content-center'>
      <UiFileInput  formData={formData} setFormData={setFormData} />
        <UiMessageBox
          inputProps={{
            id: 'body',
            name: 'body',
            placeholder: 'message here...'
          }}
          formData={formData}
          setFormData={setFormData}
        />
        <button type='submit' className='px-2'>
          <SendIcon className=' hover:text-green-700 w-5 h-5' />
        </button>
      </div>
      
    </div>
  )
}
