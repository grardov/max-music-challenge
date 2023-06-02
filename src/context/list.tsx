import { createContext } from "react";
import { useListReducer } from "../hooks/useListReducer";
import { AppConfig } from "../..";

type ListProviderProps = {
  children: React.ReactNode;
};

type ContextProps = {
  list: AppConfig.Artist[];
  addToList: (artist: AppConfig.Artist) => void;
  removeFromList: (artist: AppConfig.Artist) => void;
  isInTheList: (id: number) => boolean;
};

export const ListContext = createContext<ContextProps>({
  list: [],
  addToList: () => {
    return;
  },
  removeFromList: () => {
    return;
  },
  isInTheList: () => {
    return false;
  },
});

export function ListProvider({ children }: ListProviderProps) {
  const { state, addToList, removeFromList } = useListReducer();

  function isInTheList(id: number): boolean {
    const find = state.some((artist) => artist.id === id);
    return find ? true : false;
  }

  return (
    <ListContext.Provider
      value={{
        list: state,
        addToList,
        removeFromList,
        isInTheList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
