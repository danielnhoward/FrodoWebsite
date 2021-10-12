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
            <section style={{zIndex: -2}}>
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
    if (props.nonResponsiveLeaderboard) {
        return (
            <section style={{overflow: 'auto', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
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
                        <div className="part">
                            {props.children}
                        </div>
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
                        <div className="part">
                            {props.children[0]}
                        </div>
                    </Grid>
                    <Grid style={{paddingBottom: 0}} className={classes.part} item sm={12} xs={12} md={4}>
                        <div className="part">
                            {props.children[1]}
                        </div>
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
                        <div className="part">
                            {props.children[0]}
                        </div>
                    </Grid>
                    <Grid style={{paddingBottom: 0}} className={classes.part} item sm={12} xs={12} md={4}>
                        <div className="part">
                            {props.children[1]}
                        </div>
                    </Grid>
                    <Grid style={{paddingBottom: 0}} item xs={false} sm={false} md={2}></Grid>
                </Grid>
            </section>
        );
    };
    return (
        <section className={props.className} style={props.style}>
            <Grid style={{width: '100%'}} container spacing={5}>
                <Grid item xs={false} sm={false} md={2}></Grid>
                <Grid className={classes.part} item sm={12} xs={12} md={4}>
                    <div className="part">
                        {props.children[0]}
                    </div>
                </Grid>
                <Grid className={classes.part} item sm={12} xs={12} md={4}>
                    <div className="part">
                        {props.children[1]}
                    </div>
                </Grid>
                <Grid item xs={false} sm={false} md={2}></Grid>
            </Grid>
        </section>
    );
};