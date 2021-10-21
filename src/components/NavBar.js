import { AppBar, makeStyles, Toolbar, Typography, Button, Menu, MenuItem, MenuList, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MemoryIcon from '@material-ui/icons/Memory';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LeaderboardIcon from '@material-ui/icons/TableChart';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import { useState } from 'react';
import HideOnSroll from './HideOnScroll';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      '& a': {
        textDecoration: 'none'
      }
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

export default function NavBar() {
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
        window.open('https://invite.frodo.fun/', '', 'width=500, height=700');
    };

    function drawerItemClick() {
        setMenuOpen(false);
    };
    
    if (!useMediaQuery('(max-width: 959px)')) {
        return (
            <HideOnSroll>
                <AppBar className={classes.root} color="transparent" position="fixed" style={{ background: 'transparent', boxShadow: 'none', color: 'black'}}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title} component={Link} to="/">
                            <Button style={{fontSize: 'x-large'}}><b>Frodo</b></Button>
                        </Typography>
                        <Typography variant="h6" className={classes.option}>
                            <Button onClick={commandsPress}>Commands <ArrowDropDownIcon/></Button>
                            <Menu keepMounted anchorEl={anchorEl} open={menuOpen} onClose={menuClose} style={{width: '100%'}}>
                                <MenuList>
                                    <Typography className={classes.menulist}>Game Commands</Typography>
                                    {['Akinator', 'Anagrams', 'Connect Four', 'Hangman', 'Rock Paper Scissors', 'Trivia', 'Tic Tac Toe', 'Warewolves'].map((game) => (
                                        <MenuItem key={game} onClick={drawerItemClick} component={Link} to={`/commands#${game.toLowerCase()}`}>
                                            {game}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                                <Divider/>
                                <MenuList>
                                    <Typography className={classes.menulist}>Text Commands</Typography>
                                    {['Fact', 'Fortune', 'Insult', 'Joke'].map((game) => (
                                        <MenuItem key={game} onClick={drawerItemClick} component={Link} to={`/commands#${game.toLowerCase()}`}>
                                            {game}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                        </Typography>
                        <Typography variant="h6" className={classes.option} component={Link} to="/leaderboard">
                            <Button>Leaderboard</Button>
                        </Typography>
                        <Typography variant="h6" className={classes.option} component={Link} to="/feedback">
                            <Button>Feedback/Report Problem</Button>
                        </Typography>
                        <Button href="https://invite.frodo.fun" onClick={inviteClick} className={classes.inviteBtn} variant="outlined" color="primary">
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
                    <AppBar className={classes.root} color="transparent" position="fixed" style={{ background: 'transparent', boxShadow: 'none', color: 'black'}}>
                        <Toolbar>
                            <IconButton onClick={commandsPress} edge="start" color="inherit" aria-label="menu">
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title} component={Link} to="/">
                                <Button style={{fontSize: 'x-large'}}><b>Frodo</b></Button>
                            </Typography>
                            <Button  href="https://invite.frodo.fun" onClick={inviteClick} className={classes.inviteBtn} variant="outlined" color="primary">
                                Invite Me!
                            </Button>
                        </Toolbar>
                    </AppBar>
                </HideOnSroll>
                <Drawer anchor="left" open={menuOpen} onClose={menuClose}>
                    <div style={{width: '80vw'}}>
                        <List>
                            <ListItem key={0} onClick={drawerItemClick} button component={Link} to="/">
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItem>
                            <ListItem key={1} button onClick={commandsClick}>
                                <ListItemIcon>
                                    <MemoryIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Commands"/>
                                {commandsCollapse ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse key={2} in={commandsCollapse} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <Divider/>
                                    <Typography className={classes.menulist} style={{paddingTop: 10}}>Game Commads</Typography>
                                    {['Akinator', 'Anagrams', 'Connect Four', 'Hangman', 'Rock Paper Scissors', 'Trivia', 'Tic Tac Toe', 'Othello'].map((game, index) => (
                                        <ListItem key={index} onClick={drawerItemClick} button component={Link} to={`/commands#${game.toLowerCase()}`} className={classes.subItem}>
                                            <ListItemText primary={game}/>
                                        </ListItem>
                                    ))}
                                    <Divider/>
                                    <Typography className={classes.menulist} style={{paddingTop: 10}}>Game Commads</Typography>
                                    {['Fact', 'Fortune', 'Insult', 'Joke'].map((game, index) => (
                                        <ListItem key={index + 8} onClick={drawerItemClick} button component={Link} to={`/commands#${game.toLowerCase()}`} className={classes.subItem}>
                                            <ListItemText primary={game}/>
                                        </ListItem>
                                    ))}
                                    <Divider/>
                                </List>
                            </Collapse>
                            <ListItem key={3} onClick={drawerItemClick} button  component={Link} to="/leaderboard">
                                <ListItemIcon>
                                    <LeaderboardIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Leaderboard"/>
                            </ListItem>
                            <ListItem key={4} onClick={drawerItemClick} button component={Link} to="/feedback">
                                <ListItemIcon>
                                    <ReportProblemIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Feedback/Report Problem"/>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>
        );
    };
};