import React from 'react'
// import { articles } from "./data"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"
import {Link} from "react-router-dom"
// import { useParams } from "react-router-dom"
// import Header from "./Header"
import { Button, CardActions } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
// import { deleteActionCreator } from "./blogReducer"
import { DataType } from './data';
import blogReducer, { deletePost, BlogPostState } from "./blogReducer"
import { RootState } from "./blogStore"

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
  const dispatch = useDispatch()

  const articles = useSelector( (state: RootState) => state.posts.data)
  console.log(articles)
  const deletePostHandler = (id: string) => dispatch(deletePost(id)) 

  return (
    <Grid container spacing={7} justify="center" style={{width: "100%", marginTop: '80px'}}>
        {articles.map( ({ id, author, title, urlToImage, description, publishedAt }) =>
        
        <Grid key={id} item>
          <Card className={classes.root}>
            <Link to={`/posts/${id}`} style={{textDecoration: "none"}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={urlToImage}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" color="textPrimary">
                    {author}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
              <CardActions>
                <Button onClick={ () => deletePostHandler(id)} style={{fontWeight: "bold", marginLeft: "auto"}} size="small" color="secondary">
                  Delete Post
                </Button>
              </CardActions>
          </Card>
        </Grid>
        )}

    </Grid>
  )
}

export default Posts
