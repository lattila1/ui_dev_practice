import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

import { makeStyles } from "@material-ui/core/styles";

import { useState } from "react";

const useStyles = makeStyles({
  hamburger: {
    background: "#212121",
    color: "#fafafa",
  },
  drawerContent: {
    width: 300,
  },
  heroText: {
    fontFamily: "Overpass, sans-serif",
    fontWeight: 400,
  },
  bodyText: {
    fontFamily: "Overpass, sans-serif",
    fontWeight: 300,
    width: 340,
  },
});

export default function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const classes = useStyles();

  function toggleDrawer() {
    setShowDrawer(!showDrawer);
  }

  return (
    <div className={classes.root}>
      <Grid container justify="flex-end">
        <IconButton onClick={toggleDrawer} className={classes.hamburger}>
          <MenuIcon />
        </IconButton>
      </Grid>
      <Typography variant="h2" component="h1" className={classes.heroText}>
        Find Your Dream Job with Us
      </Typography>
      <Typography variant="body2" className={classes.bodyText}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
        erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
        consequat.
      </Typography>
      <Drawer open={showDrawer} anchor="right">
        <div className={classes.drawerContent}>
          <IconButton onClick={toggleDrawer}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <div>
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
