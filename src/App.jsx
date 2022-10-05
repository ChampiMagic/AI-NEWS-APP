// Hooks
import { useState, useEffect, useRef } from 'react'

// Alan AI
import alanBtn from '@alan-ai/alan-sdk-web'

// Components
import NewsCards from './Components/NewsCards/NewsCards'

// Styles
import useStyles from './Styles.js'

// Others
import wordToNumber from 'word-to-numbers';

function App() {

  const classes = useStyles()
  const [ newsArticles, setNewsArticles ] = useState([])
  const [ activeArticle, setActiveArticle] = useState(-1)

  const alanBtnRef = useRef({}).current;

  useEffect(() => {

    alanBtnRef.btnInstance = alanBtn({
      key: import.meta.env.VITE_ALAN_KEY,  
      onCommand: ({ command, articles, number }) => {
          if(command === 'newHeadlines') {
            setNewsArticles(articles)
            setActiveArticle(-1)
          }
          else if(command === 'highlight') {
            setActiveArticle((prev) => prev + 1);
          }
          else if(command === 'open') {
            const parsedNumber = number.length > 2 ? wordToNumber(number) : number;
            const article = articles[parsedNumber - 1];
  
            if (parsedNumber > articles.length) {
              alanBtnRef.btnInstance.playText('Please try with a lower number.');
            } else if (article) {
              window.open(article.url, '_blank');
              alanBtnRef.btnInstance.playText('Opening...');
            } else {
              alanBtnRef.btnInstance.playText('Please try that again...');
            }
            
          }
      }
    })

  }, [])
  
  return (
    <div >
      <div className={classes.logoContainer}> 
        <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}

export default App
