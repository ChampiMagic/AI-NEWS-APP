import { useState, useEffect } from 'react'
import style from './App.css'
import alanBtn from '@alan-ai/alan-sdk-web'


function App() {

  const [ newsArticles, setNewsArticles ] = useState([])

  useEffect(() => {

    alanBtn({
      key: import.meta.env.VITE_ALAN_KEY,  
      onCommand: ({ command, articles }) => {
          if(command === 'newHeadlines') {
            setNewsArticles(articles)
          }
      }
    })

  }, [])

  return (
    <div >
      Alan AI News Appliclation
    </div>
  )
}

export default App
