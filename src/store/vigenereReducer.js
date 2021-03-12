import {
  POST_VIGENERE_DECODE_FAILURE,
  POST_VIGENERE_DECODE_REQUEST,
  POST_VIGENERE_DECODE_SUCCESS,
  POST_VIGENERE_ENCODE_FAILURE,
  POST_VIGENERE_ENCODE_REQUEST,
  POST_VIGENERE_ENCODE_SUCCESS,
} from "./vigenereAction";

const initialState = {
  encode: "",
  decode: "",
};

const vigenereReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_VIGENERE_DECODE_REQUEST:
      return { ...state };
    case POST_VIGENERE_DECODE_SUCCESS:
      return { ...state, decode: action.decode };
    case POST_VIGENERE_DECODE_FAILURE:
      return { ...state };
    case POST_VIGENERE_ENCODE_REQUEST:
      return { ...state };
    case POST_VIGENERE_ENCODE_SUCCESS:
      return { ...state, encode: action.encode };
    case POST_VIGENERE_ENCODE_FAILURE:
      return { ...state };

    default:
      return state;
  }
};

export default vigenereReducer;
