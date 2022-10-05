// Hooks
import { useEffect, useState, createRef } from "react";

// Components
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

// Styles
import useStyles from './Styles.js'

// logic
import classNames from "classnames";

const NewCard = ({ article: { description, publishedAt, source, title, url, urlToImage}, i, activeArticle }) => {

    const classes = useStyles();

    const [ elRefs, setElRef ] = useState([])

    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
    
    useEffect(() => {
        setElRef((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()))
    }, []);

    useEffect(() => {
        if(i === activeArticle && elRefs[activeArticle]) {
             scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle, elRefs])

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle === i? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={ urlToImage ||  "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyaW9kaXN0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary"  >Learn More</Button>
                <Typography variant="h5" color="textSecondary" >{ i + 1 }</Typography>
            </CardActions>
        </Card>
    )
}

export default NewCard;