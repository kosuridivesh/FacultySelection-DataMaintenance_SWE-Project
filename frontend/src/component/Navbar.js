import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    // console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" style={{ background: "#112D4E", opacity: "1" }}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          {!isAuth() ? (
            <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
              Faculty Selection Portal
            </Link>
          ) : (
            <Button color="inherit" onClick={() => handleClick("/profile")}>
              My Profile
            </Button>
          )}
          {/* <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
            Faculty Selection Portal
          </Link> */}
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Post
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Posts
              </Button>
              {/* <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button> */}
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                My Applications
              </Button>
              {/* <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button> */}
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button
              variant="contained"
              color="secondary"
              className={classes.menuButton}
              onClick={() => handleClick("/login")}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.menuButton}
              onClick={() => handleClick("/signup")}
            >
              New User
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
