import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import { MenuList } from '@material-ui/core'
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles'
import { InputBase } from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home'
import BusinessIcon from '@material-ui/icons/Business'
import LabelIcon from '@material-ui/icons/Label'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import NoteIcon from '@material-ui/icons/Note'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/img/lookup-shop-f-branco.svg'
import BotaoSelecao from './BotaoSelecao'
const drawerWidth = 240

const useStylesOptToolbar = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      flexGrow: 1,
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      height: '40px',
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
)


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        height: '117px',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    containerToolbar: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '114px',
    },
  }),
)

export default function MenuPrincipalResponsivo2(props) {
    const history = useHistory()
    const { container } = props
    const classes = useStyles()
    const classesOptToolbar = useStylesOptToolbar()
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} style={{padding: 10}}><Logo /></div>
      
      <Divider />
      <MenuList>
        <ListItem button>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Site" />
        </ListItem>
      </MenuList>
      <Divider />
      <MenuList>
            <ListItem button onClick={() => history.push('/empresas')}>
              <ListItemIcon><BusinessIcon /></ListItemIcon>
              <ListItemText primary="Empresas" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><LocalMallIcon /></ListItemIcon>
              <ListItemText primary="Produtos" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><LabelIcon /></ListItemIcon>
              <ListItemText primary="Categorias" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><NoteIcon /></ListItemIcon>
              <ListItemText primary="Avisos" />
            </ListItem>
      </MenuList>
    </div>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.containerToolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classesOptToolbar.search}>
            <div className={classesOptToolbar.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Pesquisar produto..."
              classes={{
                root: classesOptToolbar.inputRoot,
                input: classesOptToolbar.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.caixaSelecao}>
            <BotaoSelecao />
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        { props.children }
      </main>
    </div>
  )
}
