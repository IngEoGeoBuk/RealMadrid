import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(0),
  },
}));

export default function SelectLangauge() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const SelectLangaugeFont = {
    color:"rgb(102, 102, 102)", fontSize:"0.7rem"
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style = {{ padding:"0px", margin:"0px", border: "none", background: "none" }}
        >

            <div style={{ color:"rgb(102, 102, 102)", fontSize:"0.7rem" }}>
                ES<ExpandMoreIcon style={SelectLangaugeFont}/>
            </div>            
        
        </button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>ESPAÑOL</MenuItem>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>ENGLISH</MenuItem>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>FRANÇAIS</MenuItem>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>DEUTSCH</MenuItem>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>PORTUGUÊS</MenuItem>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>日本語</MenuItem>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>INDONESIA</MenuItem>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>한국어</MenuItem>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>عربي</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}