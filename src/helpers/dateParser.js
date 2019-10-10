import moment from "moment";

const getDate = (timestamp, timezone, format) =>
  moment
    .utc(timestamp, "X")
    .add(timezone, "seconds")
    .format(format);

export default {
  getFormattedLocalDate: (timestamp, timezone) =>
    getDate(timestamp, timezone, "dddd"),
  getFormattedLocalTime: (timestamp, timezone) =>
    getDate(timestamp, timezone, "HH"),
  getDayNumber: (timestamp, timezone) => getDate(timestamp, timezone, "D")
};
