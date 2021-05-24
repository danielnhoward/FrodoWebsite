import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    part: {
        textAlign: 'center',
    },
}));

export default function Section(props) {
    const classes = useStyles();

    if (props.nonResponsive) {
        return (
            <section>
                {props.children}
            </section>
        );
    };
    let section = [];
    return (
        <section>
            <Grid style={{width: '100%'}} container spacing={5}>
                <Grid item xs={false} sm={false} md={2}></Grid>
                <Grid className={classes.part} item sm={12} xs={12} md={4}>
                    <part>
                        {props.children[0]}
                    </part>
                </Grid>
                <Grid className={classes.part} item sm={12} xs={12} md={4}>
                    <part>
                        {props.children[1]}
                    </part>
                </Grid>
                <Grid item xs={false} sm={false} md={2}></Grid>
            </Grid>
        </section>
    );
};