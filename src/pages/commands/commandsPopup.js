import { Dialog, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, useMediaQuery } from "@material-ui/core";

export default function CommandPopup(props) {
    return (
        <Dialog className="commandPopup" open={props.open} onClose={props.handleClose}>
            <DialogTitle>
                Frodo's Commands
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <List style={{width: '100%'}} component="nav">
                        <div>
                            {!useMediaQuery('(max-width: 959px)') ? (
                                <>
                                    <div style={{width: '50%', float: 'left'}}>
                                        {['Akinator', 'Anagrams', 'Connect Four', 'Hangman', 'Rock Paper Scissors', 'Trivia'].map((category) => (
                                            <ListItem key={category} button onClick={() => {
                                                props.handleClose();
                                                setTimeout(() => window.location.hash = `#${encodeURI(category.toLowerCase())}`, 1000);
                                            }}>
                                                <ListItemText primary={category}/>
                                            </ListItem>
                                        ))}
                                    </div>
                                    <div style={{width: '50%', float: 'left'}}>
                                        {['Tic Tac Toe', 'Othello', 'Fact', 'Fortune', 'Insult', 'Joke'].map((category) => (
                                            <ListItem key={category} button onClick={() => {
                                                props.handleClose();
                                                setTimeout(() =>  window.location.hash = `#${encodeURI(category.toLowerCase())}`, 1000);
                                            }}>
                                                <ListItemText primary={category}/>
                                            </ListItem>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div style={{width: '100%', float: 'left'}}>
                                    {['Akinator', 'Anagrams', 'Connect Four', 'Hangman', 'Rock Paper Scissors', 'Trivia', 'Tic Tac Toe', 'Warewolves', 'Fact', 'Fortune', 'Insult', 'Joke'].map((category) => (
                                        <ListItem key={category} button onClick={() => {
                                            props.handleClose();
                                            setTimeout(() =>  window.location.hash = `#${encodeURI(category.toLowerCase())}`, 1000);
                                        }}>
                                            <ListItemText primary={category}/>
                                        </ListItem>
                                    ))}
                                </div>
                            )}
                        </div>
                    </List>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};
