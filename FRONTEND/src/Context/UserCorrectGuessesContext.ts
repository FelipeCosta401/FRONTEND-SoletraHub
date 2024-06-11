import { createContext } from "react";

export interface UserGuessInterface {
  correct: boolean;
  wordId?: number;
  word?: string;
}

export const UserCorrectGuessesContext = createContext<UserGuessInterface>({
  correct: false,
});
