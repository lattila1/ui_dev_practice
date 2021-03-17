import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import CheckIcon from "@material-ui/icons/Check";
import PetsIcon from "@material-ui/icons/Pets";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState } from "react";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#3f51b5",
    },
  },
  typography: {
    h1: {
      fontSize: "3.75rem",
      fontFamily: "Overpass, sans-serif",
      fontWeight: 400,
      maxWidth: 400,
      color: "#fafafa",
      "@media (min-width: 720px)": {
        fontSize: "6rem",
        maxWidth: 600,
      },
    },
    body2: {
      "@media (min-width: 720px)": {
        fontSize: "1rem",
      },
      fontFamily: "Overpass, sans-serif",
      fontWeight: 300,
      color: "#fafafa",
      lineHeight: 2,
    },
  },
});

const useStyles = makeStyles({
  container: {
    "@media (min-width: 720px)": {
      padding: "2rem",
    },
  },
  hamburger: {
    background: "#212121",
    color: "#fafafa",
  },
  hamburgerIcon: {
    "@media (min-width: 720px)": {
      fontSize: "3rem",
    },
  },
  drawerContent: {
    width: 300,
  },
  button: {
    fontFamily: "Overpass, sans-serif",
    fontWeight: 300,
    background: "#212121",
    color: "#fafafa",
    width: 150,
    height: 60,
    borderRadius: 30,
    letterSpacing: 3,
  },
  bodyTextContainer: {
    maxWidth: 340,
  },
});

export default function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const classes = useStyles();

  function toggleDrawer() {
    setShowDrawer(!showDrawer);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end" m={2}>
              <IconButton onClick={toggleDrawer} className={classes.hamburger}>
                <MenuIcon className={classes.hamburgerIcon} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mx={2} my={4}>
              <Typography variant="h1" component="h1">
                Find Your Dream Job with Us
              </Typography>
            </Box>
            <Box mx={2} my={4} className={classes.bodyTextContainer}>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </Typography>
            </Box>
            <Box mx={2} my={8}>
              <Button variant="contained" className={classes.button}>
                Apply
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
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
            <ListItem button>
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <ListItemText primary="Apply" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText primary="Cat videos" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </ThemeProvider>
  );
}
