import {
  AppBar,
  Avatar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Add, Apps } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

import React from "react";
import { CreateClass, JoinClass } from "..";
import { useLocalContext } from "../../context/context";
import { useStyles } from "./style";

const Header = ({ children }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const {
    setCreateClassDialog,
    setJoinClassDialog,
    loggedInUser,
    logout,
  } = useLocalContext();

  const handleCreate = () => {
    handleClose();
    setCreateClassDialog(true);
  };

  const handleJoin = () => {
    handleClose();
    setJoinClassDialog(true);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerWrapper}>
            {children}
            <img
              src="https://i.ibb.co/z7Tcf0h/Screenshot-2021-04-11-at-3-53-30-AM.png"
              width="200"
              height="50"
              alt="Classroom"
            />
          </div>

          <div>
            <h1>Welcome, {loggedInUser?.displayName}</h1>
          </div>

          <div className={classes.header__wrapper__right}>
            <Button color="default" onClick={handleJoin}>
              Join Class
            </Button>
            <Button color="default" onClick={handleCreate}>
              Create Class
            </Button>
            <Button variant="outlined" color="default" onClick={logout}>
              LOGOUT
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <CreateClass />
      <JoinClass />
    </div>
  );
};

export default Header;
