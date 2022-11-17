<template>
  <div id="wrapper">
    <Header></Header>
    <section class="hero">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-hero-home.svg"
          />
          <source srcset="@/assets/images/bg-hero-home-sm.svg" />
          <img src="@/assets/images/bg-hero-home.svg" alt="" />
        </picture>
        <div class="row">
          <div class="col-md-8">
            <div class="highlight-display">
              <h2>we back bold entrepreneurs building the next internet</h2>
            </div>
            <div class="desc">
              <h6>
                a16z crypto is a venture capital fund that invests in crypto and
                web3 startups.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">Featured</span>
      </div>
    </div>
    <section class="featured">
      <div class="container">
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-10 col-md-8">
              <h5>
                <a href="#"
                  >toppling the internet’s accidental monarchs: how to design
                  web3 platform governance</a
                >
              </h5>
              <span class="posted-by">
                <a href="#">Porter Smith</a> and
                <a href="#">Andrew Hall</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">Crypto & Web3</a></li>
                <li><a class="tag small-tag" href="#">Blockchain</a></li>
                <li><a class="tag small-tag" href="#">NFTs</a></li>
                <li><a class="tag small-tag" href="#">WEB3</a></li>
                <li><a class="tag small-tag" href="#">Metaverse</a></li>
                <li><a class="tag small-tag" href="#">Blockchain</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">podcast /</span>
            </div>
            <div class="col-sm-10 col-md-8">
              <h5>
                <a href="#"
                  >crypto content: the metaverse, crypto, virtual society</a
                >
              </h5>
              <span class="posted-by"
                ><a href="#">Herman Nerula</a>, <a href="#">Elena Burger</a>,
                and <a href="#">Sonal Chokshi</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">Crypto & Web3</a></li>
                <li><a class="tag small-tag" href="#">Blockchain</a></li>
                <li><a class="tag small-tag" href="#">NFTs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-10 col-md-8">
              <h5>
                <a href="#">Crypto Startup School: relaunched and expanded</a>
              </h5>
              <span class="posted-by"
                ><a href="#">Chris Dixon</a> and
                <a href="#">Jeff Amico</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">Crypto & Web3</a></li>
                <li><a class="tag small-tag" href="#">Tech Trends</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="newsletter">
      <div class="container">
        <div class="inner">
          <div class="row">
            <div class="col-sm-6">
              <h3>
                <span class="inline-bg-black"
                  >web3 weekly: your guide to the next internet</span
                >
              </h3>
            </div>
            <div class="col-sm-5 col-sm-offset-1">
              <div class="txt">
                <p class="p1">
                  <span class="inline-bg-white"
                    >A weekly newsletter on the latest web3 research, writing,
                    and code</span
                  >
                </p>
              </div>
              <form class="subscribe-form style-1" action="#">
                <div class="form-group">
                  <div class="input">
                    <input type="email" placeholder="Enter email address" />
                    <button type="submit" value="Subscribe">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="announcement bg-grey">
      <div class="container">
        <div class="group-header has-dotted-border">
          <h6>announcements</h6>
          <a href="#" class="cta-w-arrow">see all</a>
        </div>
        <div class="announcement-cards">
          <a href="#" class="card-news decor-style-1">
            <div class="content-t">
              <h5>
                <span>Crypto Startup </span>
                <span>School: relaunched </span>
                <span>and expanded</span>
              </h5>
            </div>
            <div class="content-b">
              <time datetime="2022-11-12">12.11.22</time>
            </div>
          </a>
          <a href="#" class="card-news decor-style-2">
            <div class="content-t">
              <h5>
                <span>Richard </span>
                <span>Rosenblatt</span>
              </h5>
            </div>
            <div class="content-b">
              <time datetime="2022-11-12">12.11.22</time>
            </div>
          </a>
          <a href="#" class="card-news decor-style-3">
            <div class="content-t">
              <h5>
                <span>investing in</span>
                <span>PROOF</span>
              </h5>
            </div>
            <div class="content-b">
              <time datetime="2022-11-12">12.11.22</time>
            </div>
          </a>
          <a href="#" class="card-news decor-style-4">
            <div class="content-t">
              <div class="head">
                <span class="name">Jason Milionis</span>
                <span class="twiter-id">@handlehere</span>
              </div>
              <h5 class="sub-title">
                <span>We proudly contributed to the</span>
                <span>$165M Series B financing round</span>
                <span>that @uniswap Labs announced </span>
                <span>today...</span>
              </h5>
            </div>
            <div class="content-b">
              <time datetime="2022-11-12">12.11.22</time>
              <span class="icon-twitter"></span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">Catagories</span>
      </div>
    </div>

    <section class="categories">
      <div class="container">
        <div class="category-row">
          <div class="group-header bg-grey">
            <h6>law & policy</h6>
            <a href="#" class="cta-w-arrow">see all</a>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6>
                  <a href="#">zkDocs: zero-knowledge information sharing</a>
                </h6>
                <span class="posted-by"> <a href="#">Anthony Albanese</a></span>
              </div>
            </div>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">podcast /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6>
                  <a href="#"
                    >lightspeed democracy: what web3 organizations can learn
                    from the history of governance</a
                  >
                </h6>
                <span class="posted-by">
                  <a href="#">Joseph Bonneau</a> and
                  <a href="#">Valeria Nikolaenko</a></span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="category-row">
          <div class="group-header bg-grey">
            <h6>company building</h6>
            <a href="#" class="cta-w-arrow">see all</a>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6>
                  <a href="#"
                    >measuring SNARK performance: frontends, backends, and the
                    future</a
                  >
                </h6>
                <span class="posted-by"> <a href="#">Chris Dixon</a></span>
              </div>
            </div>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6>
                  <a href="#">supporting public goods with gitcoin grants</a>
                </h6>
                <span class="posted-by">
                  <a href="#">Nassim Eddequiouaq</a> and
                  <a href="#">Riyaz Faizullabhoy</a></span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="category-row">
          <div class="group-header bg-grey">
            <h6>research in practice</h6>
            <a href="#" class="cta-w-arrow">see all</a>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6><a href="#">on-chain trusted setup ceremony</a></h6>
                <span class="posted-by">
                  Maggie Hsu and <a href="#">Pyrs Carvolth</a></span
                >
              </div>
            </div>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">code drop /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6>
                  <a href="#"
                    >SBC 22: field notes from science of blockchain 2022</a
                  >
                </h6>
                <span class="posted-by"> <a href="#">Elena Burger</a></span>
              </div>
            </div>
          </div>
        </div>
        <div class="category-row">
          <div class="group-header bg-grey">
            <h6>tech trends</h6>
            <a href="#" class="cta-w-arrow">see all</a>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">report /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6>
                  <a href="#">wallet security: the ‘non-custodial’ fallacy</a>
                </h6>
                <span class="posted-by"><a href="#">Michael Zhu</a></span>
              </div>
            </div>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6>
                  <a href="#"
                    >on paper to on-chain: how auction theory informs
                    implementations</a
                  >
                </h6>
                <span class="posted-by"> <a href="#">Miles Jennings</a></span>
              </div>
            </div>
          </div>
        </div>
        <div class="category-row">
          <div class="group-header bg-grey">
            <h6>builder blocks</h6>
            <a href="#" class="cta-w-arrow">see all</a>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6>
                  <a href="#"
                    >a call to the SEC: treat crypto assets as if clients
                    matter</a
                  >
                </h6>
                <span class="posted-by"
                  ><a href="#">Scott Walker</a> and
                  <a href="#">Neel Maitra</a></span
                >
              </div>
            </div>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">repoort /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6>
                  <a href="#"
                    >LVR: quantifying the cost of providing liquidity to
                    automated market makers</a
                  >
                </h6>
                <span class="posted-by">
                  <a href="#">Jason Milionis</a>,
                  <a href="#">Ciamac Moallemi</a>,
                  <a href="#">Tim Roughgarden</a>, and
                  <a href="#">Anthony Lee Zhang</a></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">Themes</span>
      </div>
    </div>

    <section class="card-group-rail">
      <div class="container">
        <div class="rail-row">
          <div class="group-header has-dotted-border">
            <h6>all things zero knowledge</h6>
            <a href="#" class="cta-w-arrow">see all</a>
          </div>
          <div class="rail-slider">
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img01.jpg"
                      alt="image description"
                  /></a>
                </div>
                <h6>
                  <a href="#"
                    >lightspeed democracy: what web3 organizations can learn
                    from the history of governance</a
                  >
                </h6>
                <span class="posted-by"
                  ><a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
                >
              </div>
            </div>
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img02.png"
                      alt="image description"
                  /></a>
                </div>
                <h6>
                  <a href="#">zkDocs: zero-knowledge information sharing</a>
                </h6>
                <span class="posted-by"
                  ><a href="#">Elizabeth Harkavy</a>,
                  <a href="#">Eddy Lazzarin</a>, and
                  <a href="#">Arianna Simpson</a></span
                >
              </div>
            </div>
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img03.png"
                      alt="image description"
                  /></a>
                </div>
                <h6><a href="#">investing in irreverent labs</a></h6>
                <span class="posted-by"
                  ><a href="#">Ali Yahya</a> and
                  <a href="#">Chris Dixon</a></span
                >
              </div>
            </div>
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img04.png"
                      alt="image description"
                  /></a>
                </div>
                <h6>
                  <a href="#"
                    >web3 security: Attack Types and lessons learned</a
                  >
                </h6>
                <span class="posted-by"
                  ><a href="#">Riyaz Faizullabhoy</a> and
                  <a href="#">Matt Gleason</a></span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="rail-row">
          <div class="group-header has-dotted-border">
            <h6>web3: what you should already know</h6>
            <a href="#" class="cta-w-arrow">see all</a>
          </div>
          <div class="rail-slider">
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img05.png"
                      alt="image description"
                  /></a>
                </div>
                <h6>
                  <a href="#"
                    >status traps: learning from web2 social networks</a
                  >
                </h6>
                <span class="posted-by"
                  ><a href="#">Sriram Krishnan</a> and
                  <a href="#">Chris Dixon</a></span
                >
              </div>
            </div>
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img06.png"
                      alt="image description"
                  /></a>
                </div>
                <h6>
                  <a href="#"
                    >smart contract security: a simple checklist for Web3
                    developments</a
                  >
                </h6>
                <span class="posted-by"
                  ><a href="#">Daren Matsuoka</a>, <a href="#">Chris Dixon</a>,
                  <a href="#">Eddy Lazzarin</a>, and
                  <a href="#">Robert Hackett</a></span
                >
              </div>
            </div>
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img07.png"
                      alt="image description"
                  /></a>
                </div>
                <h6>
                  <a href="#">Generalized property tests for ERC4626 vaults</a>
                </h6>
                <span class="posted-by"
                  ><a href="#">Miles Jennings</a> and
                  <a href="#">David Kerr</a></span
                >
              </div>
            </div>
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img08.png"
                      alt="image description"
                  /></a>
                </div>
                <h6>
                  <a href="#"
                    >introducing ‘web3 with a16z’, a new podcast for anyone
                    interested in the future of the internet</a
                  >
                </h6>
                <span class="posted-by"><a href="#">Arianna Simpson</a></span>
              </div>
            </div>
          </div>
        </div>
        <div class="rail-row">
          <div class="group-header has-dotted-border">
            <h6>the world of NFTs</h6>
            <a href="#" class="cta-w-arrow">see all</a>
          </div>
          <div class="rail-slider">
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img09.png"
                      alt="image description"
                  /></a>
                </div>
                <h6><a href="#">why NFT creators are going cc0</a></h6>
                <span class="posted-by"><a href="#">Chris Dixon</a></span>
              </div>
            </div>
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img10.png"
                      alt="image description"
                  /></a>
                </div>
                <h6><a href="#">the can’t be evil NFT licenses</a></h6>
                <span class="posted-by"
                  ><a href="#">Chris Dixon</a> and
                  <a href="#">Mario Gabriele</a></span
                >
              </div>
            </div>
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img04.png"
                      alt="image description"
                  /></a>
                </div>
                <h6>
                  <a href="#">‘proof-of-merge’ NFT to commemorate ethereum</a>
                </h6>
                <span class="posted-by"
                  ><a href="#">Scott Duke Kominers</a></span
                >
              </div>
            </div>
            <div class="card-wrap">
              <span class="category-title">article /</span>
              <div class="card">
                <div class="img-hold">
                  <a href="#"
                    ><img
                      src="@/assets/images/card-img04.png"
                      alt="image description"
                  /></a>
                </div>
                <h6><a href="#">NFT’s to commemorate Ethereum</a></h6>
                <span class="posted-by"
                  ><a href="#">Miles Jennings</a> and
                  <a href="#">David Kerr</a></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tags-banner">
      <div class="container">
        <div class="tags-banner-box">
          <span class="block-title">popular tags</span>
          <ul class="tags">
            <li>
              <a href="#" class="tag white-tag">Crypto & Web3</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Code releases</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Fintech</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Currency</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Crypto & web3</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Currency</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Currency</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Technology</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">A16Z crypto</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Blockchain</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Design</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">NFTS</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">NFTS</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Blockchain</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Code releases</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">Technology</a>
            </li>
            <li>
              <a href="#" class="tag white-tag">...</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      apiData: [],
    };
  },
  mounted() {
    // this.$axios
    //   .get("http://wpheadless.test/wp-json/wp/v2/posts?_embed")
    //   .then((res) => {
    //     this.apiData = res.data;
    //     console.log(this.apiData);
    //   });
  },
};
</script>
