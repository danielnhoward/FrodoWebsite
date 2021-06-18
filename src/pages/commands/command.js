import { Grid, useMediaQuery } from "@material-ui/core";

export default function Command(props) {
    let center = {textAlign: 'center'};
    let left = {textAlign: 'left'};
    let right = {textAlign: 'right'};
    return (
        <div id={props.id}>
            <div className={`command command${props.command}`}>
                <Grid container spacing={5}>
                    <Grid item xs={false} sm={false} md={2}></Grid>
                    <Grid style={useMediaQuery('(max-width: 959px)') ? center : right} item sm={12} xs={12} md={4}>
                        {props.children[0]}
                    </Grid>
                    <Grid style={useMediaQuery('(max-width: 959px)') ? center : left} item sm={12} xs={12} md={4}>
                        {props.children[1]}
                    </Grid>
                    <Grid item xs={false} sm={false} md={2}></Grid>
                </Grid>
            </div>
        </div>
    );
};