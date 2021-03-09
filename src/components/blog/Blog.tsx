import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom"

import { AppBar, Toolbar, Typography, List, ListItem } from "@material-ui/core"
import Posts from './Posts'
import Home from "./Home"
import About from "./About"
import Post from "./Post"

function Blog() {
  return (
    <Router>
      <AppBar position="fixed">
        <Toolbar>
          <List style={{display: "flex"}}>
            <ListItem style={{cursor: "pointer"}}>
              <Typography variant="h6">
                <NavLink exact activeStyle={{borderBottom: '2px solid black'}} style={{textDecoration: "none", color: "inherit"}} to="/">
                  Home
                </NavLink>
              </Typography>
            </ListItem>
            <ListItem style={{cursor: "pointer"}}>
              <Typography variant="h6">
                <NavLink activeStyle={{borderBottom: '2px solid black'}} style={{textDecoration: "none", color: "inherit"}} to="/posts">
                  Posts
                </NavLink>
              </Typography>
            </ListItem>
            <ListItem style={{cursor: "pointer"}}>
              <Typography variant="h6">
                <NavLink activeStyle={{borderBottom: '2px solid black'}} style={{textDecoration: "none", color: "inherit"}} to="/About">
                  About
                </NavLink>
              </Typography>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={Posts} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route render={() => <h1>Page Dose Not Exist</h1>} />
      </Switch>
    </Router>
  )
}

export default Blog
