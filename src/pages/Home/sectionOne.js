export default function FirstSection() {
    return (
        <div className="center">
            <img alt="Frodo Logo" src="/static/img/logosNew/nobg-text.svg" className="logo-main"></img>
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

    return (
        <div className="frodoStats">
            <img className="frodoStats" src="https://top.gg/api/widget/status/734746193082581084.svg?noavatar=true" onError={onStatusError} alt="Frodo's status"></img>
            <br/>
            <img className="frodoStats" src="https://top.gg/api/widget/servers/734746193082581084.svg?noavatar=true" onError={onServersError} alt="Frodo's server count"></img>
        </div>
    );
};