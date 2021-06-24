import { Grid, useMediaQuery } from "@material-ui/core";

export default function Command(props) {
    const center = {textAlign: 'center'};
    const left = {textAlign: 'left'};
    const right = {textAlign: 'right'};
    const numberMap = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'eleven': 11,
        'twelve': 12,
    }
    return (
        <div id={props.id}>
            <div className={`command command${props.command}`}>
                <Grid container spacing={5}>
                    <Grid item xs={false} sm={false} md={2}></Grid>
                    {useMediaQuery('(max-width: 959px)') ? (
                        <>
                            <Grid style={center} item sm={12} xs={12} md={4}>
                                    {props.children[0]}
                            </Grid>
                            <Grid style={center} item sm={12} xs={12} md={4}>
                                {props.children[1]}
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid style={right} item sm={12} xs={12} md={4}>
                                <div style={{textAlign: 'center'}}>
                                    {props.children[numberMap[props.command] % 2]}
                                </div>
                            </Grid>
                            <Grid style={left} item sm={12} xs={12} md={4}>
                                <div style={{textAlign: 'center'}}>
                                    {props.children[(numberMap[props.command] + 1) % 2]}
                                </div>
                            </Grid>
                        </>
                    )}
                    <Grid item xs={false} sm={false} md={2}></Grid>
                </Grid>
            </div>
        </div>
    );
};