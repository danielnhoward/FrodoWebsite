import { Avatar, Card, CardActionArea, CardContent, CardHeader } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function AnnouncementEl(props) {
    const data = props.data;
    const index = props.index;
    const time = new Date(data.timestamp);
    const today = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return (
        <Link to={`/announcements/${index}`}>
            <Card className="cardAnnouncement" style={{width: '100%'}}>
                <CardActionArea >
                    <CardHeader avatar={
                        <Avatar src={data.author}/>
                    }
                    title={data.content.title}
                    subheader={
                        (() => {
                            return (today.getDate() === time.getDate() && today.getMonth() === time.getMonth() && today.getFullYear() === time.getFullYear()) ? `${time.getHours()}:${time.getMinutes()}` : `${time.getDate()} ${months[time.getMonth()]} ${time.getFullYear()}`;
                        })()
                    }/>
                    <CardContent>
                        {data.content.body}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};