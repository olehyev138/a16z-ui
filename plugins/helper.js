export default (context, inject) => {
  const showHtmlFunc = (html) => {
    return html.replace(/\n/g, "<br />").replace("Sign up", "<br />Sign up");
  };
  const padDigitsFunc = (number, digits = 2) => {
    return (
      Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number
    );
  };

  const factories = {
    showHtml: showHtmlFunc,
    padDigits: padDigitsFunc,
  };

  // Inject $api
  inject("util", factories);
};
