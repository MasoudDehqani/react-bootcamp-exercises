import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import Posts from './Posts'
import Home from "./Home"
import About from "./About"
import Post from "./Post"

function Blog() {
  return (
    <Router>
      
      <Switch>
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={Posts} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="*">
          <h1>Page Dose Not Exist</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default Blog
