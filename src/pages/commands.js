import { List, ListItem, ListItemText, Typography, Collapse, Button } from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";
import React from "react";
import Command from "./commands/command";
import Section from "./Home/Section";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CommandSyntax from "./commands/syntax";
import CommandPopup from "./commands/commandsPopup";

export default class Commands extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            categoriesOpen: false,
            categoriesFetched: false,
            categories: []
        };
        document.querySelectorAll('a').forEach((el) => {
            el.addEventListener('click', (ev) => {
                if (ev.target?.href.incudes('/commands#')) {
                    setTimeout(() => {
                        document.getElementById(el.href.split('#')[1])?.scrollIntoView();
                    }, 1000);
                };
            });
        });
    };

    componentDidMount() {
        const hash = window.location.hash;
        document.getElementById(hash.replace('#', ''))?.scrollIntoView();
    };
    click() {
        this.setState({
            open: true
        });
    };
    handleClose() {
        this.setState({
            open: false
        });
    };
    categoriesClick() {
        let open = this.state.categoriesOpen;
        this.setState({
            categoriesOpen: !open
        });
        if (!this.state.categoriesFetched) this.collectCommands();
    };
    async collectCommands() {
        try {
            const categories = await (await fetch('https://opentdb.com/api_category.php')).json();
            this.setState({
                categoriesFetched: true,
                categories: categories.trivia_categories
            });
            document.getElementById('triviaSyntax').innerHTML = this.triviaSyntax;
        }
        catch(err) {

        };
    };
    render() {
        return (
            <>
                <Section nonResponsiveCommands>
                    <div className="center">
                        <Button onClick={this.click.bind(this)}><h2>Frodo's commands <ArrowDropDownIcon/></h2></Button>
                        <CommandPopup open={this.state.open} handleClose={this.handleClose.bind(this)}/>
                    </div>
                    <div onClick={() => document.getElementById('akinator').scrollIntoView()} className="arrowAnimated" style={{position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', transition: 'bottom 0.3s ease-in', cursor: 'pointer'}}>
                        <ArrowDownward/>
                    </div>
                </Section>
                <Command id="akinator" command="one">
                    <div>
                        <Typography variant="h6"><b>Akinator</b></Typography>
                    </div>
                    <div>
                        <img alt="" src="/logo192.png"/>
                    </div>
                </Command>
                <Command id="anagrams" command="two">
                    <div>
                        <img alt="" src="/logo192.png"/>
                    </div>
                    <div>
                        <Typography variant="h6"><b>Anagrams</b></Typography>
                    </div>
                </Command>
                <Command id="connect%20four" command="three">
                    <div>
                        <Typography variant="h6"><b>Connect Four</b></Typography>
                    </div>
                    <div>
                        <img alt="" src="/logo192.png"/>
                    </div>
                </Command>
                <Command id="hangman" command="four">
                    <div>
                        <img alt="" src="/logo192.png"/>
                    </div>
                    <div>
                        <Typography variant="h6"><b>Hangman</b></Typography>
                    </div>
                </Command>
                <Command id="rock%20paper%20scissors" command="five">
                    <div>
                        <Typography variant="h6"><b>Rock Paper Scissors</b></Typography>
                    </div>
                    <div>
                        <img alt="" src="/logo192.png"/>
                    </div>
                </Command>
                <Command id="trivia" command="six">
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/trivia.png"/>
                    </div>
                    <div>
                        <Typography variant="h6"><b>Trivia</b></Typography>
                        <p>Trivia is a fun simple game where you get given a question. Trivia features multiple difficulties and categories. A full list of categories can be viewed <Button onClick={this.categoriesClick.bind(this)} style={{padding: 0}}>here</Button>.</p>
                        <Collapse in={this.state.categoriesOpen} timeout="auto" unmountOnExit>
                            {this.state.categoriesFetched ? (
                                <>
                                    <List component="nav" style={{padding: 0, display: 'inline-block', float: 'left', width: '50%', textAlign: 'center'}} dense={true}>
                                        {this.state.categories.map((category, index) => {
                                            if (index % 2 === 0) {
                                                return (
                                                    <>
                                                        <ListItem style={{textAlign: 'center'}} button>
                                                            <ListItemText primary={category.name}/>
                                                        </ListItem>
                                                    </>
                                                );
                                            };
                                            return '';
                                        })}
                                    </List>
                                    <List component="nav" style={{padding: 0, display: 'inline-block', float: 'left', width: '50%', textAlign: 'center'}} dense={true}>
                                        {this.state.categories.map((category, index) => {
                                            if (index % 2 === 1) {
                                                return (
                                                    <>
                                                        <ListItem style={{textAlign: 'center'}} button>
                                                            <ListItemText primary={category.name}/>
                                                        </ListItem>
                                                    </>
                                                );
                                            };
                                            return '';
                                        })}
                                    </List>
                                </>
                            ) : (
                                <>
                                    <List component="nav" style={{padding: 0}}>
                                        <ListItem>
                                            <div style={{width: '100%'}}>
                                                <div style={{textAlign: 'center'}}>
                                                    <img src="/static/img/loading.svg" alt="" style={{width: '25%'}}/>
                                                </div>
                                            </div>
                                        </ListItem>
                                    </List>
                                </>
                            )}
                        </Collapse>
                        <p>
                            Trivia works by using an api at <a href="https://opentdb.com/">https://opentdb.com/</a>
                        </p>
                        <CommandSyntax
                            onClick={this.collectCommands.bind(this)}
                            command={{
                                name: 'trivia',
                                description: (
                                    <>
                                        Trivia takes two commands, Difficulty and Category. It can be used multiple ways: 
                                        <div className="commandsCode">
                                            <code>/trivia</code> - Generates a trivia question from a random difficulty and random category<br/>
                                            <code>/trivia &#60;difficulty&#62;</code> - Generates a trivia question from a selected difficulty and random category<br/>
                                            <code>/trivia &#60;difficulty&#62; &#60;category&#62;</code> - Generates a trivia question from a selected difficulty and selected category
                                        </div>
                                    </>
                                )
                            }} args={[
                                {
                                    name: '<difficulty>',
                                    description: (
                                        <>
                                            Pick a difficulty for your trivia question. The options of difficulties are:
                                            <div className="commandsCode">
                                                <code>Any</code> - Generates a question with a random difficulty<br/>
                                                <code>Easy</code><br/>
                                                <code>Medium</code><br/>
                                                <code>Hard</code>
                                            </div>
                                        </>
                                )},
                                {
                                    name: '<category>',
                                    description: (
                                        <>
                                            Pick a category for your trivia question. The options of the categories are:
                                            <div className="commandsCode">
                                                {this.state.categoriesFetched ? (
                                                    this.state.categories.map((category, index) => (
                                                        <>
                                                            {index !== 0 ? <br/> : ''}
                                                            <code>{category.name}</code>
                                                        </>
                                                    ))
                                                ) : (
                                                    <img style={{marginLeft: '50%', transform: 'translateX(-50%)'}} alt="" src="/static/img/loading.svg"/>
                                                )}
                                            </div>
                                        </>
                                    )}
                        ]}/>
                    </div>
                </Command>
                <Command id="tic%20tac%20toe" command="seven">
                    <div>
                        <Typography variant="h6"><b>Tic Tac Toe</b></Typography>
                    </div>
                    <div>
                        <img alt="" src="/logo192.png"/>
                    </div>
                </Command>
                <Command id="warewolves" command="eight">
                    <div>
                        <img alt="" src="/logo192.png"/>
                    </div>
                    <div>
                        <Typography variant="h6"><b>Warewolves</b></Typography>
                    </div>
                </Command>
                <Command id="fact" command="nine">
                    <div>
                        <Typography variant="h6"><b>Fact</b></Typography>
                    </div>
                    <div>
                        <img alt="" src="/logo192.png"/>
                    </div>
                </Command>
                <Command id="fortune" command="ten">
                    <div>
                        <img alt="" src="/logo192.png"/>
                    </div>
                    <div>
                        <Typography variant="h6"><b>Fortune</b></Typography>
                    </div>
                </Command>
                <Command id="insult" command="eleven">
                    <div>
                        <Typography variant="h6"><b>Insult</b></Typography>
                    </div>
                    <div>
                        <img alt="" src="/logo192.png"/>
                    </div>
                </Command>
                <Command id="joke" command="twelve">
                    <div>
                        <img alt="" src="/logo192.png"/>
                    </div>
                    <div>
                        <Typography variant="h6"><b>Joke</b></Typography>
                    </div>
                </Command>
            </>
        );
    };
};