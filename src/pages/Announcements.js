import React from "react";
import Section from "./Home/Section";
import AnnouncementEl from "./announcements/AnnouncementsEl"

export default class Announcements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: null
        };
    };
    async componentDidMount() {
        const json = await (await fetch('/announcements.json')).json();
            
        this.setState({
            loaded: true,
            data: json
        });
    };
    render() {
        if (!this.state.loaded) {
            return (
                <Section nonResponsive>
                    <div className="center">
                        <img src="/static/img/loading.gif" alt="Loading"/>
                    </div>
                </Section>
            );   
        }
        else {
            return (
                <Section one>
                    {
                        this.state.data.map((announcement, id) => (
                            <AnnouncementEl title={announcement.title} timestamp={announcement.timestamp} key={id}/>
                        ))
                    }
                </Section>
            );   
        };
    };
};