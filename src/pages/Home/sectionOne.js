import { Button } from "@material-ui/core";

export default function FirstSection() {
    return (
        <div className="center">
            <img alt="Frodo Logo" src="/static/img/logosNew/nobg-text.svg" className="logo-main"/>
            <BotStatus></BotStatus>
        </div>
    );
};


function BotStatus() {
    function onStatusError(e) {
        e.target.src = '/static/img/status.svg';
    };
    function onServersError(e) {
        e.target.src = '/static/img/servers.svg';
    };
    function inviteClick(ev) {
        ev.preventDefault();
        window.open('https://invite.frodo.fun/', '', 'width=500, height=700');
    };

    return (
        <div className="frodoStats">
            <div><Button href="https://invite.frodo.fun" variant="contained" onClick={inviteClick} color="primary" style={{fontSize: 'large', textAlign: 'center'}}>Invite Me!</Button></div>
            <br/>
            <img className="frodoStats" src="https://top.gg/api/widget/status/734746193082581084.svg?noavatar=true" onError={onStatusError} alt="Frodo's status"/>
            <br/>
            <img className="frodoStats" src="https://top.gg/api/widget/servers/734746193082581084.svg?noavatar=true" onError={onServersError} alt="Frodo's server count"/>
        </div>
    );
};