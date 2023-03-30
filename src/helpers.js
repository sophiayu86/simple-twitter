import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import updateLocale from 'dayjs/plugin/updateLocale';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(utc);
dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
dayjs.updateLocale('en', {
  relativeTime: {
    future: '再 %秒',
    past: '%秒',
    s: '幾秒前',
    m: '一分鐘',
    mm: '%d 分鐘',
    h: '一小時',
    hh: '%d 小時',
    d: '一天',
    dd: '%d 天',
    M: '一個月',
    MM: '%d 月',
    y: '一年',
    yy: '%d 年'
  }
});

export const absoluteTimeFormat = time => {
  if (!time) return;
  const isAm = dayjs.utc(time).local().format('A') === 'AM' ? '上午' : '下午';
  const hourMin = dayjs.utc(time).local().format('hh:mm');
  const date = dayjs.utc(time).local().format('YYYY年MM月DD日');
  return `${isAm} ${hourMin}・${date}`;
};

export const relativeTimeFormat = time => {
  if (!time) return;
  const absoluteTime = dayjs.utc(time).local().format('YYYY-MM-DD HH:mm');
  return dayjs(absoluteTime).fromNow(true);
};
