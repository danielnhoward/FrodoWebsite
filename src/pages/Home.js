import FirstSection from "./Home/SectionOne";
import Section from "./Home/Section";
import SectionTwo from "./Home/SectionTwo";

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
                    <br/>
                    <br/>
                    <b style={{fontSize: 'x-large'}}>Why Frodo?</b>
                    <p>
                        Frodo has all the games in one simple place, no need to move between different bots, just check out all the wide range of commands that we offer and take your pick!
                    </p>
                </div>
                <div>
                    <img alt="Frodo preview" width="400" src="/static/img/frodoProfile.svg" class="frodoPreview"/>
                </div>
            </Section>
        </div>
    );
};