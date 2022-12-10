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
        <div class="highlight-display hld--lavender">
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
            <li><a href="#" data-tab="tab1">A16z crypto</a></li>
            <li>
              <a class="active" href="#" data-tab="tab2">our companies</a>
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
      <div id="tab2">
        <div class="container">
          <ul class="highlight-list three-items has-divider">
            <li class="has-alphabet open">
              <a href="#" class="alphabet">C</a>
            </li>
            <li>
              <span class="title">Coinbase</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">D</a></li>
            <li>
              <span class="title">Dapper Labs</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">Dfinity</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">dYdX</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">E</a></li>
            <li>
              <span class="title">Element</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">F</a></li>
            <li>
              <span class="title">Farcaster</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">Fei</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">Foundation</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">H</a></li>
            <li>
              <span class="title">Halliday</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">I</a></li>
            <li>
              <span class="title">Iron Fish</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">Irreverent</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">L</a></li>
            <li>
              <span class="title">LayerZero</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">M</a></li>
            <li>
              <span class="title">MakerDAO</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">Manifold</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">Meta4 Capital</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">Mythical Games</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">N</a></li>
            <li class="has-alphabet"><a href="#" class="alphabet">N</a></li>
            <li>
              <span class="title">Near</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">NOD Games</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">O</a></li>
            <li>
              <span class="title">OnChain Studios</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">Optimism</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">P</a></li>
            <li>
              <span class="title">Phantom</span>
              <a href="#" class="cta-w-arrow underlined">277 available roles</a>
            </li>
            <li>
              <span class="title">PROOF</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">S</a></li>
            <li>
              <span class="title">Sky Mavis</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">Sounds.xyz</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">Spruce</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">T</a></li>
            <li>
              <span class="title">Tally Labs</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">Trust Token</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">V</a></li>
            <li>
              <span class="title">Valora</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li>
              <span class="title">VeeFriends</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
            <li class="has-alphabet"><a href="#" class="alphabet">Y</a></li>
            <li>
              <span class="title">Yuga Labs</span>
              <a href="#" class="cta-w-arrow underlined">27 available roles</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "CareersJobsWithCompanies",
  head() {
    return {
      title: "Careers jobs with companies",
    };
  },
};
</script>
