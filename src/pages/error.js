import { useState } from "react";
import Section from "./Home/Section";

export default function Error(props) {
    const [page, setPage] = useState(window.location.pathname);
    window.addEventListener('popstate', () => setPage(window.location.pathname));

    return (
        <Section error>
            <div style={{marginTop: 50}}>
                <b>404 Error</b>
                <p>The page: "{page}" couldn't be found. Please check the url is correct or you may have clicked a wrong link.</p>
            </div>
            <div>
                <img src="/static/img/frodo-nobg.svg" alt="" className="frodoPreview"/>
            </div>
        </Section>
    );
};