import { Dispatch } from 'react';

export const CHANGE_CITY: string = 'CHANGE_CITY';
export const CHANGE_THEME: string = 'CHANGE_THEME';
export const LOAD_CITIES: string = 'LOAD_CITIES';
export const LOAD_PRAYERS: string = 'LOAD_PRAYERS';
export const CHANGE_PERIOD: string = 'CHANGE_PERIOD';
export const REFRESH_TIME: string = 'REFRESH_TIME';
export const CHANGE_LANGUAGE: string = 'CHANGE_LANGUAGE';

export interface IPrayer {
  asr: string;
  chorouq: string;
  city: string;
  dhuhr: string;
  fajr: string;
  ishae: string;
  maghrib: string;
  id: number;
  day: Date;
}

export interface ICity {
  names: any;
  id: number;
}
export interface IState {
  cities: ICity[];
  id: number;
  lang: string;
  languages: string[];
  time: any;
  theme: string;
  dispatch: Dispatch<IAction>;
  periodicity: string;
}

export interface IAction {
  type: string;
  payload: any;
}
