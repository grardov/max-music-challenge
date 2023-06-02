import { AppConfig } from "../../index";

export type Actions = {
  type: "ADD" | "REMOVE";
  payload: AppConfig.Artist;
};

const initial = (): AppConfig.Artist[] => {
  const data = localStorage.getItem("list");
  if (data !== null) {
    return JSON.parse(data) as AppConfig.Artist[];
  }
  return [];
};

export const initialState = initial();

function updateState(state: AppConfig.Artist[]) {
  window.localStorage.setItem("list", JSON.stringify(state));
}

export function listReducer(state: AppConfig.Artist[], action: Actions) {
  const { type, payload } = action;
  switch (type) {
    case "ADD": {
      const updated = [...state, payload];
      updateState(updated);
      return updated;
    }
    case "REMOVE": {
      const updated = state.filter((value) => value.id !== payload.id);
      updateState(updated);
      return updated;
    }
  }
}
