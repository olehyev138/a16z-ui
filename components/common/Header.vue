<!-- Please remove this file from your project -->
<template>
  <header id="header">
    <div class="container">
      <div class="logo">
        <a href="#"><img src="~/assets/images/logo.svg" alt="a16zcrypto" /></a>
      </div>
      <div class="header-r">
        <a href="#" class="btn btn--sm">follow us</a>
        <button type="button" class="search">
          <span class="icon-search"></span>
        </button>
        <button type="button" class="menu nav-opener">
          <span class="icon-menu"></span>
        </button>
      </div>
    </div>

    <div class="menu-slide">
      <a href="#" class="menu-close icon-cross nav-opener"></a>
      <a href="#" class="menu-search icon-search search-opener"></a>
      <div class="inner">
        <div class="wrap">
          <nav>
            <span class="menu-title">menu</span>
            <ul class="nav">
              <li><a class="active" href="#">about</a></li>
              <li><a href="#">team</a></li>
              <li><a href="#">portfolio</a></li>
              <li><a href="#">jobs</a></li>
              <li>
                <a href="#" class="hasdrop-a">content</a>
                <div class="drop-menu">
                  <div class="i1">
                    <div class="inner">
                      <div class="wrap">
                        <div class="sub-menu-holder">
                          <div class="sub-menu">
                            <span class="menu-title">Focus Areas</span>
                            <ul>
                              <li><a href="#"><span>01 /</span> law & policy</a></li>
                              <li><a href="#"><span>02 /</span> company building</a></li>
                              <li><a href="#"><span>03 /</span> research in practice </a></li>
                              <li><a href="#"><span>04 /</span> tech trends</a></li>
                              <li><a href="#"><span>02 /</span> builder blocks</a></li>
                            </ul>
                          </div>
                          <div class="sub-menu">
                            <span class="menu-title">popular topics</span>
                            <ul>
                              <li><a href="#">decentralization</a></li>
                              <li><a href="#">zero knowledge</a></li>
                              <li><a href="#">security</a></li>
                              <li><a href="#">NFTs</a></li>
                              <li><a href="#">state of crypto</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div class="nav-footer">
            <form class="subscribe-form" action="#">
              <div class="form-group">
                <label for="sign-up">Newsletter sign up</label>
                <div class="input">
                  <input id="sign-up" type="email" placeholder="Enter email address">
                  <button type="submit" value="Subscribe">Subscribe</button>
                </div>
              </div>
            </form>
            <ul class="sign-in-with">
              <li><a href="#">twitter</a></li>
              <li><a href="#">github</a></li>
              <li><a href="#">linkedin</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="search-slide">
      <div class="search-bar">
        <button class="close search-opener"></button>
        <div class="inner">
          <div class="wrap">
            <form class="search-form" action="#">
              <label for="search" class="menu-title">search</label>
              <div class="input">
                <input id="search" type="email" placeholder="Search">
                <button type="submit" value="search">
                  <span class="icon-cross"></span>
                  <span class="icon-search"></span>
                </button>
              </div>
            </form>
            <div class="search-results">
              <ul>
                <li>
                  <span class="category-title">article /</span>
                  <span class="title"><a href="#"><span>Cryp</span>to Startup School: relaunched and expanded</a></span>
                </li>
                <li>
                  <span class="category-title">article /</span>
                  <span class="title"><a href="#">A Call to the SEC: Treat <span>Cryp</span>to Assets as if Clients Matter</a></span>
                </li>
                <li>
                  <span class="category-title">article /</span>
                  <span class="title"><a href="#">Privacy-Protecting <span>Cryp</span>to Airdrops with Zero Knowledge Proofs</a></span>
                </li>
                <li>
                  <span class="category-title">article /</span>
                  <span class="title"><a href="#">Minimum Viable Participation in <span>Cryp</span>to: Games, Costs, & Accessibility</a></span>
                </li>
                <li>
                  <span class="category-title">article /</span>
                  <span class="title"><a href="#"><span>Cryp</span>to & The Infrastructure Bill — Fact Sheet</a></span>
                </li>
                <li>
                  <span class="category-title">article /</span>
                  <span class="title"><a href="#">Fiat Meets <span>Cryp</span>to; Bigger, Bolder Acquisitions; David Swensen’s Legacy (May 2021 fintech newsletter)</a></span>
                </li>
              </ul>
              <a href="#" class="link">see more results</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
