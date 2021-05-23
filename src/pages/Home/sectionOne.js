export default function FirstSection() {
    return (
        <div className="center">
            <img alt="Frodo Logo" src="/static/img/frodo-nobg.svg" className="logo-main"></img>
            <h1>Frodo</h1>
            <BotStatus></BotStatus>
        </div>
    );
};


function BotStatus() {
    return (
        <div className="frodoStats">
            <img className="frodoStats" src="https://top.gg/api/widget/status/734746193082581084.svg?noavatar=true" alt="Frodo's status"></img>
            <br/>
            <img className="frodoStats" src="https://top.gg/api/widget/servers/734746193082581084.svg?noavatar=true" alt="Frodo's server count"></img>
        </div>
    );
};