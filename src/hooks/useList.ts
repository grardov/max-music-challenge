import { useContext } from "react";
import { ListContext } from "../context/list";

export function useList() {
  const ctx = useContext(ListContext);
  if (ctx === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
