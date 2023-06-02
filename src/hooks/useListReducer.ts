import { useReducer, Reducer } from "react";
import { listReducer, initialState, Actions } from "../reducers/list";

import { AppConfig } from "../../index";

export function useListReducer() {
  const [state, dispatch] = useReducer<Reducer<AppConfig.Artist[], Actions>>(
    listReducer,
    initialState
  );

  const addToList = (artist: AppConfig.Artist) =>
    dispatch({
      type: "ADD",
      payload: artist,
    });

  const removeFromList = (artist: AppConfig.Artist) =>
    dispatch({
      type: "REMOVE",
      payload: artist,
    });

  return { state, addToList, removeFromList };
}
