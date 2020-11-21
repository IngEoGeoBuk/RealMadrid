import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function ENTRADAS() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const SelectLangaugeFont = {
    color:"rgb(2, 85, 165)", 
    fontSize:"0.7rem", 
    fontWeight:"600",
    justifyContent: "center",
    borderBottom: "1px solid black",
    padding: "0.5rem 0",
    margin:"0.2rem",
  }

  const SelectLangaugeFontT = {
    color:"rgb(2, 85, 165)", 
    fontSize:"0.7rem", 
    fontWeight:"600",
    justifyContent: "center",
    padding: "0.5rem 0",
    margin:"0.2rem",
  }

  const NavLinkStyle = {
    textDecoration: "none",
    color:"rgb(2, 85, 165)"
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
          style = {{ padding:"0.6rem", backgroundColor:"rgb(2, 85, 165)", color:"white" }}
        >
            ENTRADAS      
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ zIndex:1 }} >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} >
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>
                        <NavLink to ="/RealMadrid/futbol" style={NavLinkStyle}>
                            FÚTBOL
                        </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>
                        <NavLink to ="/RealMadrid/castilla" style={NavLinkStyle}>
                            CASTILLA
                        </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFont}>
                        <NavLink to ="/RealMadrid/baloncesto" style={NavLinkStyle}>
                            BALONCESTO
                        </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose} style={SelectLangaugeFontT}>
                        <NavLink to ="/RealMadrid/tour" style={NavLinkStyle}>
                            TOUR BERNABÉU
                        </NavLink>
                    </MenuItem>
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