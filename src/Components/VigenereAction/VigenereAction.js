import { Grid, IconButton, TextField } from "@material-ui/core";
import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const VigenereAction = ({ decodeMessage, encodeMessage, password, change }) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <TextField label="Password" value={password} onChange={change} />
          <IconButton onClick={decodeMessage}>
            <KeyboardArrowUpIcon color="primary" style={{ fontSize: 35 }} />
          </IconButton>
          <IconButton onClick={encodeMessage}>
            <KeyboardArrowDownIcon color="primary" style={{ fontSize: 35 }} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VigenereAction;
