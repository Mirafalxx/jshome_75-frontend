import TextField from "@material-ui/core/TextField";
import React from "react";

const Encode = ({ encodeWord, change }) => {
  return (
    <TextField
      id="filled-multiline-static"
      label="Зашифровать"
      multiline
      rows={5}
      variant="filled"
      name="encode"
      value={encodeWord}
      onChange={change}
    />
  );
};

export default Encode;
