import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';


export const versionState = atom({
  key: `language/${uuidv4()}`,
  default: ''
})