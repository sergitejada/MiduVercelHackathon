'use client'

import { useChat } from '@ai-sdk/react'

export default function GiftForm() {
  const { messages, input, handleSubmit, handleInputChange } = useChat()

  return (
    <section className='absolute flex justify-between flex-col w-[700px] p-4 mx-auto border shadow-xl right-0 top-32 h-[1000px] bg-white rounded-lg'>
      <div>
        {messages.map(m => (
          <div key={m.id} className='whitespace-pre-wrap'>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input className='w-full p-2 border border-gray-300 rounded shadow-md' value={input} placeholder='Say something...' onChange={handleInputChange} />
      </form>
    </section>
  )
}
