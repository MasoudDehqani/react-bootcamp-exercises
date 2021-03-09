import React from 'react'
import { AppBar, Toolbar, Typography, List, ListItem } from "@material-ui/core"
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <AppBar position="static">
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
  )
}

export default Header
