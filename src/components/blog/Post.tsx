import React from 'react'
import { Route, useHistory, useParams } from "react-router-dom"
// import {articles} from "./data"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid"
// import Header from "./Header"
import { Box } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux"
import { DataType } from './data';
import { deleteActionCreator } from './blogReducer';

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    minWidth: 545,
    maxHeight: 800,
    minHeight: 500
  },
  media: {
    height: 240,
  },
});

function Post() {
  const classes = useStyles();

  const articles = useSelector( (state: DataType[]) => state)
  const dispatch = useDispatch()

  const history = useHistory()

  const param: {id: string} = useParams()
  if (+param.id > articles.length) {
    return <h1>Page does not Exist</h1>
  }

  const deleteAndGoBack = (id: string) => {
    dispatch(deleteActionCreator(id))
    history.goBack()
  }

  return (
    <>
      <Box mt={5} display="flex" justifyContent="center">
        <Button color="secondary" variant="contained" onClick={() => history.goBack()}>
          Go Back
        </Button>
      </Box>
    <Grid container spacing={7} justify="center" style={{width: "100%", marginTop: '60px'}}>
      {articles.map( ({ id, author, title, urlToImage, description, publishedAt, url }) => 
      <Route key={id} path={`/posts/${id}`}>
        <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={urlToImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {author}
              </Typography>
              <Typography style={{marginBottom: "20px"}} variant="body1" color="textPrimary" component="p">
                <strong>Summary:</strong> {description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              <strong>Published At:</strong> {publishedAt}
              </Typography>
              <CardActions>
                <a target="_blank" rel="noreferrer" href={url}>
                  <Button size="small" color="primary">
                  Read the full story
                    
                  </Button>
                </a>
                <Button onClick={() => deleteAndGoBack(id)} style={{fontWeight: "bold", marginLeft: "auto"}} size="small" color="secondary">
                  Delete Post
                </Button>
              </CardActions>
              {/* <Typography variant="body2" color="textSecondary" component="p">
              <a href={url}></a>
              </Typography> */}
            </CardContent>
        </Card>
      </Route>
          )}
        
    </Grid>
    </>
  )
}

export default Post
