import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    to_do: [
      { id: 1, text: "Hello" },
      { id: 2, text: "world" },
    ],
    doing: ["c", "d", "e"],
    done: ["f"],
  },
});
