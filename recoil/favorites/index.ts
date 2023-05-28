import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

export const favoritesState = atom<string[]>({
  key: `favorites/${uuidv4()}`,
  default: []
})
