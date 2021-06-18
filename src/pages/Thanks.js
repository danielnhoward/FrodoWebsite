import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Section from "./Home/Section";

export default function Thanks() {
    return (
        <Section nonResponsive>
            <div className="center" style={{textAlign: 'center'}}>
                <img alt="Frodo Logo" src="/static/img/frodo-nobg.svg" className="logo-main"/>
                <Typography variant="h2">
                    Thanks for Inviting Frodo to your server!
                </Typography>
                <Typography variant="h6">
                    Check out some of Frodos commands <Link to="/commands">here</Link> and click <a href="https://invite.frodo.fun">here</a> to invite Frodo to another!
                </Typography>
            </div>
        </Section>
    );
};