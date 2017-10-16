import axios from "axios";
import { FETCH_USER, FETCH_WALLETS } from "./types";

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

export const fetchWallets = () => async dispatch => {
  const res = await axios.get("/api/wallets");

  dispatch({ type: FETCH_WALLETS, payload: res.data });
};

export const updateWallet = (values, history) => async dispatch => {
  const res = await axios.put("/api/wallets/" + values.wallet, values);

  history.push("/wallets");
  // dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteWallet = (values, history) => async dispatch => {
  const res = await axios.delete("/api/wallets/" + values.wallet, values);

  history.push("/wallets");
  // dispatch({ type: FETCH_USER, payload: res.data });
};
