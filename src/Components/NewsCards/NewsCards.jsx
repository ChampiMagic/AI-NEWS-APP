// Components
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";

// Styles
import useStyles from './Styles.js'

// First impression
const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];

const NewsCards = ({ articles }) => {

    const classes = useStyles();

    if(!articles.length) {
        return (
            <Grow in>
             <Grid container alignItems="stretch" spacing={3} className={classes.container}>
                {infoCards?.map((info, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={i} className={classes.infoCard}>
                        <div className={classes.card} style={{ backgroundColor: info.color }}>
                            <Typography variant="h5">{info.title}</Typography>
                            { info.info && 
                                <Typography variant="h6">
                                    <strong>
                                        {info.title.split(' ')[2]}:
                                    </strong>
                                        <br />
                                        {info.info}
                                </Typography> 
                            }
                            <Typography variant="h6">Try Saying: <br /> <i>{info.text}</i></Typography>
                        </div>
                    </Grid>    
                ))}
             </Grid>
            </Grow>
        );
    }

    return (
        <Grow in>
            <Grid container alignItems="stretch" spacing={3} className={classes.container}>

             {articles?.map((article, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex'}} key={i}>
                    <NewsCard article={article} i={i} />
                </Grid>    
                ))} 

            </Grid>

        </Grow>
    )
}

export default NewsCards;