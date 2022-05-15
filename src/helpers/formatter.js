import moment from "moment";

// get format 1 to 01
export const pad = (number, length) => {
  var str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
};

export const dateFormatted = (date) => {
  return moment(date).format("DD/MM/YYYY");
};
