export default (axios) => ({
  get() {
    return new Promise(function (resolve, reject) {
      axios
        .get("/wp/v2/pages/96")
        .then(function (response) {
          resolve(response.data.acf);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
  getTeamMembers() {
    return new Promise(function (resolve, reject) {
      axios
        .get("/wp/v2/team-member")
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
  getTeamMemberPhoto(featured_media_id = 0) {
    return new Promise(function (resolve, reject) {
      axios
        .get(`/wp/v2/media/${featured_media_id}`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
  getTeamMember(id = 0) {
    return new Promise(function (resolve, reject) {
      axios
        .get(`/wp/v2/team-member/${id}`)
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          // console.log("Show error notification! ", error);
          reject(error);
        });
    });
  },
  getTeamMemberLatestPosts(id = 0) {
    return new Promise(function (resolve, reject) {
      axios
        .get(`/wp/v2/podcast?author=${id}`)
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
