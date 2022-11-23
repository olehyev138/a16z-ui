<template>
  <div id="wrapper">
    <header class="hero hero--sm hero--startup">
      <div class="container">
        <picture class="bg">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/images/bg-banner-startup.svg"
          />
          <source srcset="@/assets/images/bg-banner-startup.svg" />
          <img src="@/assets/images/bg-banner-startup.svg" alt="" />
        </picture>
        <div class="highlight-display hld--pacific-custom">
          <h1><span>crypto</span><span>startup</span><span>school</span></h1>
        </div>
      </div>
    </header>
    <div class="text-block text-block--startup">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h4>
              Build your product alongside fellow founders and experienced
              entrepreneurs.
            </h4>
          </div>
          <div class="col-sm-6">
            <div class="desc">
              <p>
                Work with industry experts as you navigate the startup terrain.
                Leverage the a16z network to help take your product mainstream.
                <a href="#">Crypto Startup School (CSS23)</a> will take place in
                Los Angeles, CA from March 6 - May 26, 2023
              </p>
              <p>Sign up to stay in the loop on CSS news and updates:</p>
              <form class="subscribe-form" action="#">
                <div class="form-group">
                  <div class="input">
                    <input type="email" placeholder="Enter email address" />
                    <button type="submit" value="subscribe">subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">Course videos</span>
      </div>
    </div>
    <section class="videos-section">
      <div class="container">
        <ul class="videos">
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder16.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Brian Armstrong</span>
                <span class="title">building crypto companies</span>
              </div>
            </a>
            <div class="desctiption">
              <h6><a href="#">setting up and scaling a crypto company</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Brian Armstrong</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder17.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Josh Williams</span>
                <span class="title">blockchain fundamentals</span>
              </div>
            </a>
            <div class="desctiption">
              <h6><a href="#">Opportunities for Crypto in Gaming</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Josh Williams</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder18.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Chris Dixon</span>
                <span class="title">the potential of crypto</span>
              </div>
            </a>
            <div class="desctiption">
              <h6><a href="#">crypto networks and why they matter</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Chris Dixon</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder19.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Balaji Srinivasan</span>
                <span class="title">the future of apps</span>
              </div>
            </a>
            <div class="desctiption">
              <h6><a href="#">applications: today & 2025</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Balaji Srinivasan</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder20.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Josh Williams</span>
                <span class="title">gaming crypto</span>
              </div>
            </a>
            <div class="desctiption">
              <h6><a href="#">opportunities for crypto in gaming</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Josh Williams</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder21.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Ali Yahya</span>
                <span class="title">economic flywheels</span>
              </div>
            </a>
            <div class="desctiption">
              <h6><a href="#">business models and value capture</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Ali Yahya</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder22.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Sam Williams</span>
                <span class="title">incentive engineering</span>
              </div>
            </a>
            <div class="desctiption">
              <h6><a href="#">cryptoeconomics 101</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Sam Williams</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder23.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name"
                  >Tom Preston-Werner & Chris Dixon</span
                >
                <span class="title">developer evangelism</span>
              </div>
            </a>
            <div class="desctiption">
              <h6><a href="#">developer community building</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Tom Preston-Werner</a> and
                <a href="#">Chris Dixon</a></span
              >
            </div>
          </li>
          <li>
            <a href="#" class="video">
              <img
                src="@/assets/images/video-placeholder24.jpg"
                alt="image description"
              />
              <span class="btn-play"></span>
              <div class="video-info">
                <span class="instructor-name">Nitya Subramanian</span>
                <span class="title">protocols vs products</span>
              </div>
            </a>
            <div class="desctiption">
              <h6><a href="#">protocol to product</a></h6>
              <span class="instructor"
                >instructor: <a href="#">Nitya Subramanian</a></span
              >
            </div>
          </li>
        </ul>
      </div>
    </section>
    <div class="sticky-bar">
      <div class="container">
        <ul class="sticky-nav">
          <li class="title">curriculum by year</li>
          <li>2020</li>
          <li class="active">2023</li>
        </ul>
      </div>
    </div>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">Curriculum </span>
      </div>
    </div>
    <section class="curriculums">
      <div class="container">
        <div class="intro">
          <h6>
            We plan to cover the following topics through lectures, mentor
            office hours, and founder talks:
          </h6>
        </div>
        <ul class="curriculums-list">
          <li>
            <span class="count">01 /</span>
            <h6><a href="#">web3 big picture</a></h6>
          </li>
          <li>
            <span class="count">02 /</span>
            <h6><a href="#">protocol development</a></h6>
          </li>
          <li>
            <span class="count">03 /</span>
            <h6><a href="#">cryptographic and mechanism design tools</a></h6>
          </li>
          <li>
            <span class="count">04 /</span>
            <h6><a href="#">web3 go-to-market</a></h6>
          </li>
          <li>
            <span class="count">05 /</span>
            <h6><a href="#">state of crypto regulation</a></h6>
          </li>
          <li>
            <span class="count">06 /</span>
            <h6><a href="#">legal design & the role of decentralization</a></h6>
          </li>
          <li>
            <span class="count">07 /</span>
            <h6><a href="#">company building in web3</a></h6>
          </li>
          <li>
            <span class="count">08 /</span>
            <h6>
              <a href="#">community building & decentralized organizations</a>
            </h6>
          </li>
          <li>
            <span class="count">09 /</span>
            <h6><a href="#">smart contract & custody security</a></h6>
          </li>
          <li>
            <span class="count">10 /</span>
            <h6><a href="#">branding & design</a></h6>
          </li>
          <li>
            <span class="count">11 /</span>
            <h6><a href="#">fundraising best practices</a></h6>
          </li>
        </ul>
        <div class="curriculums-footer">
          <p>
            *The final curriculum and instructor list are coming soon. In the
            meantime, we will be sharing program updates on our social channels.
          </p>
        </div>
      </div>
    </section>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">Instructors & Advisors</span>
      </div>
    </div>
    <Instructors></Instructors>
    <Advisors></Advisors>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">Course reader</span>
      </div>
    </div>
    <div class="course-reader">
      <div class="container">
        <div class="tab-navs-container">
          <div class="hold">
            <div class="tab-nav-hold">
              <ul class="tab-nav style--01">
                <li>
                  <a class="active" href="#" data-tab="tab1">introduction</a>
                </li>
                <li>
                  <a href="#" data-tab="tab2">Consensus & cryptographhy</a>
                </li>
                <li><a href="#" data-tab="tab3">Apps & developer docs</a></li>
                <li><a href="#" data-tab="tab4">business models</a></li>
                <li>
                  <a href="#" data-tab="tab5">Decentralisation & secruity</a>
                </li>
                <li><a href="#" data-tab="tab6">REgulation</a></li>
                <li><a href="#" data-tab="tab7">Fundraising</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-contents">
        <div class="container">
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6><a href="#">why decentralization matters</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
                >
              </div>
            </div>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6><a href="#">the future of trust</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
                >
              </div>
            </div>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6><a href="#">what comes after open source</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
                >
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
                    >past, present, future: from co-ops to crypto networks</a
                  >
                </h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
                >
              </div>
            </div>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6><a href="#">crypto glossary</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
                >
              </div>
            </div>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6><a href="#">how bitcoin actually works</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
                >
              </div>
            </div>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6><a href="#">bitcoin white paper</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
                >
              </div>
            </div>
          </div>
          <div class="article">
            <div class="row">
              <div class="col-sm-2">
                <span class="category-title">article /</span>
              </div>
              <div class="col-sm-10 col-md-8">
                <h6><a href="#">ethereum white paper</a></h6>
                <span class="posted-by">
                  <a href="#">Alex Immerman</a> &
                  <a href="#">Justin Thaler</a></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">Alumni</span>
      </div>
    </div>
    <div class="alumni-section">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <h6>
              Participants in our 2020 cohort have gone on to raise over $300M
              and have founded some of the industry's leading companies,
              including:
            </h6>
          </div>
          <div class="col-sm-6">
            <ul class="highlighted-list">
              <li>
                <h6><a class="highlight" href="#">Phantom</a></h6>
                <p>web3 wallet for safe and easy transaction</p>
              </li>
              <li>
                <h6><a class="highlight" href="#">Flashbots</a></h6>
                <p>R&D organization for mitigating MEV</p>
              </li>
              <li>
                <h6><a class="highlight" href="#">Goldfinch</a></h6>
                <p>credit protocol for emerging market loans</p>
              </li>
              <li>
                <h6><a class="highlight" href="#">Notional Finance</a></h6>
                <p>credit protocol for fixed rate loans</p>
              </li>
              <li>
                <h6><a class="highlight" href="#">Afriex</a></h6>
                <p>transfer app for cross-border payments</p>
              </li>
              <li>
                <h6><a class="highlight" href="#">Teller</a></h6>
                <p>credit protocol for B2B loans</p>
              </li>
              <li>
                <h6><a class="highlight" href="#">FanCraze</a></h6>
                <p>NFT marketplace for cricket fans</p>
              </li>
            </ul>
            <div class="info-text">
              <p>
                Participants have also landed in senior roles at companies
                including <a href="#">Uniswap</a>, <a href="#">Optimism</a>,
                <a href="#">FTX</a>, <a href="#">Variant</a>,
                <a href="#">a16z crypto</a>, <a href="#">Polygon</a>,
                <a href="#">Foundation</a>, <a href="#">Zora</a>,
                <a href="#">she256</a> and more.
              </p>
              <p>
                Members of the Spring 2023 cohort will join this growing alumni
                network and have access to a variety of ongoing resources and
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-divider">
      <div class="container">
        <span class="block-title">FAQ</span>
      </div>
    </div>
    <section class="faq">
      <div class="container">
        <ul class="faq-list">
          <li><a href="#" class="opener">What is Crypto Startup School?</a></li>
          <li>
            <a href="#" class="opener">Does the program include funding?</a>
          </li>
          <li><a href="#" class="opener">What are the other benefits?</a></li>
          <li>
            <a href="#" class="opener"
              >When and where does the program take place? Can I participate
              remotely?</a
            >
          </li>
          <li>
            <a href="#" class="opener">Who should apply for the program? </a>
          </li>
          <li>
            <a href="#" class="opener">How many companies will be accepted? </a>
          </li>
          <li>
            <a href="#" class="opener">How many companies will be accepted? </a>
          </li>
          <li>
            <a href="#" class="opener"
              >Are teams required to have a live product or company before
              applying?</a
            >
          </li>
          <li>
            <a href="#" class="opener"
              >Are teams required to have a live product or company before
              applying?</a
            >
          </li>
          <li>
            <a href="#" class="opener"
              >Can companies participate if they have already raised funding?</a
            >
          </li>
          <li>
            <a href="#" class="opener">What is the weekly time commitment?</a>
          </li>
          <li>
            <a href="#" class="opener"
              >What is the application and review process?</a
            >
          </li>
          <li>
            <a href="#" class="opener"
              >What happens at the end of the program?</a
            >
          </li>
          <li>
            <a href="#" class="opener"
              >Will you provide dedicated space for the teams to work out of in
              Los Angeles, CA?</a
            >
          </li>
          <!-- add [active] class on opener to show active state  -->
          <li>
            <a href="#" class="opener"
              >Do participants have to be US citizens?</a
            >
          </li>
        </ul>
        <div class="faq-footer">
          <p>
            Questions? Please email us at
            <a href="mailto:crypto-startup-school@a16z.com"
              >crypto-startup-school@a16z.com</a
            >
          </p>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "cryptoStartupSchoolFuture2023ContentPage",
  head() {
    return {
      title: "Crypto Startup School Future 2023 Content",
    };
  },
};
</script>
