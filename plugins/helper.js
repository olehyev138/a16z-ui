export default (context, inject) => {
  const showHtmlFunc = (html) => {
    return html.replace(/\n/g, "<br />").replace("Sign up", "<br />Sign up");
  };
  const padDigitsFunc = (number, digits = 2) => {
    return (
      Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number
    );
  };
  const isEmpty = (value) => {
    if (typeof value === "string") return value.trim().length === 0;
    else if (Array.isArray(value)) return value.length === 0;
    else if (typeof value === "object")
      return value == null || Object.keys(value).length === 0;
    else return !value;
  };
  const stringToArray = (str = "", separator = " ") => {
    return str.split(separator);
  };

  const addressFormat = (str) => {
    return str.replace(/[,]/g, "<br />");
  };

  const factories = {
    showHtml: showHtmlFunc,
    addressFormat: addressFormat,
    padDigits: padDigitsFunc,
    isEmpty: isEmpty,
    stringToArray: stringToArray,
  };

  // Inject $api
  inject("util", factories);
};
