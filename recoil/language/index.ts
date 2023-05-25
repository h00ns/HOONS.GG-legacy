import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

export enum Language {
  KO = 'ko',
  EN = 'en',
}

export const languageState = atom({
  key: `language/${uuidv4()}`,
  default: Language.KO,
});
