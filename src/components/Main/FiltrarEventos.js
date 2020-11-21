import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(1),
  },
}));

export default function FiltrarEventos() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const PcVer = styled.div`
    @media screen and (max-width:767px) {
        display: none;
    }
  `

  const MobileVer = styled.div`
    display: none;
    @media screen and (max-width:767px) {
        display: grid;
    }
`

  const MenuItemStyle = {
    fontSize:"0.8rem",
    color:"gray",
    width:"18vw"
  }

  const MenuItemStyle2 = {
    fontSize:"1rem",
    color:"gray",
    width:"50vw"
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
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ color:"rgb(2, 85, 165)", border: "none", outline: "none", padding:"0", fontSize:"0.6rem", fontWeight:"700", backgroundColor: 'transparent' }}
        >
          Filtrar eventos
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <PcVer>
                      <MenuItem onClick={handleClose} style={MenuItemStyle}>Primer equipo</MenuItem>
                      <MenuItem onClick={handleClose} style={MenuItemStyle}>Real Madrid Baloncesto</MenuItem>
                    </PcVer>
                    <MobileVer>
                      <MenuItem onClick={handleClose} style={MenuItemStyle2}>Primer equipo</MenuItem>
                      <MenuItem onClick={handleClose} style={MenuItemStyle2}>Real Madrid Baloncesto</MenuItem>
                    </MobileVer>
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