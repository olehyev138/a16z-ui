<template>
  <div id="wrapper">
    <Header></Header>

    <main id="main">
      <div class="navigation-bar">
        <div class="container">
          <form class="search-form" action="#">
            <input
              type="search"
              :value="$nuxt.$route.query.term"
              placeholder="Search"
            />
            <button type="reset" value="clear"></button>
          </form>
        </div>
      </div>

      <div class="section-divider">
        <div class="container">
          <span class="block-title">(7)Results</span>
        </div>
      </div>

      <section class="search-results-section">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-md-2">
              <a href="#" class="filter-opener">filter</a>
              <div class="filter-boxes-wrap">
                <div class="filter-box">
                  <a href="#" class="search-topic active">Focus Areas</a>
                  <ul class="topic-list">
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
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">research</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">code & engineering</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="filter-box">
                  <a href="#" class="search-topic active">Formats</a>
                  <ul class="topic-list">
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" checked />
                        <span class="fake-input"></span>
                        <span class="fake-label">podcasts</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">code/tools</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">videos</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">posts/ articles</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">papers</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="filter-box">
                  <a href="#" class="search-topic active">topics/ themes</a>
                  <ul class="topic-list">
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
                        <span class="fake-label">cryptography</span>
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
                        <span class="fake-label">data availability</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">DeFi</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">gaming</span>
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
                        <span class="fake-label">media/ entertainment</span>
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
                        <span class="fake-label">NFTs</span>
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
                        <span class="fake-label">social</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">smart contracts</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">tokenomics</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">zero knowledge</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="filter-box">
                  <a href="#" class="search-topic active">series</a>
                  <ul class="topic-list">
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">state of crypto reports</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">the canons</span>
                      </label>
                    </li>
                    <li>
                      <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake-input"></span>
                        <span class="fake-label">more tk</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-8 col-md-10">
              <div class="article article-searched-result">
                <span class="category-title">article /</span>
                <div class="r-col">
                  <div class="r-content">
                    <h6>
                      <a href="#"
                        ><span>Crypto</span> Startup School: relaunched and
                        expanded</a
                      >
                    </h6>
                    <span class="posted-by">
                      <a href="#">Porter Smith</a> and
                      <a href="#">Andrew Hall</a></span
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
                <span class="category-title">article /</span>
                <div class="r-col">
                  <div class="r-content">
                    <h6>
                      <a href="#"
                        >a call to the SEC: treat <span>crypto</span> assets as
                        if clients matter</a
                      >
                    </h6>
                    <span class="posted-by">
                      <a href="#">Anish Acharya</a>,
                      <a href="#">Alex Immerman</a>, and
                      <a href="#">Clayton Gardner</a></span
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
                <span class="category-title">article /</span>
                <div class="r-col">
                  <div class="r-content">
                    <h6>
                      <a href="#"
                        >privacy-protecting <span>crypto</span> airdrops with
                        zero knowledge proofs</a
                      >
                    </h6>
                    <span class="posted-by">
                      <a href="#">Anish Acharya</a>,
                      <a href="#">Alex Immerman</a>, and
                      <a href="#">Clayton Gardner</a></span
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
                <span class="category-title">podcast /</span>
                <div class="r-col">
                  <div class="r-content">
                    <h6>
                      <a href="#"
                        >minimum viable participation in <span>crypto</span>:
                        games, costs, & accessibility</a
                      >
                    </h6>
                    <span class="posted-by">
                      <a href="#">Chris Dixon</a> and
                      <a href="#">Jeff Amico</a></span
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
                <span class="category-title">article /</span>
                <div class="r-col">
                  <div class="r-content">
                    <h6>
                      <a href="#"
                        ><span>crypto</span> & the infrastructure bill — fact
                        sheet</a
                      >
                    </h6>
                    <span class="posted-by">
                      <a href="#">Alex Immerman</a> &
                      <a href="#">Justin Thaler</a></span
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
                <span class="category-title">author /</span>
                <div class="r-col">
                  <div class="img">
                    <img src="@/assets/images/author-alex.png" alt="" />
                  </div>
                  <div class="r-content">
                    <h6>
                      <a href="#">Alex <span>Crypto</span></a>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="article article-searched-result">
                <span class="category-title">announcement /</span>
                <div class="r-col">
                  <div class="r-content">
                    <h6>
                      <a href="#">Alex <span>Crypto</span></a>
                    </h6>
                    <span class="posted-by"> <a href="#">Chris Dixon</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

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
};
</script>
