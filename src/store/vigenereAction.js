import axiosVigenere from "../axiosVigenere";

export const FETCH_VIGENERE_REQUEST = "FETCH_VIGENERE_REQUEST";
export const FETCH_VIGENERE_SUCCESS = "FETCH_VIGENERE_SUCCESS";
export const FETCH_VIGENERE_FAILURE = "FETCH_VIGENERE_FAILURE";

export const fetchVigenereSuccess = () => ({ type: FETCH_VIGENERE_SUCCESS });

export const decodeVigenere = ({ word, key }) => {
  return async (dispatch) => {
    const response = await axiosVigenere.post("/decode", word, key);
    console.log(response.data);
  };
};

export const encodeVigenere = ({ word, key }) => {
  return async (dispatch) => {
    const response = await axiosVigenere.post("/encode", word, key);
    console.log(response.data);
  };
};
