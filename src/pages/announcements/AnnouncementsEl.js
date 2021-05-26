import { Card, CardContent, Typography } from "@material-ui/core";

export default function AnnouncementEl(props) {
    const time = new Date(props.timestamp);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return (
        <Card style={{minWidth: '100%'}}>
            <CardContent>
                <Typography style={{fontSize: 14}} color="textSecondary" gutterBottom>
                    {time.getHours()}:{time.getMinutes()}, {time.getDate()} {months[time.getMonth()]} {time.getFullYear()}
                </Typography>
                <Typography component="h1">
                    {props.title}
                </Typography>
            </CardContent>
        </Card>
    );
};