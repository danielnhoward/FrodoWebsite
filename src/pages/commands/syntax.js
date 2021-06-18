import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { useState } from "react";

export default function CommandSyntax(props) {
    const [open, setOpen] = useState(false);
    function handleOpen() {
        setOpen(true);
        try {props.onClick()}
        catch(err) {};
    };
    function handleClose() {
        setOpen(false);
    };

    function click(indexToShow) {
        return () => {
            props.args.forEach((command, index) => {
                document.getElementById(index).style.display = 'none';
            });
            document.getElementById('commandDescription').style.display = 'none';
            document.getElementById(indexToShow).style.display = 'block';
        };
    };

    return (
        <>
            <Button onClick={handleOpen} style={{padding: 0}}>
                <div className="commandSyntax">
                    Command Syntax
                </div>
            </Button>
            <Dialog className="commandPopup" open={open} onClose={handleClose}>
                <DialogTitle>
                    <div onClick={click('commandDescription')} style={{display: 'inline-block', padding: 10, cursor: 'pointer'}}>
                        /{props.command.name}
                    </div>
                    {props.args.map((command, index) => (
                        <span key={index}>
                            <Button onClick={click(index)} headerid={index} className="commandPopupText">
                                {command.name}
                            </Button>
                        </span>
                    ))}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div id="commandDescription">
                            {props.command.description}
                        </div>
                        {props.args.map((command, index) => (
                            <div key={index} id={index} style={{display: 'none'}}>
                                {command.description}
                            </div>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog> 
        </>
    ); 
};