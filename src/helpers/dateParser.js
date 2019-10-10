import moment from "moment";

const getDate = (timestamp, timezone, format) =>
  moment
    .utc(timestamp, "X")
    .add(timezone, "seconds")
    .format(format);

export default {
  getFormattedLocalDate: (timestamp, timezone) =>
    getDate(timestamp, timezone, "D MMMM, YYYY"),
  getFormattedLocalTime: (timestamp, timezone) =>
    getDate(timestamp, timezone, "HH:mm A"),
  getDayNumber: (timestamp, timezone) => getDate(timestamp, timezone, "D")
};
