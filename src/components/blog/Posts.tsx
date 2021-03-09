import React from 'react'
import { articles } from "./data"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom"
import Header from "./Header"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    maxHeight: 345,
    minHeight: 300
  },
  media: {
    height: 140,
  },
});


function Posts() {
  const classes = useStyles();

  const param = useParams()
  console.log(param)

  return (
    <>
    <Header />
    <Grid container spacing={7} justify="center" style={{marginTop: '80px'}}>
        {articles.map( ({ id, author, title, urlToImage, description, publishedAt }) =>
        
        <Grid key={id} item>
          <Link to={`/posts/${id}`} style={{textDecoration: "none"}}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={urlToImage}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {author}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        )}

    </Grid>
    </>
  )
}

export default Posts
