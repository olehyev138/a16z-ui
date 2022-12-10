<template>
  <div id="wrapper">
    <Header></Header>

    <header class="hero hero--sm hero--research">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-hero-research.svg"
          />
          <source srcset="@/assets/images/bg-hero-research-sm.svg" />
          <img src="@/assets/images/bg-hero-research.svg" alt="" />
        </picture>
        <div class="highlight-display hld--teal">
          <h1>Research</h1>
        </div>
      </div>
    </header>

    <section class="text-block text-block--research">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h5>
              a16z crypto research is a
              <a href="#" class="link-w-dotted-line">new</a> kind of
              multidisciplinary lab that bridges the worlds of academic theory
              and industry practice to advance the science and technology of the
              next generation of the internet.
            </h5>
          </div>
          <div class="col-sm-6">
            <div class="desc">
              <p>
                We work closely with builders and researchers in our portfolio
                companies, and with other industry experts, to address the most
                important challenges in crypto. Some of these include how
                decentralized computational infrastructure will scale and
                evolve; how token incentives in protocols should be structured
                to align all participants; how to translate cutting-edge
                cryptographic and privacy-preserving tools into practice; and
                how to best build token economies across games, social networks,
                and other applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider" v-if="!this.$util.isEmpty(our_focus_items)">
      <div class="container">
        <span class="block-title">our focus:</span>
      </div>
    </div>

    <section
      class="profile-featured"
      v-if="!this.$util.isEmpty(our_focus_items)"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-sm-4"
            v-for="(our_focus_item, i) in our_focus_items"
            :key="i"
          >
            <div class="box">
              <p>
                {{ our_focus_item.our_focus_text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider bg-grey">
      <div class="container">
        <span class="block-title">Featured</span>
      </div>
    </div>

    <section class="profile-featured bg-grey">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="box">
              <span class="category-title">article /</span>
              <h6><a href="#">on-chain trusted setup ceremony</a></h6>
              <div class="authors">
                <a href="#">Joseph Bonneau</a> and
                <a href="#">Valeria Nikolaenko</a>
              </div>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">nfts</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="box">
              <span class="category-title">article /</span>
              <h6>
                <a href="#"
                  >a call to the SEC: treat crypto assets as if clients
                  matter</a
                >
              </h6>
              <div class="authors">
                <a href="#">Justin Thaler</a>
              </div>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">nfts</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="box">
              <span class="category-title">article /</span>
              <h6>
                <a href="#">‘proof-of-merge’ NFT to commemorate ethereum</a>
              </h6>
              <div class="authors">
                <a href="#">Alex Immerman</a>
              </div>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">nfts</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">Resources</span>
      </div>
    </div>

    <section class="featured">
      <div class="container">
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-7">
              <h5><a href="#">survey of proof-of-stake blockchains</a></h5>
              <span class="posted-by"> <a href="#">Valeria Nikolaenko</a></span>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web3</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">ntfs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article has-img">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-7">
              <h5><a href="#">auction design for web3</a></h5>
              <span class="posted-by">
                <a href="#">Scott Kominers</a> and
                <a href="#">Tim Roughgarden</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web3</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">ntfs</a></li>
              </ul>
            </div>
            <div class="col-sm-3 col-md-2 col-md-offset-1">
              <div class="img">
                <a href="#">
                  <img src="@/assets/images/card-img-06.png" alt="" />
                  <span class="icon-play"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-7">
              <h5>
                <a href="#"
                  >NFT Sales: clearing the market, avoiding gas wars</a
                >
              </h5>
              <span class="posted-by">
                <a href="#">Scott Duke Kominers</a> and
                <a href="#">Tim Roughgarden</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web3</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">ntfs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-7">
              <h5>
                <a href="#">why blockchain performance is hard to measure</a>
              </h5>
              <span class="posted-by"> <a href="#">Joseph Bonneau</a></span>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web3</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">ntfs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">article /</span>
            </div>
            <div class="col-sm-7">
              <h5><a href="#">on-chain trusted setup ceremony</a></h5>
              <span class="posted-by">
                <a href="#">Valeria Nikolaenko</a> and
                <a href="#">Sam Ragsdale</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & web3</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">ntfs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">Team</span>
      </div>
    </div>

    <section class="text-block-subheadline">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <p class="p2">
              Each member of the a16z crypto research team is a leader in their
              field, with a track record of outstanding research in web3 and
              experience deploying their contributions in real-world
              applications
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="team">
      <div class="container">
        <ul class="highlight-list style--1">
            <li>
              <a href="#" class="card-people">
                <div class="avatar decor--1">
                  <img alt="Tim Roughgarden" src="https://a16zcrypto.com/wp-content/uploads/2022/05/Tim-Roughgarden-scaled-230x300.jpeg">
                </div>
                <div class="r-col">
                  <div class="name">Tim Roughgarden</div>
                  <span class="post">Head of research</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="card-people">
                <div class="avatar decor--2">
                  <img alt="Dan Boneh" src="https://a16zcrypto.com/wp-content/uploads/2022/04/Dan-Boneh-headshot-203x300.jpeg">
                </div>
                <div class="r-col">
                  <div class="name">Dan Boneh</div>
                  <span class="post">Senior Research Advisor</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="card-people">
                <div class="avatar decor--3">
                  <img alt="Valeria Nikolaenko" src="https://a16zcrypto.com/wp-content/uploads/2022/05/Valeria-Nikolaenko-1-300x300.png">
                </div>
                <div class="r-col">
                  <div class="name">Valeria Nikolaenko</div>
                  <span class="post">Research</span>
                </div>
              </a>
            </li>
            <li>
            <a href="#" class="card-people">
                <div class="avatar decor--4">
                  <img alt="Joseph Bonneau" src="https://a16zcrypto.com/wp-content/uploads/2022/07/Joseph-Bonneau-400x400-1-300x300.png">
                </div>
                <div class="r-col">
                  <div class="name">Joseph Bonneau</div>
                  <span class="post">Research</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="card-people">
                <div class="avatar decor--5">
                  <img alt="Scott Kominers" src="https://a16zcrypto.com/wp-content/uploads/2022/05/scottkominers_pfp-1-300x300.png">
                </div>
                <div class="r-col">
                  <div class="name">Scott Kominers</div>
                  <span class="post">Research</span>
                </div>
              </a>
            </li>
          </ul>
      </div>
    </section>

    <aside class="banner">
      <picture class="bg">
        <source
          media="(min-width: 768px)"
          srcset="@/assets/images/bg-banner-research.jpg"
        />
        <source srcset="@/assets/images/bg-banner-research-sm.jpg" />
        <img src="@/assets/images/bg-banner-research.jpg" alt="" />
      </picture>
      <div class="container">
        <div class="highlight-display">
          <h3 class="h1">
            A16z crypto <br />
            <span>Jobs</span>
          </h3>
        </div>
        <div class="btn-wrap">
          <a href="#" class="btn btn--white"
            >see available roles <i class="icon-arrow-right"></i
          ></a>
        </div>
      </div>
    </aside>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "ResearchPage",
  head() {
    return {
      title: "Research",
    };
  },

  data() {
    return {
      general_content: null,
      our_focus_items: [],
    };
  },
  methods: {
    async getResearchContent() {
      const response = await this.$api.researchpage.get();
      console.log(response);
      if (!this.$util.isEmpty(response)) {
        this.general_content = response;
        this.our_focus_items = response.our_focus_items;
      }
    },
  },
  mounted() {
    this.getResearchContent();
  },
};
</script>
