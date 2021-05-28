import { InputLabel, TextField, Typography, Select, Button, makeStyles, FormControl, MenuItem } from "@material-ui/core";
import { useState } from "react";
import Section from "./Home/Section";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1)
    },
    form: {
        transition: 'all 0.5s linear',
        position: 'relative'
    },
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.5s linear',
        opacity: 0,
        pointerEvents: 'none'
    }
}));

export default function Feedback() {
    const classes = useStyles();
    const [field, setField] = useState('');
    const handleChange = (ev) => setField(ev.target.value);

    async function submit(ev) {
        ev.preventDefault();

        document.getElementById('feedbackForm').style.opacity = 0.5;
        document.getElementById('formImg').style.opacity = 1;
        document.getElementById('feedbackForm').style.pointerEvents = 'none';

        await fetch('https://send.pageclip.co/eNnG27q3FHjq40L6kyHHCE1Lbrocm0KH', {
            method: 'POST',
            cache: 'no-cache',
            mode: 'no-cors', 
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `Name=${document.getElementById('formName').value}&Email=${document.getElementById('formEmail').value}&Field=${field}&Desc=${document.getElementById('formDesc').value}`
        });

        document.getElementById('formName').value = '';
        document.getElementById('formEmail').value = '';
        setField('');
        document.getElementById('formDesc').value = '';

        
        document.getElementById('feedbackForm').style.opacity = 1;
        document.getElementById('formImg').style.opacity = 0;
        document.getElementById('feedbackForm').style.pointerEvents = 'all';
    };
    return (
        <Section feedback>
            <div className={classes.form}>
                <form id="feedbackForm" autoComplete="off" onSubmit={submit} style={{textAlign: 'center'}} action="https://send.pageclip.co/eNnG27q3FHjq40L6kyHHCE1Lbrocm0KH" method="post">
                    <Typography style={{marginTop: 30}} variant="h2">
                        Feedback
                    </Typography>
                    <TextField required id="formName" label="Name" inputProps={{name: 'Name'}}/>
                    <TextField style={{width: '100%'}} id="formEmail" label="Email" type="email" inputProps={{name: 'Email'}}/>
                    <br/><br/>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="formField">Field</InputLabel>
                        <Select required style={{minWidth: 120}} labelId="formField" value={field} onChange={handleChange}>
                            <MenuItem value={'General Feedback'}>General Feedback</MenuItem>
                            <MenuItem value={'Report a Problem'}>Report a Problem</MenuItem>
                            <MenuItem value={'Request a Feature'}>Request a Feature</MenuItem>
                        </Select>
                    </FormControl>

                    <br/><br/>
                    <TextField required style={{width: '100%', paddingBottom: '20px'}} id="formDesc" label="Desciption" multiline inputProps={{name: 'Desc'}}/> 
                    <br/>
                    <Button type="submit" variant="outlined" color="primary">
                        Submit!
                    </Button>

                    <img id="formImg" alt="" src="/static/img/loading.svg" className={classes.loading}/>
                </form>
            </div>
            <div>
                <img src="/static/img/frodo-nobg.svg" alt="" className="frodoPreview"/>
            </div>
        </Section>
    );
};