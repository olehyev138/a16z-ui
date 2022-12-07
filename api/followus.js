export default (axios) => ({
  get() {
    return new Promise(function (resolve, reject) {
      axios
        .get("wp/v2/pages/111")
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
