export const getDateTime = (
  date = new Date(),
  hours = 0,
  minutes = 0,
  seconds = 0
) => {
  const dateToTime = new Date(date).getTime();
  const hoursToTime = 1000 * 60 * 60 * hours;
  const minusesToTime = 1000 * 60 * minutes;
  const secondsToTime = 1000 * seconds;
  return new Date(dateToTime + hoursToTime + minusesToTime + secondsToTime);
};

export default { getDateTime };