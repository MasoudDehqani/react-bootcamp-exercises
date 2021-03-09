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
import Header from "./Header"

function Blog() {
  return (
    <Router>
      
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
