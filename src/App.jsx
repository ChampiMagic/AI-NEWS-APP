import { useState, useEffect } from 'react'
import style from './App.css'
import alanBtn from '@alan-ai/alan-sdk-web'


// Components
import NewsCards from './Components/NewsCards/NewsCards'


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
      <h1>Alan AI News Appliclation</h1>
      <NewsCards articles={newsArticles} />
    </div>
  )
}

export default App
