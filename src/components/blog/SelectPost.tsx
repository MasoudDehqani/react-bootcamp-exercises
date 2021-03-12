import React from 'react'
import { Route, useRouteMatch } from 'react-router'
import Post from './Post'
import Posts from './Posts'

function SelectPost() {

  const { path } = useRouteMatch()

  return (
    <div style={{display: "flex"}}>
      <Route path={path} component={Posts} />
      <Route path={`${path}/:id`} component={Post} />
    </div>
  )
}

export default SelectPost
