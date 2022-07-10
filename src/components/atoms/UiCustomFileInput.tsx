import React from 'react'
import { FileIcon } from './icons/fileIcon'
interface props {
  formData: any
  setFormData: any,
  
}
export const UiFileInput: React.FC<props> = ({ formData, setFormData }) => {
  const FileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files
   
    let fileReader = new FileReader();
    if(files){
        fileReader.readAsDataURL(files[0])
        fileReader.onload=(event)=>{
           
            setFormData({
                ...formData,
                [e.target.name]:event.target?.result
            })
        }
    }
    
  }
  return (
    <>
      <label htmlFor='images'>
        <FileIcon className='w-4 h-4' />
      </label>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          FileChangeHandler(e)
        }}
        type='file'
        name='images'
        multiple={true}
        className='opacity-0 w-0'
        id='images'
      />
    </>
  )
}
