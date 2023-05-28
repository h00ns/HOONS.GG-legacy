import _Time from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ko';
import 'dayjs/locale/en';
_Time.extend(utc);
_Time.locale('ko');

export const Time = _Time;

export type Time = _Time.Dayjs;
