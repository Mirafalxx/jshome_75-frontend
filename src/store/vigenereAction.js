import axiosVigenere from "../axiosVigenere";

export const POST_VIGENERE_DECODE_REQUEST = "POST_VIGENERE_DECODE_REQUEST";
export const POST_VIGENERE_DECODE_SUCCESS = "POST_VIGENERE_DECODE_SUCCESS";
export const POST_VIGENERE_DECODE_FAILURE = "POST_VIGENERE_DECODE_FAILURE";

export const decodeVigenereRequest = () => ({ type: POST_VIGENERE_DECODE_REQUEST });
export const decodeVigenereSuccess = (decode) => ({ type: POST_VIGENERE_DECODE_SUCCESS, decode });
export const decodeVigenereFailure = () => ({ type: POST_VIGENERE_DECODE_FAILURE });

//

export const POST_VIGENERE_ENCODE_REQUEST = "POST_VIGENERE_ENCODE_REQUEST";
export const POST_VIGENERE_ENCODE_SUCCESS = "POST_VIGENERE_ENCODE_SUCCESS";
export const POST_VIGENERE_ENCODE_FAILURE = "POST_VIGENERE_ENCODE_FAILURE";

export const encodeVigenereRequest = () => ({ type: POST_VIGENERE_ENCODE_REQUEST });
export const encodeVigenereSuccess = (encode) => ({ type: POST_VIGENERE_ENCODE_SUCCESS, encode });
export const encodeVigenereFailure = () => ({ type: POST_VIGENERE_ENCODE_FAILURE });
//

export const encodeVigenereMessage = (text, secretKey) => {
  return async (dispatch) => {
    const response = await axiosVigenere.post("/encode", { text, secretKey });
    dispatch(encodeVigenereSuccess(response.data));
  };
};

export const decodeVigenereMessage = (text, secretKey) => {
  return async (dispatch) => {
    const response = await axiosVigenere.post("/decode", { text, secretKey });
    dispatch(decodeVigenereSuccess(response.data));
    console.log(response.data);
  };
};
