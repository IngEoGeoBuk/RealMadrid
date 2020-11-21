import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function SearchInner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          style={{ margin: 8 }}
          placeholder="Buscar"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>    
    </div>
  );
}
