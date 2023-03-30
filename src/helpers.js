import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export const absoluteTimeFormat = time => {
  if (!time) return;
  const isAm = dayjs.utc(time).local().format('A') === 'AM' ? '上午' : '下午';
  const hourMin = dayjs.utc(time).local().format('hh:mm');
  const date = dayjs.utc(time).local().format('YYYY年MM月DD日');
  return `${isAm} ${hourMin}・${date}`;
};

export const ralativeTimeFormat = time => {
  console.log(time);
};
