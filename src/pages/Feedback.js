import { InputLabel, TextField, Typography, Select, Button, makeStyles, FormControl, MenuItem, IconButton } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { useState } from "react";
import Section from "./Home/Section";
import CloseIcon from '@material-ui/icons/Close';

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
    const [message, setMessage] = useState(<></>);
    const [alertText, setAlertText] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('Description');
    function hereClick() {
        document.getElementById('bmc-wbtn').click()
    };
    const handleChange = (ev) => {
        setField(ev.target.value);
        if (ev.target.value === 'Request a Feature') {
            setMessage((
                <>
                    <br/><br/>
                    Want us to imediately start work on your feature? Buy us a coffee by clicking <button  style={{cursor: 'pointer', color: 'blue', background: 'none', border: 'none', padding: 0}} onClick={hereClick}>here</button> and leave a message with your wanted feature in!
                </>
            ));
        }
        else {
            setMessage(<></>);
        };
        switch (ev.target.value) {
            case 'General Feedback':
                setDescriptionValue('Send us some feedback!');
            break;
            case 'Report a Problem':
                setDescriptionValue('What problem have you been having?');
            break;
            case 'Request a Feature':
                setDescriptionValue('What\' your idea?');
            break;
            default:
                setDescriptionValue('Description');
            break;
        };
    };

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
        
        document.getElementById('formImg').style.opacity = 0;

        function close() {
            document.getElementById('feedbackForm').style.pointerEvents = 'all';
            document.getElementById('feedbackForm').style.opacity = 1;
            setAlertText('');
        };

        setAlertText(<Alert severity="success" action={<IconButton aria-label="close" color="inherit" size="small" onClick={close}><CloseIcon fontSize="inherit"/></IconButton>}>Thanks for your feedback {document.getElementById('formName').value}!</Alert>);

        document.getElementById('formName').value = '';
        document.getElementById('formEmail').value = '';
        setMessage(<></>);
        setField('');
        setDescriptionValue('Description');
        document.getElementById('formDesc').value = '';
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
                    {message}
                    <br/><br/>
                    <TextField required style={{width: '100%', paddingBottom: '20px'}} id="formDesc" label={descriptionValue} multiline inputProps={{name: 'Desc'}}/> 
                    <br/>
                    <Button type="submit" variant="outlined" color="primary">
                        Submit!
                    </Button>

                    <img id="formImg" alt="" src="/static/img/loading.svg" className={classes.loading}/>
                </form>
                <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    {alertText}
                </div>
            </div>
            <div>
                <img src="/static/img/frodo-nobg.svg" alt="" className="frodoPreview"/>
            </div>
        </Section>
    );
};