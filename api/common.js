export default (axios) => ({
  getSinglePost(id) {
    return new Promise(function (resolve, reject) {
      axios
        .get(`/wp/v2/posts/${id}`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
  getAnnouncements(payload) {
    return new Promise(function (resolve, reject) {
      const config = {
        params: payload,
      };
      axios
        .get("/api/v1/fetch-posts", config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
  getCategoryWisepost(payload) {
    return new Promise(function (resolve, reject) {
      const config = {
        params: payload,
      };
      axios
        .get("/api/v1/fetch-posts", config)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
});
