import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'inline'
    },
}));

export default function NavBar(props) {
    const classes = useStyles();
    return (
        <AppBar title={<img src="/logo192.png" style={{width: '40px', height: '40px'}}/>} position="fixed" style={{ background: 'transparent', boxShadow: 'none', color: 'black'}}>
            <Toolbar>
                <nav>
                    <a href="/">
                        <Typography variant="h6" className={classes.title}>
                            <b>Frodo</b>
                        </Typography>
                    </a>
                </nav>
            </Toolbar>
        </AppBar>
    )
};