import { Slide, useScrollTrigger } from "@material-ui/core";

export default function HideOnSroll(props) {
    const trigger = useScrollTrigger({target: window});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {props.children}
        </Slide>
    );
};