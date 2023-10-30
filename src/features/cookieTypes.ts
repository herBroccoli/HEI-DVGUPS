export interface CookieOptions {
  expires?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
}

export interface Cookie {
  set(name: string, value: string, options?: CookieOptions): void;
  get(name: string): string | undefined;
  remove(name: string, options?: CookieOptions): void;
}
