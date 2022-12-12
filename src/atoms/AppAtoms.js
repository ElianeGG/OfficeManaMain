import { atom } from "recoil";

export const currPageAtom = atom({
  key: "curr-page-key",
  default: "tasks",
});
