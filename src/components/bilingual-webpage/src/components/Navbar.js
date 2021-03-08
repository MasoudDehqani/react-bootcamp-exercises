import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../index.css"
import { languages } from "../contexts/index"
import LanguageContext from "../contexts/index"
import { isContext } from "vm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "10px",
    marginLeft: "10px",
  },
  toolbarEnglish: {
    display: "flex",
    justifyContent: "space-between !important",
  },
  toolbarPersian: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between !important",
  },
  btn: {
    color: "white",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const languageContext = useContext(LanguageContext)
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const { home, events, aboutUs, contactUs, language } = languageContext.language.words

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={languageContext.language.language === "English" ? classes.toolbarEnglish : classes.toolbarPersian}>
          <div style={{display: 'flex', flexDirection: languageContext.language.language === "English" ? 'row' : 'row-reverse'}}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Button id={"_home"} className={classes.btn}>
              <Typography variant="h6" className={classes.title}>
                {home}
              </Typography>
            </Button>
            <Button id={"_events"} className={classes.btn}>
              <Typography variant="h6" className={classes.title}>
                {events}
              </Typography>
            </Button>
            <Button id={"_about"} className={classes.btn}>
              <Typography variant="h6" className={classes.title}>
                {aboutUs}
              </Typography>
            </Button>
            <Button id={"_contact"} className={classes.btn}>
              <Typography variant="h6" className={classes.title}>
                {contactUs}
              </Typography>
            </Button>
          </div>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={classes.btn}
              id={"_lan"}
              color="inherit"
            >
              {language}
            </Button>
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => {
              languageContext.changeToPersian()
              handleClose()
            }} id={"_changeToPersian"}>فارسی</MenuItem>
            <MenuItem onClick={() => {
              languageContext.changeToEnglish()
              handleClose()
            }} id={"_changeToEnglish"}>English</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
