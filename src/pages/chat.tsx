
import pusherJs from 'pusher-js'
import React, {  useCallback, useEffect, useRef, useState } from 'react'
import { ChatWrapper } from '../components/modules/chatWrapper'
import { MessageList, messagePorps } from '../components/organisms/messagelist'
import { SendMessageForm } from '../components/organisms/sendMessage'
import { Userlist, userProps } from '../components/organisms/userlist'
import { appSetting } from '../config'
import { API } from '../services/api'

export const ChatPage: React.FC = () => {
  const [users, setUsers] = useState<userProps[]>([])
  const [slectedUserId, setslectedUserId] = useState<userProps>()
  const [messages, setMessages] = useState<messagePorps[]>([])
  const bottomRef = useRef(null);
 

  const [formData, setFormData] = useState({
    images: [],
    body: '',
    reciver_id: ''
  })
 
   
  pusherJs.logToConsole = true
  const pusher = new pusherJs(appSetting.pusherKey, {
    cluster: appSetting.pusherCluster
  })
  const getUsers = useCallback(() => {
    API.get('/auth/users')
      .then(res => {
        if (res.data && res.data.statusCode === 200 && res.data.data) {
          const userResponse: userProps[] = res.data.data
          setUsers(userResponse)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const getOldMessages = useCallback(() => {
    console.log(slectedUserId)
    if (slectedUserId) {
      API.get(`/chat/messages/${slectedUserId.id}`)
        .then(res => {
          if (res.data && res.data.statusCode === 200) {
            setMessages(res.data.messages)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [slectedUserId])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  const subscrbeChannel = useCallback(() => {
    if (slectedUserId) {
      const channel = pusher.subscribe(
        `${appSetting.channel}${slectedUserId.id}`
      )
      channel.bind(appSetting.event, (data: any) => {
        if (data.message) {
          setMessages(prevState => [...prevState, data.message])
        }
      })
    }
  }, [slectedUserId])

  const SendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    API.post('/chat/message', formData)
      .then(res => {
        if (res.data && res.data.statusCode === 200) {
          setFormData({
            ...formData,
            ['body']: '',
            ['images']: []
          })
          getOldMessages()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const ChangeChannel = (user: userProps) => {
    pusher.disconnect()
    subscrbeChannel()
    setMessages([])
    getOldMessages()
    setslectedUserId(user)
    if(bottomRef && bottomRef.current ){
       const btScroll:any = bottomRef.current;
       btScroll.scrollIntoView({behavior: 'smooth'})
    }
    setFormData({ ...formData, reciver_id: user.id })
  }

  return (
    <ChatWrapper>
      <div className='grid grid-cols-12 gap-2 min-h-screen overflow-hidden'>
        <div className='col-span-12 md:col-span-4 overflow-y-auto border-r border-slate-200'>
          <Userlist
            changeChannel={ChangeChannel}
            formData={formData}
            setFormData={setFormData}
            setSelectedUser={setslectedUserId}
            users={users}
          />
        </div>
        <div className='col-span-12 md:col-span-8 overflow-y-auto'>
          <div className='flex justify-center items-center content-center border-b border-indigo-200 rounded-b-md px-2 py-2'>
            <p className='text-sm text-indigo-500 font-bold'>
              {' '}
              {slectedUserId?.name}{' '}
            </p>
          </div>
          <div className='relative w-full'>
            <MessageList messages={messages} />
            <form
              onSubmit={e => {
                SendMessage(e)
              }}
            >
              {slectedUserId && (
                <SendMessageForm
                 
                  formData={formData}
                  setFormData={setFormData}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </ChatWrapper>
  )
}
