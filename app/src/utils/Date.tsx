export const getCurrentDateAndTime = (separator?: any): any => {
  separator = separator === undefined ? "" : separator;
  let newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let hour = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${day < 10 ? `0${day}` : `${day}`}${separator}${getCurrentTime(
    separator
  )}`;
};

export const getCurrentTime = (separator: any): any => {
  let newDate = new Date();
  let seconds = newDate.getSeconds();
  let minutes = newDate.getMinutes();
  let hour = newDate.getHours();

  return `${hour < 10 ? `0${hour}` : `${hour}`}${separator}${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  }${separator}${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
};

export const formatTime = (date: string): any => {
  let time: any = {};
  time = date.split("-");
  time.year = time[0];
  time.month = time[1];
  time.day = time[2];
  time.hour = time[3];
  time.minutes = time[4];
  time.seconds = time[5];
  return time;
};
