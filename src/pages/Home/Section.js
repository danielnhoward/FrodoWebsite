import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    part: {
        textAlign: 'center',
    },
}));

document.documentElement.style.setProperty('--h', `${window.innerHeight}px`);
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--h', `${window.innerHeight}px`);
});

export default function Section(props) {
    const classes = useStyles();

    if (props.nonResponsive) {
        return (
            <section>
                {props.children}
            </section>
        );
    };
    if (props.nonResponsiveCommands) {
        return (
            <section style={{minHeight: 'var(--h)', height: 'unset', overflow: 'visible'}}>
                {props.children}
            </section>
        );
    };
    if (props.one) {
        return (
            <section>
                <Grid style={{width: '100%'}} container spacing={5}>
                    <Grid item xs={false} sm={false} md={3}></Grid>
                    <Grid className={classes.part} item sm={12} xs={12} md={6}>
                        <part>
                            {props.children}
                        </part>
                    </Grid>
                    <Grid item xs={false} sm={false} md={3}></Grid>
                </Grid>
            </section>
        )
    };
    if (props.feedback) {
        return (
            <section style={{overflow: 'visible',  minHeight: 'calc(var(--h) + 20px)', height: 'auto'}}>
                <Grid style={{width: '100%'}} container spacing={5}>
                    <Grid style={{paddingBottom: 0}} item xs={false} sm={false} md={2}></Grid>
                    <Grid style={{paddingBottom: 0}} className={classes.part} item sm={12} xs={12} md={4}>
                        <part>
                            {props.children[0]}
                        </part>
                    </Grid>
                    <Grid style={{paddingBottom: 0}} className={classes.part} item sm={12} xs={12} md={4}>
                        <part>
                            {props.children[1]}
                        </part>
                    </Grid>
                    <Grid style={{paddingBottom: 0}} item xs={false} sm={false} md={2}></Grid>
                </Grid>
            </section>
        );
    };
    if (props.error) {
        return (
            <section style={{overflow: 'visible',  minHeight: 'calc(var(--h) + 20px)', height: 'auto'}}>
                <Grid style={{width: '100%'}} container spacing={5}>
                    <Grid style={{paddingBottom: 0}} item xs={false} sm={false} md={2}></Grid>
                    <Grid style={{paddingBottom: 0}} className={classes.part} item sm={12} xs={12} md={4}>
                        <part>
                            {props.children[0]}
                        </part>
                    </Grid>
                    <Grid style={{paddingBottom: 0}} className={classes.part} item sm={12} xs={12} md={4}>
                        <part>
                            {props.children[1]}
                        </part>
                    </Grid>
                    <Grid style={{paddingBottom: 0}} item xs={false} sm={false} md={2}></Grid>
                </Grid>
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