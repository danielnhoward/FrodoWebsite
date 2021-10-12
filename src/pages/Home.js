import FirstSection from "./Home/sectionOne.js";
import Section from "./Home/Section.js";
import { Fade, Slide } from "@material-ui/core";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor-v2";

export default function Home() {
    const sections = [
        useState(true),
        useState(false),
        useState(false),
    ];
    return (
        <div>
            <Section nonResponsive>
                <Slide in={sections[0][0]} direction="up" timeout={1000}>
                    <div>
                        <Fade in={sections[0][0]} timeout={1500}>
                            <div style={{position: 'relative', zIndex: '0', height: '100vh', width: '100vw'}}>
                                <FirstSection></FirstSection>
                                <div style={{position: 'absolute', bottom: '0px', zIndex: '-10', backgroundImage: 'url("/static/img/wave.svg")', backgroundPosition: 'center bottom', width: '100%', height: '100%', backgroundRepeat: 'repeat-x'}}>&nbsp;</div>
                            </div>
                        </Fade>
                    </div>
                </Slide>
            </Section>
            <Slide in={sections[1][0]} direction="up" timeout={1000}>
                <div>
                    <Fade in={sections[1][0]} timeout={1500}>
                        <Section style={{backgroundImage: 'none', backgroundColor: 'white'}}>
                            <div>
                                <VisibilitySensor onChange={(v) => sections[1][1](v || sections[1][0])}>
                                    <b style={{fontSize: 'x-large'}}>Who is Frodo?</b>
                                </VisibilitySensor>
                                <br/>
                                <p>
                                    Frodo is a minigames discord bot that is constantly being developed. It has many fun and polished games and more are coming. Frodo features many games like tic tac toe, connect 4 and trivia!
                                </p>
                                <br/><br/>
                                <b style={{fontSize: 'x-large'}}>Why Frodo?</b>
                                <p>
                                    Frodo has all the games in one simple place, no need to move between different bots, just check out all the wide range of commands that we offer and take your pick!
                                </p>
                            </div>
                            <div>
                                <img alt="Frodo preview" width="300" src="/static/img/frodoProfile-new.svg" className="frodoPreview"/>
                            </div>
                        </Section>
                    </Fade>
                </div>
            </Slide>
            <Slide in={sections[2][0]} direction="up" timeout={1000}>
                <div>
                    <Fade in={sections[2][0]} timeout={1500}>
                        <Section style={{backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'}}>
                            <div className="ppContainer" style={{position: 'relative', textAlign: 'center'}}>
                                <img alt="Toffee1347" src="/static/img/Toffee1347.jpg" className="pp" style={{top: '10px', left: '10px'}}/>
                                <img alt="ZigZagZat" src="/static/img/ZigZagZat.svg" className="pp" style={{bottom: '10px', right: '10px'}}/>
                            </div>
                            <div>
                                <VisibilitySensor onChange={(v) => sections[2][1](v || sections[2][0])}>
                                    <b style={{fontSize: 'x-large'}}>Who made Frodo?</b>
                                </VisibilitySensor>
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
                    </Fade>
                </div>
            </Slide>
        </div>
    );
};