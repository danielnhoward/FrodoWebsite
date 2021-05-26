import { AppBar, makeStyles, Toolbar, Typography, Button, Menu, MenuItem, MenuList, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MemoryIcon from '@material-ui/icons/Memory';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { useState } from 'react';
import HideOnSroll from './HideOnScroll';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: theme.spacing(2),
    },
    option: {
        textAlign: 'left',
        float: 'left',
        marginRight: theme.spacing(1)
    },
    menulist: {
        textAlign: 'center',
        color: 'grey'
    },
    inviteBtn: {
        marginRight: '10px',
        marginLeft: 'auto'
    },
    subItem: {
        textAlign: 'center'
    }
}));

export default function NavBar(props) {
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState();
    const [commandsCollapse, setCommandsCollapse] = useState(false);
    function commandsPress(ev) {
        setAnchorEl(ev.currentTarget);
        setMenuOpen(true);
    };
    function menuClose() {
        setMenuOpen(false);
    };
    function commandsClick() {
        setCommandsCollapse(!commandsCollapse);
    };

    function inviteClick(ev) {
        ev.preventDefault();
        window.open('https://top.gg/bot/734746193082581084/invite/', '', 'width=500, height=700');
    };
    
    if (!useMediaQuery('(max-width: 959px)')) {
        return (
            <HideOnSroll>
                <AppBar color="transparent" position="fixed" style={{ background: 'transparent', boxShadow: 'none', color: 'black'}}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Button style={{fontSize: 'x-large'}}><b>Frodo</b></Button>
                        </Typography>
                        <Typography variant="h6" className={classes.option}>
                            <Button onClick={commandsPress}>Commands <ArrowDropDownIcon/></Button>
                            <Menu keepMounted anchorEl={anchorEl} open={menuOpen} onClose={menuClose} style={{width: '100%'}}>
                                <MenuList>
                                    <Typography className={classes.menulist}>Game Commands</Typography>
                                    <MenuItem>Akinator</MenuItem>
                                    <MenuItem>Anagrams</MenuItem>
                                    <MenuItem>Connect Four</MenuItem>
                                    <MenuItem>Hangman</MenuItem>
                                    <MenuItem>Rock Paper Scissors</MenuItem>
                                    <MenuItem>Trivia</MenuItem>
                                    <MenuItem>Tic Tac Toe</MenuItem>
                                    <MenuItem>Warewolves</MenuItem>
                                </MenuList>
                                <MenuList>
                                    <Typography className={classes.menulist}>Text Commands</Typography>
                                    <MenuItem>Fact</MenuItem>
                                    <MenuItem>Fortune</MenuItem>
                                    <MenuItem>Insult</MenuItem>
                                    <MenuItem>Joke</MenuItem>
                                </MenuList>
                            </Menu>
                        </Typography>
                        <Typography variant="h6" className={classes.option}>
                            <Button>Announcements</Button>
                        </Typography>
                        <Typography variant="h6" className={classes.option}>
                            <Button>Feedback/Report Problem</Button>
                        </Typography>
                        <Button href="https://top.gg/bot/734746193082581084/invite/" onClick={inviteClick} className={classes.inviteBtn} variant="outlined" color="primary">
                            Invite Me!
                        </Button>
                    </Toolbar>
                </AppBar>
            </HideOnSroll>
        );
    }
    else {
        return (
            <div>
                <HideOnSroll>
                    <AppBar color="transparent" position="fixed" style={{ background: 'transparent', boxShadow: 'none', color: 'black'}}>
                        <Toolbar>
                            <IconButton onClick={commandsPress} edge="start" color="inherit" aria-label="menu">
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                <Button style={{fontSize: 'x-large'}}><b>Frodo</b></Button>
                            </Typography>
                            <Button  href="https://top.gg/bot/734746193082581084/invite/" onClick={inviteClick} className={classes.inviteBtn} variant="outlined" color="primary">
                                Invite Me!
                            </Button>
                        </Toolbar>
                    </AppBar>
                </HideOnSroll>
                <Drawer anchor="left" open={menuOpen} onClose={menuClose}>
                    <div style={{width: '80vw'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                        <ListItem button onClick={commandsClick}>
                            <ListItemIcon>
                                <MemoryIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Commands"/>
                            {commandsCollapse ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={commandsCollapse} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <Divider/>
                                <Typography className={classes.menulist} style={{paddingTop: 10}}>Game Commads</Typography>
                                {['Akinator', 'Anagrams', 'Connect Four', 'Hangman', 'Rock Paper Scissors', 'Trivia', 'Tic Tac Toe', 'Warewolves'].map((game) => (
                                    <ListItem button className={classes.subItem}>
                                        <ListItemText primary={game}/>
                                    </ListItem>
                                ))}
                                <Divider/>
                                <Typography className={classes.menulist} style={{paddingTop: 10}}>Game Commads</Typography>
                                {['Fact', 'Fortune', 'Insult', 'Joke'].map((game) => (
                                    <ListItem button className={classes.subItem}>
                                        <ListItemText primary={game}/>
                                    </ListItem>
                                ))}
                                <Divider/>
                            </List>
                        </Collapse>
                        <ListItem button>
                            <ListItemIcon>
                                <AnnouncementIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Announcements"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <ReportProblemIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Feedback/Report Problem"/>
                        </ListItem>
                    </div>
                </Drawer>
            </div>
        );
    };
};