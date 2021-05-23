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
            <Grid container spacing={5}>
                <Grid item xs={0} sm={0} lg={2}></Grid>
                <Grid className={classes.part} item sm={12} xs={12} lg={4}>
                    <part>
                        {props.children[0]}
                    </part>
                </Grid>
                <Grid className={classes.part} item sm={12} xs={12} lg={4}>
                    <part>
                        {props.children[1]}
                    </part>
                </Grid>
                <Grid item xs={0} sm={0} lg={2}></Grid>
            </Grid>
        </section>
    );
};