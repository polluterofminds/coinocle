import { FETCH_WALLETS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WALLETS:
      return action.payload;
    default:
      return state;
  }
}
