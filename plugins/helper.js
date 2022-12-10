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

  const alphabeticalOrder = (arr) => {
    return arr.sort((a, b) =>
      a.post_title !== b.post_title ? (a.post_title < b.post_title ? -1 : 1) : 0
    );
  };
  const arrGroupAlphabeticalOrder = (rawData) => {
    let arr = alphabeticalOrder(rawData);
    let data = arr.reduce((r, e) => {
      // get first letter of name of current element
      let group = e.post_title[0].toUpperCase();
      // if there is no property in accumulator with this letter create it
      if (!r[group]) r[group] = { group, children: [e] };
      // if there is push current element to children array for that letter
      else r[group].children.push(e);
      // return accumulator
      return r;
    }, {});

    // since data at this point is an object, to get array of values
    // we use Object.values method
    let result = Object.values(data);
    return result;
  };

  const factories = {
    showHtml: showHtmlFunc,
    addressFormat: addressFormat,
    padDigits: padDigitsFunc,
    isEmpty: isEmpty,
    stringToArray: stringToArray,
    alphabeticalOrder: alphabeticalOrder,
    arrGroupAlphabeticalOrder: arrGroupAlphabeticalOrder,
  };

  // Inject $api
  inject("util", factories);
};
