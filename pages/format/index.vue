<template>
  <div id="wrapper">
    <Header></Header>

    <section class="hero-heading">
      <div class="container">
        <div class="highlight-display">
          <h1>Papers</h1>
        </div>
      </div>
    </section>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">(147)Results</span>
      </div>
    </div>

    <section class="search-results-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-md-2">
            <a href="#" class="filter-opener">filter</a>
            <div class="filter-boxes-wrap">
              <div class="filter-box">
                <a
                  href="javascript:void(0)"
                  @click="toggleFilters('filterFocusAreaToggle')"
                  :class="[filterFocusAreaToggle == false ? 'active' : '']"
                  class="search-topic"
                  >Focus Areas</a
                >
                <ul class="topic-list" v-if="!filterFocusAreaToggle">
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">company building</span>
                    </label>
                  </li>
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">tech trends</span>
                    </label>
                  </li>
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">policy</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="filter-box">
                <a
                  href="javascript:void(0)"
                  @click="toggleFilters('filterTopicToggle')"
                  :class="[filterTopicToggle == false ? 'active' : '']"
                  class="search-topic"
                  >topics/ themes</a
                >
                <ul class="topic-list" v-if="!filterTopicToggle">
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">auction design</span>
                    </label>
                  </li>
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">DAOs</span>
                    </label>
                  </li>
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">governance</span>
                    </label>
                  </li>
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">infrastructure</span>
                    </label>
                  </li>
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">metaverse</span>
                    </label>
                  </li>
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">open source</span>
                    </label>
                  </li>
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">security</span>
                    </label>
                  </li>
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">tokenomics</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="filter-box">
                <a
                  href="javascript:void(0)"
                  @click="toggleFilters('filterSeriesToggle')"
                  :class="[filterSeriesToggle == false ? 'active' : '']"
                  class="search-topic"
                  >series</a
                >
                <ul class="topic-list" v-if="!filterSeriesToggle">
                  <li>
                    <label class="checkbox">
                      <input type="checkbox" />
                      <span class="fake-input"></span>
                      <span class="fake-label">the canons</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-8 col-md-10">
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"><span>man, mosquito, malaria vaccine</span></a>
                  </h6>
                  <span class="posted-by">
                    <a href="#">Jorge Conde</a>,
                    <a href="#">Rajeev Venkayya</a>, and
                    <a href="#">Sonal Chokshi</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"><span>all about NFTs</span></a>
                  </h6>
                  <span class="posted-by">
                    <a href="#">Jesse Walden</a>, <a href="#">Linda Xie</a>, and
                    <a href="#">Sonal Chokshi</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"
                      ><span
                        >textiles as tech, science, math, culture, or
                        civilization</span
                      ></a
                    >
                  </h6>
                  <span class="posted-by">
                    <a href="#">Virginia Postrel</a> and
                    <a href="#">Sonal Chokshi</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"
                      ><span
                        >anatomy of a hack: solarwinds and ripples beyond</span
                      ></a
                    >
                  </h6>
                  <span class="posted-by"
                    ><a href="#">Steven Adair</a>,
                    <a href="#">Joel de la Garza</a>, and
                    <a href="#">Sonal Chokshi</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"
                      ><span>the machine that made the vaccine</span></a
                    >
                  </h6>
                  <span class="posted-by"
                    ><a href="#">Stephane Bancel</a>,
                    <a href="#">Jorge Conde</a>, and
                    <a href="#">Hanne Winarsky</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"
                      ><span>the machine that made the vaccine</span></a
                    >
                  </h6>
                  <span class="posted-by"
                    ><a href="#">Stephane Bancel</a>,
                    <a href="#">Jorge Conde</a>, and
                    <a href="#">Hanne Winarsky</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"
                      ><span>Tiktok and ‘seeing like an algorithm’</span></a
                    >
                  </h6>
                  <span class="posted-by"
                    ><a href="#">Eugene Wei</a> and
                    <a href="#">Sonal Chokshi</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"
                      ><span
                        >the factory of the future with chris power</span
                      ></a
                    >
                  </h6>
                  <span class="posted-by"
                    ><a href="#">Steph Smith</a>, and
                    <a href="#">Chris Power</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"
                      ><span>Balaji Srinivasan: yhe network state</span></a
                    >
                  </h6>
                  <span class="posted-by"
                    ><a href="#">Steph Smith</a>, and
                    <a href="#">Balaji Srinivasan</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"
                      ><span
                        >why technology still matters with Marc Andreessen</span
                      ></a
                    >
                  </h6>
                  <span class="posted-by"
                    ><a href="#">Steph Smith</a>, and
                    <a href="#">Marc Andreessen</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"
                      ><span
                        >the data highway above with privateer’s steve wozniak,
                        Alex Fielding, and Dr. Moriba Jah</span
                      ></a
                    >
                  </h6>
                  <span class="posted-by"
                    ><a href="#">Steph Smith</a>, <a href="#">Steve Wozniak</a>,
                    <a href="#">Alex Fielding</a>, and
                    <a href="#">Dr. Moriba Jah</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="article article-searched-result">
              <span class="category-title">06.06.22</span>
              <div class="r-col">
                <div class="r-content">
                  <h6>
                    <a href="#"
                      ><span
                        >AI and the creator economy with Karen Cheng</span
                      ></a
                    >
                  </h6>
                  <span class="posted-by"
                    ><a href="#">Steph Smith</a>, and
                    <a href="#">Karen X Cheng</a></span
                  >
                  <ul class="tags">
                    <li>
                      <a class="tag small-tag" href="#">Crypto & Web3</a>
                    </li>
                    <li><a class="tag small-tag" href="#">Blockchain</a></li>
                    <li><a class="tag small-tag" href="#">NFTs</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "SearchResultsPage",
  head() {
    return {
      title: "Search Results",
    };
  },
  data() {
    return {
      filterFocusAreaToggle: false,
      filterTopicToggle: false,
      filterSeriesToggle: false,
    };
  },
  methods: {
    toggleFilters(filterItem = "filterFocusAreaToggle") {
      if (filterItem == "filterFocusAreaToggle") {
        this.filterFocusAreaToggle = !this.filterFocusAreaToggle;
      } else if (filterItem == "filterTopicToggle") {
        this.filterTopicToggle = !this.filterTopicToggle;
      } else if (filterItem == "filterSeriesToggle") {
        this.filterSeriesToggle = !this.filterSeriesToggle;
      }
    },
  },
};
</script>
