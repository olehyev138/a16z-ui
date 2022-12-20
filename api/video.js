export default (axios) => ({
  getVideoContent(id) {
    return new Promise(function (resolve, reject) {
      axios
        .get(`/wp/v2/video/${id}`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
});
