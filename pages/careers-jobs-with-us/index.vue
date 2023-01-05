<template>
  <div id="wrapper">
    <Header></Header>

    <header class="hero hero--sm hero--jobs">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-hero-jobs.png"
          />
          <source srcset="@/assets/images/bg-hero-jobs-sm.png" />
          <img src="@/assets/images/bg-hero-jobs.png" alt="" />
        </picture>
        <div class="highlight-display hld--teal">
          <h1>Jobs</h1>
        </div>
      </div>
    </header>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">View jobs with:</span>
      </div>
    </div>

    <div class="tabs-wrap">
      <div class="container">
        <div class="tab-nav-hold">
          <ul class="tab-nav">
            <li>
              <a
                :class="[activeTab == 'a16z' ? 'active' : '']"
                @click="activeTab = 'a16z'"
                href="#"
                data-tab="tab1"
                >A16z crypto</a
              >
            </li>
            <li>
              <a
                :class="[activeTab == 'ourcompanies' ? 'active' : '']"
                href="#"
                @click="activeTab = 'ourcompanies'"
                data-tab="tab2"
                >our companies</a
              >
            </li>
          </ul>
        </div>
        <div class="filter">
          <div class="select">
            <select
              v-model="selectedDept"
              @change="filterLocationDepartmentJobPosts(getAllJobsRawData)"
            >
              <option
                v-for="department in departments"
                :key="department"
                :value="department == 'Department: All' ? 'all' : department"
                :selected="department == 'Department: All' ? 'true' : 'false'"
              >
                {{ department }}
              </option>
            </select>
          </div>
          <div class="select">
            <select
              v-model="selectedLoc"
              @change="filterLocationDepartmentJobPosts(getAllJobsRawData)"
            >
              <option
                v-for="location in locations"
                :key="location"
                :value="location == 'Location: All' ? 'all' : location"
                :selected="location == 'Location: All' ? 'true' : 'false'"
              >
                {{ location }}
              </option>
            </select>
          </div>
          <div class="search-form">
            <div class="input">
              <input
                type="text"
                placeholder="Search"
                v-model="searchquery"
                @input="debounceSearch(getAllJobsRawData)"
              />
              <button>
                <span
                  @click="clearSearch(getAllJobsRawData)"
                  class="icon-cross"
                  :style="
                    !$util.isEmpty(searchquery)
                      ? 'display:block'
                      : 'display:none'
                  "
                >
                </span>
                <span
                  class="icon-search"
                  @click="filterLocationDepartmentJobPosts(getAllJobsRawData)"
                  :style="
                    $util.isEmpty(searchquery)
                      ? 'display:block'
                      : 'display:none'
                  "
                ></span>
              </button>
            </div>
          </div>
        </div>
        <span class="search-result-num">
          <a href="#">[{{ totalJobs }} results]</a>
        </span>
      </div>
    </div>

    <div class="tab-content">
      <div v-if="activeTab == 'a16z'" id="tab1">
        <section class="categories" v-if="!$util.isEmpty(jobPosts)">
          <A16zCrypto
            v-for="(department, i) in jobPosts"
            :key="i"
            :jobPosts="department"
            :department="i"
          />
        </section>
        <section class="categories" v-else>
          <div class="container">
            <div class="category-row">Jobs not found!</div>
          </div>
        </section>
      </div>
      <div v-if="activeTab == 'ourcompanies'" id="tab2">
        <Companies :Compaies="ourCompaies" />
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "CareesrJobWithUs",
  head() {
    return {
      title: "Careers jobs with us",
    };
  },
  data() {
    return {
      activeTab: "a16z",
      debounce: null,
      searchquery: "",
      selectedDept: "all",
      departments: ["Department: All"],
      selectedLoc: "all",
      locations: ["Location: All"],
      totalJobs: 0,
      ourCompaies: [],
      getAllJobsRawData: [],
      jobPosts: [],
    };
  },
  methods: {
    async getCompanies() {
      const response = await this.$api.jobs.getCompanies();

      if (!this.$util.isEmpty(response)) {
        this.ourCompaies = response;
      }
    },
    async getAllJobs() {
      var payload = {
        post_type: ["job"],
        posts_per_page: -1,
      };
      const response = await this.$api.jobs.getAllJobs(payload);
      var allFormatedJobsData = [];
      if (
        !this.$util.isEmpty(response) &&
        !this.$util.isEmpty(response.posts)
      ) {
        if (!this.$util.isEmpty(response.posts.data)) {
          let allJobsPosts = response.posts.data;
          let allJobsPostsTerms = response.posts.terms;
          for (var index = 0; index < allJobsPosts.length; index++) {
            // console.log("getAllJobs = ", allJobsPosts[index]);
            try {
              // console.log("allJobsPostsTerms = ", allJobsPostsTerms[index]);
              if (allJobsPosts[index].ID === allJobsPostsTerms[index].id) {
                allFormatedJobsData.push({
                  ...allJobsPosts[index],
                  department_count:
                    allJobsPostsTerms[index].department[0].count,
                  department_term_id:
                    allJobsPostsTerms[index].department[0].term_id,
                  department_name: allJobsPostsTerms[index].department[0].name,
                  company: allJobsPostsTerms[index].company,
                  location_term_id:
                    allJobsPostsTerms[index].location[0].term_id,
                  location_count: allJobsPostsTerms[index].location[0].count,
                  location_name: allJobsPostsTerms[index].location[0].name,
                  location_details: allJobsPostsTerms[index].location_details,
                });

                if (
                  this.departments.indexOf(
                    allJobsPostsTerms[index].department[0].name
                  ) === -1
                ) {
                  this.departments.push(
                    allJobsPostsTerms[index].department[0].name
                  );
                }
                if (
                  this.locations.indexOf(
                    allJobsPostsTerms[index].location[0].name
                  ) === -1
                ) {
                  this.locations.push(
                    allJobsPostsTerms[index].location[0].name
                  );
                }
              }
            } catch (error) {}
          }
        }
      }
      this.totalJobs = allFormatedJobsData.length;

      // console.log("allFormatedJobsData = ", allFormatedJobsData);
      // console.log("location = ", this.locations);
      // console.log("department = ", this.departments);

      var allDptFormatData = await this.departmentWiseJobPosts(
        allFormatedJobsData
      );
      console.log("allDptFormatData = ", allDptFormatData);
      return allFormatedJobsData;
    },
    departmentWiseJobPosts(data = []) {
      let groups = data.reduce((ac, a) => {
        let key = a.department_name;
        ac[key] = (ac[key] || []).concat(a);
        return ac;
      }, {});
      // groups = Object.entries(groups).map(([k, v]) => ({ [k]: v }));

      return groups;
    },
    filterLocationDepartmentJobPosts(jobs = []) {
      this.jobPosts = [];

      if (
        this.selectedDept == "all" &&
        this.selectedLoc == "all" &&
        this.$util.isEmpty(this.searchquery)
      ) {
        console.log("if ===== all ");
        this.totalJobs = jobs.length;
        this.jobPosts = this.departmentWiseJobPosts(jobs);
      } else {
        let dataArr = jobs.filter((type) => {
          return (
            type.department_name == this.selectedDept ||
            type.location_name == this.selectedLoc ||
            type.post_title
              .toLowerCase()
              .indexOf(this.searchquery.toLowerCase()) >= 0
          );
        });
        this.totalJobs = dataArr.length;
        this.jobPosts = this.departmentWiseJobPosts(dataArr);
      }
      // console.log("this.jobPosts == ", this.jobPosts);
    },
    debounceSearch(jobs = []) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.filterLocationDepartmentJobPosts(jobs);
      }, 600);
    },
    clearSearch(jobs = []) {
      console.log("clear search");
      this.searchquery = "";
      this.filterLocationDepartmentJobPosts(jobs);
    },
  },
  async mounted() {
    this.getCompanies();
    this.getAllJobsRawData = await this.getAllJobs();
    this.filterLocationDepartmentJobPosts(this.getAllJobsRawData);
    console.log("mounted getAllJobs = ", this.getAllJobsRawData);
  },
};
</script>
