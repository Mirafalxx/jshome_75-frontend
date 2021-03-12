import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Decode from "../../Components/Decode/Decode";
import Encode from "../../Components/Encode/Encode";
import VigenereAction from "../../Components/VigenereAction/VigenereAction";
import { decodeVigenereMessage, encodeVigenereMessage } from "../../store/vigenereAction";

const VigenereForm = () => {
  const dispatch = useDispatch();
  const [cipher, setCipher] = useState({
    encode: "",
    password: "",
    decode: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setCipher((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const encodeHandler = () => {
    dispatch(encodeVigenereMessage(cipher.encode, cipher.password));
  };

  const decodeHandler = () => {
    dispatch(decodeVigenereMessage(cipher.decode, cipher.password));
  };
  return (
    <div>
      <Encode encodeWord={cipher.encode} change={changeHandler} />
      <VigenereAction
        password={cipher.password}
        change={changeHandler}
        decodeMessage={encodeHandler}
        encodeMessage={decodeHandler}
      />
      <Decode decodeWord={cipher.decode} change={changeHandler} />
    </div>
  );
};

export default VigenereForm;
