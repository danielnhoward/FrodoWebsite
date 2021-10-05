import { Avatar, List, ListItem, Typography, Divider, ListItemAvatar, ListItemText, AppBar, Container, Toolbar } from "@material-ui/core";
import React from "react";
import Section from "./Home/Section";
import { Link } from 'react-router-dom';

export default class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            list: <></>,
            error: false,
        };
        this.leaderboard = [];

        this.interval = setInterval(() => {
            if (this.state.error) return clearInterval(this.interval);
            this.setText();
        }, 30000);
    }

    componentDidMount() {
        this.setText();
    }

    async fetchLeaderboard() {
        try {
            const leaderboard = await (await fetch('./leaderboard.json')).json();
            this.leaderboard = leaderboard;
            this.setState({
                loading: false,
                list: this.state.list,
                error: false,
            });
            return;
        } catch(err) {
            this.setState({
                loading: true,
                list: this.state.list,
                error: true,
            });
        }
    }

    imgError(e) {
        e.target.src = 'https://cdn.discordapp.com/embed/avatars/0.png';
    }

    async setText() {
        await this.fetchLeaderboard();
        this.setState({
            loading: this.state.loading,
            list: (
                <div className="leaderboardList">
                    {this.leaderboard.length !== 0 ? (
                        this.leaderboard.map(([userId, user], index) => {
                            if (index >= 10) return <></>;
                            return (
                                <div key={userId}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar src={user.avatar ? user.avatar : 'https://cdn.discordapp.com/embed/avatars/0.png'}>
                                                <Avatar src="https://cdn.discordapp.com/embed/avatars/0.png"/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={user.username} secondary={`Current Score: ${user.score}`}/>
                                        {index <= 2 ? <img alt="trophy" src={`/static/img/${index + 1}.png`}/> : <Typography style={{paddingRight: '13px'}} variant="h6"><b>#{index + 1}</b></Typography>}
                                    </ListItem>
                                    <Divider/>
                                </div>
                            );
                        })
                    ) : (
                        <Typography variant="h6">Looks like no one is on the leaderboard right now, be the first by winning a Trivia game</Typography>
                    )
                }
                </div>
            ),
            error: this.state.error,
        });
    }

    render() {
        return (
            <Section nonResponsiveLeaderboard>
                {
                    this.state.loading ? (
                        this.state.error ? (
                            <div className="center">
                                <Typography color="error" variant="h6" style={{textAlign: 'center'}}>Hm, looks like there has been an error when trying to fetch the leaderboards, please try again later</Typography>
                            </div>
                        ) : (
                            <div className="center">
                                <img src="/static/img/loading.svg" alt="Loading..."/>
                            </div>
                        )
                    ) : (
                        <div style={{textAlign: 'center', paddingTop: '50px'}}>
                            <Typography variant="h5"><b>Frodo Leaderboard</b></Typography>
                            <Typography variant="h6">Trivia</Typography>
                            <List>
                                {this.state.list}
                            </List>
                        </div>
                    )
                }
                <AppBar position="static" color="primary" style={{bottom: '0px', position: 'fixed', zIndex: 50, textAlign: 'center'}}>
                    <Container maxWidth="md">
                        <Toolbar>
                            <Typography variant="body1" color="inherit">
                                This feature is in Beta and may encounter some major bugs so please be patient as we work on fixing them. Please report any bugs on <Link to="/feedback">https://help.frodo.fun</Link>
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Section>
        );
    }
}