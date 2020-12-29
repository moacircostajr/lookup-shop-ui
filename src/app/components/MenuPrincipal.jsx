import React, { useEffect } from 'react'
import clsx from 'clsx'
import { 
  makeStyles, 
  useTheme,
  MenuList, 
  MenuItem,
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Divider,
  IconButton,

  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Menu,
  InputBase,
  List,
  Collapse
} from '@material-ui/core'

import { 
  ExpandLess,
  ExpandMore
} from '@material-ui/icons'
import { fade, createStyles } from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'

import { FaHandHoldingUsd } from 'react-icons/fa'
import { FaUserFriends } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'
import { FaTools } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaClipboardList } from 'react-icons/fa'
import { FaBuilding } from 'react-icons/fa'
import { FaVideo } from 'react-icons/fa'

import { Link as RouterLink, useHistory } from 'react-router-dom'

const drawerWidth = 270

const useStylesToolbar = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: '65px',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  icones: {
    marginLeft: '6px',
  }
}))


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
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
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


const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    marginLeft: '5.5em',
    marginTop: '1em',
    marginRight: '5px',
  },
  nested: {
    paddingLeft: theme.spacing(8),
  },
}))


function MenuPrincipal(props) {

  const history = useHistory()
  const classesToolbar = useStylesToolbar()
  const classesOptToolbar = useStylesOptToolbar()
  const classes = useStyles()

  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const [openCollapse, setOpenCollapse] = React.useState(false);    

  useEffect(() => {
    openCollapse ? setOpen(true) : setOpen(false)
  }, [openCollapse])

  useEffect(() => {
    open ? setOpenCollapse(true) : setOpenCollapse(false)
  }, [open])

  useEffect(() => {
    let token = localStorage.getItem('tokenaiChug4e')
    if (!token) { history.push('/login') }
  }, [history])

  function handleOpenSettings(){
    setOpenCollapse(!openCollapse);
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }


  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><RouterLink to="minhaconta">Minha conta</RouterLink></MenuItem>
      <MenuItem onClick={() => {localStorage.removeItem('tokenaiChug4e'); /*localStorage.removeItem('userta!Kahb3');*/ history.push('/login');}}>Sair</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <>
      <div className={classesToolbar.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classesToolbar.appBar, {
            [classesToolbar.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classesToolbar.menuButton, {
                [classesToolbar.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classesOptToolbar.title} variant="h6" noWrap>
              Emil Ger
            </Typography>
            <div className={classesOptToolbar.search}>
              <div className={classesOptToolbar.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Buscar…"
                classes={{
                  root: classesOptToolbar.inputRoot,
                  input: classesOptToolbar.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classesOptToolbar.grow} />
            <div className={classesOptToolbar.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classesOptToolbar.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
          {renderMobileMenu}
          {renderMenu}
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classesToolbar.drawer, {
            [classesToolbar.drawerOpen]: open,
            [classesToolbar.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classesToolbar.drawerOpen]: open,
              [classesToolbar.drawerClose]: !open,
            }),
          }}
        >
          <div className={classesToolbar.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <MenuList>
            <ListItem button onClick={() => history.push('/principal')}>
              <ListItemIcon><FaHome className={classesToolbar.icones} size="20px"/></ListItemIcon>
              <ListItemText primary="Início" />
            </ListItem>
            <ListItem button onClick={() => history.push('/ajustes')}>
              <ListItemIcon><FaTools className={classesToolbar.icones} size="20px"/></ListItemIcon>
              <ListItemText primary="Ajustes" />
            </ListItem>
          </MenuList>
          <Divider />
          <MenuList>
            <ListItem button onClick={() => history.push('/empresas')}>
              <ListItemIcon><FaBuilding className={classesToolbar.icones} size="20px"/></ListItemIcon>
              <ListItemText primary="Empresas" />
            </ListItem>
            <ListItem button onClick={() => history.push('/clientes')}>
              <ListItemIcon><FaUserFriends className={classesToolbar.icones} size="20px"/></ListItemIcon>
              <ListItemText primary="Clientes" />
            </ListItem>
            <ListItem button onClick={() => history.push('/dispositivos')}>
              <ListItemIcon><FaVideo className={classesToolbar.icones} size="20px"/></ListItemIcon>
              <ListItemText primary="Dispositivos" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><FaClipboardList className={classesToolbar.icones} size="20px"/></ListItemIcon>
              <ListItemText primary="Relatórios" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><FaHandHoldingUsd className={classesToolbar.icones} size="20px"/></ListItemIcon>
              <ListItemText primary="Caixa" />
            </ListItem>
            <ListItem button onClick={handleOpenSettings}>
              <ListItemIcon>
                <FaCog className={classesToolbar.icones} size="20px"/>
              </ListItemIcon>
              <ListItemText primary="Gerenciamento" />
              {openCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText  primary="Câmeras" />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => history.push('/usuarios')}>
                  <ListItemText  primary="Usuários" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText  primary="Grupos" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText  primary="Níveis de Permissão" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText  primary="Plataforma" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText  primary="Financeiro" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText  primary="Leitura de Placa" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText  primary="Câmeras de Terceiros" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText  primary="Logs" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText  primary="Notificação" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Kit de Marketing" />
                </ListItem>
              </List>
            </Collapse>
          </MenuList>
        </Drawer>
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {props.children}
      </main>
    </>
  )
}

export default MenuPrincipal;