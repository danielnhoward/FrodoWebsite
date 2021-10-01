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
    };

    componentDidMount() {
        const hash = window.location.hash;
        setTimeout(() => document.getElementById(hash.replace('#', ''))?.scrollIntoView(), 1000);
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
                    <div style={{textAlign: 'center'}}>
                        <Typography variant="h6"><b>Akinator</b></Typography>
                        <p>Uses the powerfull <a href="https://en.akinator.com" target="_blank" rel="noreferrer">Akinator AI</a> to guess anyone you are thinking of, all from within the discord chat using simple reactions!</p>
                        <Typography variant="h6"><b>What is Akinator?</b></Typography>
                        <p>Akinator is a game where you get asked a set of questions and the AI will try and guess what character you are thinking of!</p>
                        
                        <CommandSyntax
                            command={{
                                name: 'akinator',
                                description: (
                                    <>
                                    Akinator takes no arguments, just run the command and the game will start
                                    </>
                                )
                            }}
                            args={[]}
                        />
                    </div>
                    <div>
                        <img className="commandPicture" alt="" style={{width: '60%'}} src="/static/img/commands/akinator.png"/>
                    </div>
                </Command>
                <Command id="anagrams" command="two">
                    <div>
                        <Typography variant="h6"><b>Anagrams</b></Typography>
                        <p>Anagrams lets you play the classic countdown game as seen on TV! Once the command has been run, you must pick nine letters (vowels and consonants). Then you have 30 seconds to think of the longest word you can make up out of those letters. After 30 seconds, enter the longest word you have and check to see how well you did!</p>
                        <CommandSyntax
                            command={{
                                name: 'anagrams',
                                description: (
                                    <>
                                        Anagrams takes no arguments, just run the command and the game will start
                                    </>
                                )
                            }}
                            args={[]}
                        />
                    </div>
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/anagrams.png"/>
                    </div>
                </Command>
                <Command id="connect%20four" command="three">
                    <div style={{textAlign: 'center'}}>
                        <Typography variant="h6"><b>Connect Four</b></Typography>
                        <p>Play connect four against your friends directly on discord using reactions! We assume you know how to play but just incase the rules can be found here: <a href="https://www.gamesver.com/the-rules-of-connect-4-according-to-m-bradley-hasbro/" target="_blank" rel="noreferrer">gamesver.com/the-rules-of-connect-4-according-to-m-bradley-hasbro/</a></p>

                        <CommandSyntax
                            command={{
                                name: 'connectfour',
                                description: (
                                    <>
                                        Connect four only takes one argument that is the other player that you would like to play with
                                    </>
                                )
                            }} args={[
                                {
                                    name: '<playertwo>',
                                    description: (
                                        <>
                                            Selects the other player to play with, can't be a bot or you
                                        </>
                                )},
                            ]}/>
                    </div>
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/ConnectFour.png"/>
                    </div>
                </Command>
                <Command id="hangman" command="four">
                    <div>
                        <Typography variant="h6"><b>Hangman</b></Typography>
                        <p>Play the simple game with your friends!</p>
                        <Typography variant="h6"><b>How to play</b></Typography>
                        <p>
                            <ol>
                                <li>Run the command and select the user that you would like to be guessing your word</li>
                                <li>Look at your dms, you should have a message from Frodo and reply to the message with the word you would like to select (any spaces entered will be removed)</li>
                                <li>The person you selected can start entering in letters to guess your work</li>
                                <li>If you would like to stop playing, click the reaction on the message and the game will stop</li>
                            </ol>
                        </p>

                        <CommandSyntax
                            command={{
                                name: 'hangman',
                                description: (
                                    <>
                                        Hangman takes one argument that is the user that you would like to be guessing your word
                                    </>
                                )
                            }} args={[
                                {
                                    name: '<playertwo>',
                                    description: (
                                        <>
                                            Selects the other player to play with, can't be a bot or you
                                        </>
                                )},
                            ]}/>
                    </div>
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/Hangman.png"/>
                    </div>
                </Command>
                <Command id="rock%20paper%20scissors" command="five">
                    <div>
                        <Typography variant="h6"><b>Rock Paper Scissors</b></Typography>
                        <p>
                            Doesn't need much of a description! Just run the command and look at both of your dms, and simply react what you would like to do
                        </p>
                        
                        <CommandSyntax
                            command={{
                                name: 'rps',
                                description: (
                                    <>
                                        Rps takes one argument that is the user that you would to play Rock Paper Scissors with
                                    </>
                                )
                            }} args={[
                                {
                                    name: '<playertwo>',
                                    description: (
                                        <>
                                            Selects the other player to play with, can't be a bot or you
                                        </>
                                )},
                            ]}/>
                    </div>
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/rps.png"/>
                    </div>
                </Command>
                <Command id="trivia" command="six">
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
                                                    <ListItem key={index} style={{textAlign: 'center'}} button>
                                                        <ListItemText primary={category.name}/>
                                                    </ListItem>
                                                );
                                            };
                                            return '';
                                        })}
                                    </List>
                                    <List component="nav" style={{padding: 0, display: 'inline-block', float: 'left', width: '50%', textAlign: 'center'}} dense={true}>
                                        {this.state.categories.map((category, index) => {
                                            if (index % 2 === 1) {
                                                return (
                                                    <ListItem key={index} style={{textAlign: 'center'}} button>
                                                        <ListItemText primary={category.name}/>
                                                    </ListItem>
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
                            Trivia works by using a powerfull api at <a href="https://opentdb.com/">https://opentdb.com/</a>
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
                                            <code>/trivia &#60;category&#62;</code> - Generates a trivia question from a selected category and random difficulty<br/>
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
                                                        <span key={index}>
                                                            {index !== 0 ? <br/> : ''}
                                                            <code>{category.name}</code>
                                                        </span>
                                                    ))
                                                ) : (
                                                    <img style={{marginLeft: '50%', transform: 'translateX(-50%)'}} alt="" src="/static/img/loading.svg"/>
                                                )}
                                            </div>
                                        </>
                                    )}
                        ]}/>
                    </div>
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/trivia.png"/>
                    </div>
                </Command>
                <Command id="tic%20tac%20toe" command="seven">
                    <div>
                        <Typography variant="h6"><b>Tic Tac Toe</b></Typography>
                        <p>Simply play Tic Tac Toe with another player using reactions!</p>

                        <CommandSyntax
                            command={{
                                name: 'ttt',
                                description: (
                                    <>
                                        Ttt takes one argument that is the user that you would to play Tic Tac Toe with
                                    </>
                                )
                            }} args={[
                                {
                                    name: '<playertwo>',
                                    description: (
                                        <>
                                            Selects the other player to play with, can't be a bot or you
                                        </>
                                )},
                            ]}/>
                    </div>
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/ttt.png"/>
                    </div>
                </Command>
                <Command id="othello" command="eight">
                    <div>
                        <Typography variant="h6"><b>Othello</b></Typography>
                        <p>
                            Play Othello inside Discord! Frodo's othello also has helpful features that can tell you your possible options for you to use
                        </p>
                        <Typography variant="h6"><b>How to play Othello</b></Typography>
                        <p>
                            A very useful guide to othello can be found on WikiHow here: <a href="https://www.wikihow.com/Play-Othello" target="_blank" rel="noreferrer">https://www.wikihow.com/Play-Othello</a>
                        </p>

                        <CommandSyntax
                            command={{
                                name: 'othello',
                                description: (
                                    <>
                                        Othello takes two arguments, playertwo and showmoves
                                    </>
                                )
                            }} args={[
                                {
                                    name: '<playertwo>',
                                    description: (
                                        <>
                                            Selects the other player to play othello with, can't be a bot or you
                                        </>
                                )},
                                {
                                    name: '<showmoves>',
                                    description: (
                                        <>
                                            If set to true, while the game is running, both players will be able to see moves that they can do. This feature is intended for non-experienced players
                                        </>
                                    )}
                            ]}/>
                    </div>
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/Othello.png"/>
                    </div>
                </Command>
                <Command id="fact" command="nine">
                    <div>
                        <Typography variant="h6"><b>Fact</b></Typography>
                    </div>
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/fact.png"/>
                    </div>
                </Command>
                <Command id="fortune" command="ten">
                    <div>
                        <Typography variant="h6"><b>Fortune</b></Typography>
                    </div>
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/fortune.png"/>
                    </div>
                </Command>
                <Command id="insult" command="eleven">
                    <div>
                        <Typography variant="h6"><b>Insult</b></Typography>
                    </div>
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/insult.png"/>
                    </div>
                </Command>
                <Command id="joke" command="twelve">
                    <div>
                        <Typography variant="h6"><b>Joke</b></Typography>
                    </div>
                    <div>
                        <img className="commandPicture" alt="" src="/static/img/commands/joke.png"/>
                    </div>
                </Command>
            </>
        );
    };
};