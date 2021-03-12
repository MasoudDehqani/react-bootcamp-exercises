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
import Header from "./Header"
import SelectPost from './SelectPost'

function Blog() {
  return (
    <Router>
      <Header />
      
      <Switch>
        {/* <Route path="/posts/:id" component={Post} /> */}
        <Route path="/posts" component={SelectPost} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="*">
          <h1 style={{marginTop: "80px", textAlign: "center"}}>Page Dose Not Exist</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default Blog
