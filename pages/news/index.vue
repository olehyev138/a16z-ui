<template>
  <div id="wrapper">
    <header class="hero hero--sm hero--announcement">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-hero-announcement.svg"
          />
          <source srcset="@/assets/images/bg-hero-announcement-sm.svg" />
          <img src="@/assets/images/bg-hero-announcement.svg" alt="" />
        </picture>
        <div class="highlight-display hld--amber">
          <h1>Announcements</h1>
        </div>
      </div>
    </header>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">Featured</span>
      </div>
    </div>

    <section class="featured-cards-announcement">
      <div class="container">
        <div class="cards-slider">
          <a href="#" class="card-news decor-style-1">
            <div class="content-t">
              <h5>
                <span>Crypto Startup </span>
                <span>School: relaunched</span>
                <span>and expanded</span>
              </h5>
            </div>
            <div class="content-b">
              <time datetime="2022-11-12">12.11.22</time>
            </div>
          </a>
          <a href="#" class="card-news purple decor-style-2">
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
          <a href="#" class="card-news maroon decor-style-3">
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
          <a href="#" class="card-news teal decor-style-4">
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
        <span class="block-title">Latest</span>
      </div>
    </div>

    <section class="featured">
      <div class="container">
        <div class="article has-img">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">12.10.22 / twitter</span>
            </div>
            <div class="col-sm-7">
              <h6>
                <a href="#"
                  >“Co-CEO at @titanvest, @virtualclay, and a16z's @illscience &
                  @aleximm dive into how the fintech market is changing. They
                  tal...”</a
                >
              </h6>
              <span class="posted-by"> <a href="#">@handlename</a></span>
            </div>
            <div class="col-sm-3 col-md-2 col-md-offset-1">
              <div class="img">
                <a href="#"
                  ><img src="@/assets/images/card-img-01.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">12.10.22 / blog</span>
            </div>
            <div class="col-sm-7">
              <h6>
                <a href="#"
                  >building partnerships with NFT projects and communities</a
                >
              </h6>
              <span class="posted-by">
                <a href="#">Alex Immerman</a> &
                <a href="#">Justin Thaler</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & immerman</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">ntfs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article has-img">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">12.10.22 / blog</span>
            </div>
            <div class="col-sm-7">
              <h6>
                <a href="#">virtual society, blockchains, and the metaverse</a>
              </h6>
              <span class="posted-by">
                <a href="#">Alex Immerman</a> &
                <a href="#">Justin Thaler</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & immerman</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">ntfs</a></li>
              </ul>
            </div>
            <div class="col-sm-3 col-md-2 col-md-offset-1">
              <div class="img">
                <a href="#"
                  ><img src="@/assets/images/card-img-02.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="article has-img">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">12.10.22 / twitter</span>
            </div>
            <div class="col-sm-7">
              <h6>
                <a href="#"
                  >“today, @soundxyz_ is launching the sound protocol 👀 it's an
                  upgraded and permissionless”</a
                >
              </h6>
              <span class="posted-by">
                <a href="#">Alex Immerman</a> &
                <a href="#">Justin Thaler</a></span
              >
            </div>
            <div class="col-sm-3 col-md-2 col-md-offset-1">
              <div class="img">
                <a href="#"
                  ><img src="@/assets/images/card-img-03.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">12.10.22 / blog</span>
            </div>
            <div class="col-sm-7">
              <h6>
                <a href="#"
                  >SBC 22: field notes from science of blockchain 2022</a
                >
              </h6>
              <span class="posted-by">
                <a href="#">Alex Immerman</a> &
                <a href="#">Justin Thaler</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & immerman</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">ntfs</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">12.10.22 / twitter</span>
            </div>
            <div class="col-sm-7">
              <h6>
                <a href="#"
                  >“at first glance, many think of @sardine as another "point
                  solution in a sea of other KYC solutions" (fortunately
                  @astrange fixed this....”</a
                >
              </h6>
              <span class="posted-by"> <a href="#">@handlename</a></span>
            </div>
          </div>
        </div>
        <div class="article has-img">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">12.10.22 / blog</span>
            </div>
            <div class="col-sm-7">
              <h6>
                <a href="#"
                  >foundations for successful fintech infrastructure (and
                  several tradeoffs to consider).</a
                >
              </h6>
              <span class="posted-by">
                <a href="#">Alex Immerman</a> &
                <a href="#">Justin Thaler</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & immerman</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">ntfs</a></li>
              </ul>
            </div>
            <div class="col-sm-3 col-md-2 col-md-offset-1">
              <div class="img">
                <a href="#"
                  ><img src="@/assets/images/card-img-04.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="article has-img">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">12.10.22 / twitter</span>
            </div>
            <div class="col-sm-7">
              <h6>
                <a href="#"
                  >“yet another reason we are proud to work with @kimberlywtan
                  https://t.co/IrJtKAGHq9”</a
                >
              </h6>
              <span class="posted-by"> <a href="#">@handlename</a></span>
            </div>
            <div class="col-sm-3 col-md-2 col-md-offset-1">
              <div class="img">
                <a href="#"
                  ><img src="@/assets/images/card-img-05.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="article">
          <div class="row">
            <div class="col-sm-2">
              <span class="category-title">12.10.22 / blog</span>
            </div>
            <div class="col-sm-7">
              <h6>
                <a href="#"
                  >on paper to on-chain: how auction theory informs smart
                  contract implementations</a
                >
              </h6>
              <span class="posted-by">
                <a href="#">Alex Immerman</a> &
                <a href="#">Justin Thaler</a></span
              >
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto & immerman</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">ntfs</a></li>
              </ul>
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
  head() {
    return {
      title: "News",
    };
  },
  name: "NewsPage",
};
</script>
