export const API_KEY = "AIzaSyBWN_OMplCFM-97NUY9Uv87LtfTV5TUSU0";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
