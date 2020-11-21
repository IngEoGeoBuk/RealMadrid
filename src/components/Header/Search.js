import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import SearchInner from './SearchInner';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'; 

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {

    const history = useHistory();

    function handleClick() {
        history.push("/buscar");
    }

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        handleClick();
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}
                style = {{ padding:"0px", margin:"0px", border: "none", background: "none" }}
            >
                <SearchIcon style={{ color:"rgb(102, 102, 102)" }} />
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                >
                <Fade in={open}>
                    <div className={classes.paper}>
                    <button onClick = {() => setOpen(!open)}
                        style = {{ padding:"0px", margin:"0px", border: "none", background: "none" }}
                    >
                        <CloseIcon/>
                    </button>
                    <SearchInner/>
                    <Button onClick={() => handleClose()}
                        style = {{ backgroundColor: "rgb(2, 122, 197)", color:"white" }}
                    >
                        Buscar
                    </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
        );
    }