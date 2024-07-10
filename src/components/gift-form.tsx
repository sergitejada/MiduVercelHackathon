'use client'

import { useChat } from '@ai-sdk/react'

export default function GiftForm() {
  const { messages, input, handleSubmit, handleInputChange } = useChat()

  return (
    <div className='flex flex-col w-full max-w-md mx-auto stretch p-20'>
      {messages.map(m => (
        <div key={m.id} className='whitespace-pre-wrap'>
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className='fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl'
          value={input}
          placeholder='Say something...'
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
