const generateCreatedDate = (value) => {
  const date = new Date(value);
  const createdYear = date.getFullYear();
  const createdMonth = date.getMonth() + 1;
  const createdDay = date.getDate();
  return `${createdYear}. ${createdMonth}. ${createdDay}`;
};

const createTimePassedMessage = (date) => {
  const now = new Date();
  const targetDate = new Date(date);
  const timeDiff = now - targetDate;

  const SECOND_IN_MILLISECOND = 1000;
  const MINUTE_IN_SECOND = 60;
  const HOUR_IN_MINUTE = 60;
  const DAY_IN_HOUR = 24;
  const MONTH_IN_DAY = 30;
  const YEAR_IN_MONTH = 12;
  const MINUTE_IN_MILLISECOND = MINUTE_IN_SECOND * SECOND_IN_MILLISECOND;
  const HOUR_IN_MILLISECOND = HOUR_IN_MINUTE * MINUTE_IN_MILLISECOND;
  const DAY_IN_MILLISECOND = DAY_IN_HOUR * HOUR_IN_MILLISECOND;
  const MONTH_IN_MILLISECOND = MONTH_IN_DAY * DAY_IN_MILLISECOND;
  const YEAR_IN_MILLISECOND = YEAR_IN_MONTH * MONTH_IN_MILLISECOND;

  const diffMinutes = Math.trunc(timeDiff / MINUTE_IN_MILLISECOND);
  const diffHours = Math.trunc(timeDiff / HOUR_IN_MILLISECOND);
  const diffDays = Math.trunc(timeDiff / DAY_IN_MILLISECOND);
  const diffMonths = Math.trunc(timeDiff / MONTH_IN_MILLISECOND);
  const diffYears = Math.trunc(timeDiff / YEAR_IN_MILLISECOND);

  if (diffMinutes < 2) {
    return "1 minute ago";
  }
  if (diffMinutes <= 59) {
    return `${diffMinutes} minute ago`;
  }
  if (diffMinutes >= 60 && diffHours < 2) {
    return "1 hour ago";
  }
  if (diffHours <= 23) {
    return `${diffHours} hour ago`;
  }
  if (diffHours >= 24 && diffDays < 2) {
    return "1 day ago";
  }
  if (diffDays <= 30) {
    return `${diffDays} days ago`;
  }
  if (diffDays >= 31 && diffMonths < 2) {
    return "1 month ago";
  }
  if (diffMonths <= 11) {
    return `${diffMonths} months ago`;
  }
  if (diffMonths >= 12 && diffYears < 2) {
    return "1 year ago";
  }
  if (diffYears >= 2) {
    return `${diffYears} years ago`;
  }
};

export { generateCreatedDate, createTimePassedMessage };
