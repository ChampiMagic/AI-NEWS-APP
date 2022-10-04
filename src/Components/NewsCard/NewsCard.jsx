// Components
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

// Styles
import useStyles from './Styles.js'

const NewCard = ({ article: { description, publishedAt, source, title, url, urlToImage}, i }) => {

    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
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