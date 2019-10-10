import moment from "moment";

const getDate = (timestamp, timezone, format) =>
  moment
    .utc(timestamp, "X")
    .add(timezone, "seconds")
    .format(format);

export default {
  getFormattedLocalDate: (timestamp, timezone) =>
    getDate(timestamp, timezone, "M MMMM, YYYY"),
  getFormattedLocalTime: (timestamp, timezone) =>
    getDate(timestamp, timezone, "HH:mm A")
};
