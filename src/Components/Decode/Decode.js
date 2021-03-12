import React from "react";
import TextField from "@material-ui/core/TextField";

const Decode = ({ decodeValue, change }) => {
  return (
    <TextField
      id="filled-multiline-static"
      label="Расшифровать"
      multiline
      rows={5}
      name="decode"
      variant="filled"
      value={decodeValue}
      onChange={change}
    />
  );
};

export default Decode;
