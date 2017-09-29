import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addWallet = (values, history) => async dispatch => {
  const res = await axios.post("/api/wallets", values);

  history.push("/wallets");
  dispatch({ type: FETCH_USER, payload: res.data });
};
