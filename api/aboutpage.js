export default (axios) => ({
  getThesis() {
    return new Promise(function (resolve, reject) {
      axios
        .get("pages/92")
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
