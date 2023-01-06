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

    <hr class="divider" />

    <div class="breadcrumbs-holder">
      <div class="container">
        <ul class="breadcrumbs">
          <li>
            <nuxt-link to="/careers-jobs-with-us" class="cp">Jobs</nuxt-link>
          </li>
          <li>
            <a href="javascript:void(0)" class="cp" @click="goToJobsPage()"
              >Companies</a
            >
          </li>
          <li class="active">{{ companyName }}</li>
        </ul>
      </div>
    </div>

    <div class="company">
      <div class="container">
        <h2>
          <span>{{ companyName }}</span>
        </h2>
      </div>
    </div>

    <div class="related-tags" style="display: none">
      <div class="container">
        <ul class="tags">
          <li><a class="tag small-tag" href="#">Series A</a></li>
          <li><a class="tag small-tag" href="#">Web 3</a></li>
          <li><a class="tag small-tag" href="#">Crypto</a></li>
        </ul>
        <div class="web">
          <a href="#" class="web-link">coinbase.com</a>
        </div>
      </div>
    </div>

    <div class="tabs-wrap">
      <div class="container">
        <div class="filter">
          <div class="select">
            <select v-model="selectedDept" @change="filterJobPosts()">
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
          <div class="search-form" action="#">
            <div class="input">
              <input
                type="text"
                placeholder="Search"
                v-model="searchquery"
                @input="debounceSearch()"
              />
              <button>
                <span
                  @click="clearSearch()"
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
          <a href="javascript:void(0)">[{{ totalJobs }} results]</a>
        </span>
        <div
          class="applied-filters"
          v-if="selectedDept != 'all' || !$util.isEmpty(searchquery)"
        >
          <span class="title">Applied Filters:</span>
          <ul class="filter-list">
            <li v-if="selectedDept != 'all'">
              <span>
                {{ selectedDept }}
                <a
                  href="javascript:void(0)"
                  @click="(selectedDept = 'all'), filterJobPosts()"
                  class="close"
                ></a>
              </span>
            </li>
            <li v-if="!$util.isEmpty(searchquery)">
              <span>
                {{ searchquery }}
                <a
                  href="javascript:void(0)"
                  @click="(searchquery = ''), filterJobPosts()"
                  class="close"
                ></a>
              </span>
            </li>
          </ul>
          <a
            href="javascript:void(0)"
            @click="clearFilter()"
            class="cta-w-underline"
            >Clear all</a
          >
        </div>
      </div>
    </div>

    <div class="tab-content">
      <div id="tab1">
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
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "CareersJobsSelectedCompany",
  head() {
    return {
      title: "Careers jobs selected company",
    };
  },
  data() {
    return {
      debounce: null,
      searchquery: "",
      selectedDept: "all",
      departments: ["Department: All"],
      totalJobs: 0,
      jobPosts: [],
    };
  },
  computed: {
    companyName() {
      return this.$store.getters["jobs/getSelectedCompanyName"];
    },
    getAllJobData() {
      return this.$store.getters["jobs/getSelectedCompanyJobs"];
    },
  },
  methods: {
    async getAllJob() {
      const allJobPost = await this.getAllJobData;
      // console.log("allJobPost == ", allJobPost);

      if (!this.$util.isEmpty(allJobPost)) {
        for (var index = 0; index < allJobPost.length; index++) {
          try {
            if (
              this.departments.indexOf(allJobPost[index].department_name) === -1
            ) {
              this.departments.push(allJobPost[index].department_name);
            }
          } catch (error) {}
        }
      }
      this.totalJobs = allJobPost.length;
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
    async filterJobPosts() {
      const jobs = await this.getAllJobData;
      this.jobPosts = [];
      var dataArr = [];
      if (this.selectedDept == "all" && this.$util.isEmpty(this.searchquery)) {
        dataArr = jobs;
      } else if (
        this.selectedDept != "all" &&
        this.$util.isEmpty(this.searchquery)
      ) {
        dataArr = jobs.filter((type) => {
          return type.department_name == this.selectedDept;
        });
      } else if (
        this.selectedDept == "all" &&
        !this.$util.isEmpty(this.searchquery)
      ) {
        dataArr = jobs.filter((type) => {
          return (
            type.post_title
              .toLowerCase()
              .indexOf(this.searchquery.toLowerCase()) >= 0
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
      }
      this.totalJobs = dataArr.length;
      this.jobPosts = this.departmentWiseJobPosts(dataArr);
      console.log("this.jobPosts == ", this.jobPosts);
    },
    debounceSearch() {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.filterJobPosts();
      }, 600);
    },
    clearSearch() {
      console.log("clear search");
      this.searchquery = "";
      this.filterJobPosts();
    },
    async goToJobsPage() {
      await this.$store.dispatch("jobs/storeActiveTab", "ourcompanies");
      this.$router.push({ name: "careers-jobs-with-us" });
    },
    clearFilter() {
      this.searchquery = "";
      this.selectedDept = "all";
      this.filterJobPosts();
    },
  },
  mounted() {
    this.getAllJob();
    this.filterJobPosts();
  },
};
</script>
<style scoped>
.cp {
  cursor: pointer !important;
}
</style>
