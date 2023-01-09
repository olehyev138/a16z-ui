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
                @click="changeTab('a16z', getAllJobsRawData)"
                href="#"
                data-tab="tab1"
                >A16z crypto</a
              >
            </li>
            <li>
              <a
                :class="[activeTab == 'ourcompanies' ? 'active' : '']"
                href="#"
                @click="changeTab('ourcompanies', getAllJobsRawData)"
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
                @input="debounceSearch(activeTab, getAllJobsRawData)"
              />
              <button>
                <span
                  @click="clearSearch(activeTab, getAllJobsRawData)"
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
        <section class="categories" v-if="!$util.isEmpty(ourCompaies)">
          <Companies :Compaies="ourCompaies" :key="Date.now()" />
        </section>
        <section class="categories" v-else>
          <div class="container">
            <div class="category-row">Company not found!</div>
          </div>
        </section>
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
              if (allJobsPosts[index].ID == allJobsPostsTerms[index].id) {
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
                  company_name: this.$util.isEmpty(
                    allJobsPostsTerms[index].company
                  )
                    ? "not-define"
                    : allJobsPostsTerms[index].company.post_title,
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

      this.$store.dispatch("jobs/storeAllJobsRawData", allFormatedJobsData);
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
    companyWiseJobPosts(data = []) {
      let dataArr = data.filter((type) => {
        return type.company_name !== "not-define";
      });

      let groups = dataArr.reduce((ac, a) => {
        let key = a.company_name;
        ac[key] = (ac[key] || []).concat(a);
        return ac;
      }, {});
      return groups;
    },
    filterLocationDepartmentJobPosts(jobs = []) {
      this.jobPosts = [];
      var dataArr = [];
      if (
        this.selectedDept == "all" &&
        this.selectedLoc == "all" &&
        this.$util.isEmpty(this.searchquery)
      ) {
        dataArr = jobs;
      } else if (
        this.selectedDept != "all" &&
        this.selectedLoc == "all" &&
        this.$util.isEmpty(this.searchquery)
      ) {
        dataArr = jobs.filter((type) => {
          return type.department_name == this.selectedDept;
        });
      } else if (
        this.selectedDept == "all" &&
        this.selectedLoc != "all" &&
        this.$util.isEmpty(this.searchquery)
      ) {
        dataArr = jobs.filter((type) => {
          return type.location_name == this.selectedLoc;
        });
      } else if (
        this.selectedDept != "all" &&
        this.selectedLoc != "all" &&
        this.$util.isEmpty(this.searchquery)
      ) {
        dataArr = jobs.filter((type) => {
          return (
            type.department_name == this.selectedDept ||
            type.location_name == this.selectedLoc
          );
        });
      } else if (
        this.selectedDept != "all" &&
        !this.$util.isEmpty(this.searchquery)
      ) {
        dataArr = jobs.filter((type) => {
          return (
            type.department_name == this.selectedDept &&
            type.post_title
              .toLowerCase()
              .indexOf(this.searchquery.toLowerCase()) >= 0
          );
        });
      } else if (
        this.selectedLoc != "all" &&
        !this.$util.isEmpty(this.searchquery)
      ) {
        dataArr = jobs.filter((type) => {
          return (
            type.location_name == this.selectedLoc &&
            type.post_title
              .toLowerCase()
              .indexOf(this.searchquery.toLowerCase()) >= 0
          );
        });
      } else {
        dataArr = jobs.filter((type) => {
          return (
            type.department_name == this.selectedDept ||
            type.location_name == this.selectedLoc ||
            type.post_title
              .toLowerCase()
              .indexOf(this.searchquery.toLowerCase()) >= 0
          );
        });
      }

      this.totalJobs = dataArr.length;
      this.jobPosts = this.departmentWiseJobPosts(dataArr);
      console.log("this.jobPosts == ", this.jobPosts);
    },
    filterOurCompanies(jobs = []) {
      this.ourCompaies = [];
      if (this.$util.isEmpty(this.searchquery)) {
        this.ourCompaies = this.companyWiseJobPosts(jobs);
      } else {
        let dataArr = jobs.filter((type) => {
          return (
            type.company_name
              .toLowerCase()
              .indexOf(this.searchquery.toLowerCase()) >= 0
          );
        });
        this.ourCompaies = this.companyWiseJobPosts(dataArr);
      }
      console.log("this.ourCompaies == ", this.ourCompaies);
    },
    debounceSearch(currentTab, jobs = []) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        if (currentTab == "a16z") {
          this.filterLocationDepartmentJobPosts(jobs);
        } else if (currentTab == "ourcompanies") {
          this.filterOurCompanies(jobs);
        }
      }, 600);
    },
    clearSearch(currentTab, jobs = []) {
      console.log("clear search");
      this.searchquery = "";
      if (currentTab == "a16z") {
        this.filterLocationDepartmentJobPosts(jobs);
      } else if (currentTab == "ourcompanies") {
        this.filterOurCompanies(jobs);
      }
    },
    changeTab(currentTab, jobsData) {
      this.$store.dispatch("jobs/storeActiveTab", currentTab);
      this.activeTab = currentTab;
      this.searchquery = "";
      console.log("changeTab == ", currentTab);
      if (currentTab == "a16z") {
        this.filterLocationDepartmentJobPosts(jobsData);
      } else if (currentTab == "ourcompanies") {
        this.filterOurCompanies(jobsData);
      }
    },
    async getActiveTab() {
      this.activeTab = await this.$store.getters["jobs/getActiveTab"];
    },
  },
  async mounted() {
    this.getAllJobsRawData = await this.getAllJobs();
    this.changeTab(this.activeTab, this.getAllJobsRawData);
    await this.getActiveTab();
    // console.log("mounted getAllJobs = ", this.getAllJobsRawData);
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    this.$store.dispatch("jobs/storeActiveTab", "a16z");
  },
};
</script>
