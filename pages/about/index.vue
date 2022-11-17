<template>
  <div id="wrapper">
    <header class="hero hero--sm hero--about">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-hero-about.svg"
          />
          <source srcset="@/assets/images/bg-hero-about-sm.svg" />
          <img src="@/assets/images/bg-hero-about.svg" alt="" />
        </picture>
        <div class="highlight-display">
          <h1>About</h1>
        </div>
      </div>
    </header>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">Thesis</span>
      </div>
    </div>

    <section class="text-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h4>
              a16z crypto is a venture capital fund that invests in crypto and
              web3 startups.
            </h4>
          </div>
          <div class="col-sm-6">
            <div class="desc">
              <p>
                We have over $7.6 billion assets under management across four
                funds, and have been investing in web3 – across all stages –
                since 2013, under the direction of founding general partner
                Chris Dixon, as part of <a href="#">Andreessen Horowitz</a>.
              </p>
              <p>
                The first era of the modern internet [~1990-2005] was about open
                protocols that were decentralized and community-governed. Most
                of the value accrued to the edges of the network: users and
                builders. The second era of the internet [~2005-2020] favored
                siloed, centralized services. Most of the value accrued to a
                handful of large tech companies. We are now beginning the third
                era of the internet – what many call web3 – which combines the
                decentralized, community-governed ethos of the first era with
                the advanced, modern functionality of the second era. This
                unlocks a new wave of creativity and entrepreneurship.
              </p>
              <p>
                a16z crypto supports our portfolio and the growth of web3
                through the following operations:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="highlight-list-wrap">
      <div class="container">
        <ul class="highlight-list three-cols">
          <li><a href="#" class="item">research organization</a></li>
          <li><a href="#" class="item">engineering and security teams</a></li>
          <li><a href="#" class="item">legal and regulatory teams</a></li>
          <li><a href="#" class="item">go-to-market networks</a></li>
          <li><a href="#" class="item">recruiting services</a></li>
          <li><a href="#" class="item">governance and infrastructure</a></li>
          <li>
            <a href="#" class="item"
              >educational content and media properties</a
            >
          </li>
          <li><a href="#" class="item">Crypto Startup School</a></li>
        </ul>
      </div>
    </section>

    <aside class="banner banner--about">
      <picture class="bg">
        <source
          media="(min-width: 768px)"
          srcset="@/assets/images/bg-banner-about.jpg"
        />
        <source srcset="@/assets/images/bg-banner-about-sm.jpg" />
        <img src="@/assets/images/bg-banner-about.jpg" alt="" />
      </picture>
      <div class="container">
        <div class="highlight-display">
          <h3 class="h1">Jobs</h3>
        </div>
        <div class="btn-wrap">
          <a href="#" class="btn btn--white"
            >a16z crypto jobs <i class="icon-arrow-right"></i
          ></a>
          <a href="#" class="btn btn--outline-white"
            >a16z portfolio jobs <i class="icon-arrow-right"></i
          ></a>
        </div>
      </div>
    </aside>

    <section class="highlight-list-wrap">
      <div class="container">
        <h3 class="caption-1">Offices</h3>
        <ul class="highlight-list three-cols">
          <li>
            <a href="#" class="item">Menlo Park</a>
            <address>
              2865 Sand Hill Road, <br />
              Suite 101 Menlo <br />
              CA 94025.
            </address>
          </li>
          <li>
            <a href="#" class="item">San Francisco</a>
            <address>
              180 Townsend St San <br />
              Francisco, CA 94107.
            </address>
          </li>
          <li>
            <a href="#" class="item">New York</a>
            <address>
              525 Broadway, <br />
              6th Floor New <br />
              York, NY, 10012.
            </address>
          </li>
          <li>
            <a href="#" class="item">Miami</a>
            <address>(awaiting content)</address>
          </li>
          <li>
            <a href="#" class="item">Los Angeles</a>
            <address>
              3000 Olympic <br />
              Boulevard Santa <br />
              Monica, CA 90404
            </address>
          </li>
        </ul>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>
