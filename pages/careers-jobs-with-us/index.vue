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
            <select>
              <option>Department: All</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
          <div class="select">
            <select>
              <option>Location: All</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
          <form class="search-form" action="#">
            <div class="input">
              <input type="email" placeholder="Search" />
              <button type="submit" value="search">
                <span class="icon-cross"></span>
                <span class="icon-search"></span>
              </button>
            </div>
          </form>
        </div>
        <span class="search-result-num">
          <a href="#">[109 results]</a>
        </span>
      </div>
    </div>

    <div class="tab-content">
      <div v-if="activeTab == 'a16z'" id="tab1">
        <section class="categories"><A16zCrypto /></section>
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
      ourCompaies: [],
    };
  },
  methods: {
    async getCompanies() {
      const response = await this.$api.jobs.getCompanies();

      if (!this.$util.isEmpty(response)) {
        this.ourCompaies = response;
      }
    },
  },
  mounted() {
    this.getCompanies();
  },
};
</script>
