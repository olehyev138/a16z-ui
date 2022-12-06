export default (axios) => ({
  get() {
    return new Promise(function (resolve, reject) {
      axios
        .get("acf/v3/options/options")
        .then(function (response) {
          resolve(response.data.acf);
        })
        .catch(function (error) {
          console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
});
