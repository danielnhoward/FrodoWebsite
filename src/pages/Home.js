import FirstSection from "./Home/sectionOne.js";
import Section from "./Home/Section.js";

export default function Home() {
    return (
        <div>
            <Section nonResponsive>
                <FirstSection></FirstSection>
            </Section>
            <Section>
                <div>
                    <b style={{fontSize: 'x-large'}}>Who is Frodo?</b>
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
                    <img alt="Frodo preview" width="400" src="/static/img/frodoProfile.svg" className="frodoPreview"/>
                </div>
            </Section>
            <Section>
                <div className="ppContainer" style={{position: 'relative', textAlign: 'center'}}>
                    <img alt="Toffee1347" src="/static/img/Toffee1347.jpg" className="pp" style={{top: '10px', left: '10px'}}/>
                    <img alt="ZigZagZat" src="/static/img/ZigZagZat.jpg" className="pp" style={{bottom: '10px', right: '10px'}}/>
                </div>
                <div>
                    <b style={{fontSize: 'x-large'}}>Who made Frodo?</b>
                    <p>
                        Frodo was developed by two junior developers from the UK.
                    </p>
                </div>
            </Section>
        </div>
    );
};