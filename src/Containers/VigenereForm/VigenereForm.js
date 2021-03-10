import React from "react";
import Decode from "../../Components/Decode/Decode";
import Encode from "../../Components/Encode/Encode";
import VigenereAction from "../../Components/VigenereAction/VigenereAction";

const VigenereForm = () => {
  return (
    <div>
      <Encode />
      <VigenereAction
        decodeMessage={() => console.log("decode")}
        encodeMessage={() => console.log("encode")}
      />
      <Decode />
    </div>
  );
};

export default VigenereForm;
