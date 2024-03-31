import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { post, get } from 'aws-amplify/api'

function App() {

  useEffect(() => {
    fetchPostMessage()
  }, [])

  const [count, setCount] = useState(0)
  const [myMessage, setMyMessage] = useState('')

  async function fetchPostMessage(){
    try {
      const restOperation = get({
        apiName: 'mylamapi',
        path: '/article',
      });

      const { body } = await restOperation.response;
      const response = await body.json();

      setMyMessage(response.success)
      console.log('GET call succeeded');
      console.log(response);

    } catch (e) {
      console.log('GET call failed: ', JSON.parse(e.response.body));

    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{myMessage}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
