import { Cookies } from 'react-cookie';

type CookieSetOptions = {
  readonly path?: string;
  readonly expires?: Date;
  readonly maxAge?: number;
  readonly domain?: string;
  readonly secure?: boolean;
  readonly httpOnly?: boolean;
  readonly sameSite?: boolean | 'none' | 'lax' | 'strict';
  readonly encode?: (value: string) => string;
};

type CookieGetOptions = {
  readonly doNotParse?: boolean;
};

export const FAVORITES = 'FAVORITES'

const cookies = new Cookies();

export const setCookie = (name: string, value: any, options?: CookieSetOptions) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string, options?: CookieGetOptions) => {
  return cookies.get(name, { ...options });
};

export const removeCookie = (name: string, options?: CookieSetOptions) => {
  return cookies.remove(name, { ...options });
};
