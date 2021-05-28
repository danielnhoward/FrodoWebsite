import Section from "./Home/Section";

export default function Error(props) {
    return (
        <Section error>
            <div style={{marginTop: 50}}>
                <b>404 Error</b>
                <p>The page: "{window.location.pathname}" couldn't be found. Please check the url is correct or you may have clicked a wrong link.</p>
            </div>
            <div>
                <img src="/static/img/frodo-nobg.svg" alt="" className="frodoPreview"/>
            </div>
        </Section>
    );
};