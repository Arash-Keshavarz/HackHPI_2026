import { useEffect, useState } from 'react'

import { getBackendTestMessage } from '../../data/requests'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    async function loadMessage() {
      try {
        const backendMessage = await getBackendTestMessage()
        setMessage(backendMessage ?? 'No message')
      } catch (error) {
        console.error('getBackendTestMessage failed', error)
        setMessage('Backend request failed')
      }
    }

    loadMessage()
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="text-3xl font-semibold text-black">{message}</h1>
    </main>
  )
}

export default App
