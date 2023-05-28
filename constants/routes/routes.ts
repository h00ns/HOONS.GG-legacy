import { urlCompiler } from "./compiler";

export const HOME = '/';  // 메인

export const SEARCH = '/search';  // 검색

export const searchPath = urlCompiler<{ name: string }>(SEARCH);

export const GITHUB = 'https://github.com/h00ns/HOONS.GG';  // GitHub Repo
export const VELOG = 'https://velog.io/@hoooons'; // Velog
export const SNS = 'https://www.instagram.com/h0000n_/';  // Insta