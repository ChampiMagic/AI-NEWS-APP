import { useState, useEffect } from 'react'

import alanBtn from '@alan-ai/alan-sdk-web'


// Components
import NewsCards from './Components/NewsCards/NewsCards'

// Styles
import useStyles from './Styles.js'

function App() {

  const classes = useStyles()
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
      <div className={classes.logoContainer}> 
        <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} className={classes.alanLogo} />
    </div>
  )
}

export default App
