import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Decode from "../../Components/Decode/Decode";
import Encode from "../../Components/Encode/Encode";
import VigenereAction from "../../Components/VigenereAction/VigenereAction";
import { decodeVigenere } from "../../store/vigenereAction";

const VigenereForm = () => {
  const [encodeValue, setEncodeValue] = useState("");
  const [secretValue, setSecretValue] = useState("");
  const [decodeValue, setDecodeValue] = useState("");
  const dispatch = useDispatch();

  const testHandler = () => {
    dispatch(decodeVigenere(encodeValue, secretValue));
  };
  return (
    <div>
      <Encode encodeWord={encodeValue} change={(e) => setEncodeValue(e.target.value)} />
      <VigenereAction
        password={secretValue}
        change={(e) => setSecretValue(e.target.value)}
        decodeMessage={testHandler}
        encodeMessage={() => console.log("encode")}
      />
      <Decode decodeWord={decodeValue} change={(e) => setDecodeValue(e.target.value)} />
    </div>
  );
};

export default VigenereForm;
