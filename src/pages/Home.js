import FirstSection from "./Home/sectionOne.js";
import Section from "./Home/Section.js";
// import { Card, CardActionArea, CardContent } from "@material-ui/core";

export default function Home() {
    return (
        <div>
            <Section nonResponsive>
                <FirstSection></FirstSection>
            </Section>
            <Section>
                <div>
                    {/* <Card>
                        <CardContent> */}
                            <b style={{fontSize: 'x-large'}}>Who is Frodo?</b>
                            <br/>
                            <p>
                                Frodo is a minigames discord bot that is constantly being developed. It has many fun and polished games and more are coming. Frodo features many games like tic tac toe, connect 4 and trivia!
                            </p>
                        {/* </CardContent>
                    </Card> */}
                    <br/><br/>
                    {/* <Card>
                        <CardContent> */}
                            <b style={{fontSize: 'x-large'}}>Why Frodo?</b>
                            <p>
                                Frodo has all the games in one simple place, no need to move between different bots, just check out all the wide range of commands that we offer and take your pick!
                            </p>
                        {/* </CardContent>
                    </Card> */}
                </div>
                <div>
                    <img alt="Frodo preview" width="400" src="/static/img/frodoProfile.svg" className="frodoPreview"/>
                </div>
            </Section>
            <Section>
                <div className="ppContainer" style={{position: 'relative', textAlign: 'center'}}>
                    <img alt="Toffee1347" src="/static/img/Toffee1347.jpg" className="pp" style={{top: '10px', left: '10px'}}/>
                    <img alt="ZigZagZat" src="/static/img/ZigZagZat.svg" className="pp" style={{bottom: '10px', right: '10px'}}/>
                </div>
                <div>
                    <b style={{fontSize: 'x-large'}}>Who made Frodo?</b>
                    <p>
                        Frodo was developed by Daniel Howard (<a rel="noreferrer" href="https://github.com/Toffee1347" target="_blank">GitHub</a>) and Noah Lavelle (<a rel="noreferrer" href="https://github.com/NoahLavelle" target="_blank">GitHub</a>). We starting making Frodo as a small project and then decided to try and make a bot that people actually use!
                    </p>
                    <br/><br/>
                    <b style={{fontSize: 'x-large'}}>How is Frodo made?</b>
                    <p>
                        Frodo is made with discord-js and is all made through typeScript (code is open source and <a rel="noreferrer" href="https://github.com/NoahLavelle/Frodo" target="_blank">here</a>). This website is made with React-js with the Material-ui component libary (code is open source and <a rel="noreferrer" href="https://github.com/NoahLavelle/FrodoWebsite" target="_blank">here</a>).
                    </p>
                </div>
            </Section>
        </div>
    );
};