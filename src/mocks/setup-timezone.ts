import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/en';

dayjs.extend(utc);

export function setupTimeZone() {
  dayjs().locale('en');
}
