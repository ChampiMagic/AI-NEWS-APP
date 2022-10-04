// Components
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";

// Styles
import useStyles from './Styles.js'

const NewsCards = ({ articles }) => {

    const classes = useStyles();

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