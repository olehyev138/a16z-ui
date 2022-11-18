<template>
  <div id="wrapper">
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
            <li><a class="active" href="#" data-tab="tab1">A16z crypto</a></li>
            <li><a href="#" data-tab="tab2">our companies</a></li>
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
      <div id="tab1">
        <section class="categories">
          <div class="container">
            <div class="category-row">
              <div class="group-header bg-grey">
                <h6>Bio + Health</h6>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">healthcare /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Associate, Business Development.</a></h5>
                    <span class="place"
                      >On-site / Menlo Park, California, United States.</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">bio + health /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Business Development Lead.</a></h5>
                    <span class="place"
                      >On-site / Menlo Park, California, United States.</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">bio + health /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Business Operations Manager.</a></h5>
                    <span class="place"
                      >On-site / Menlo Park, California, United States.</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">bio + health /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Executive Talent Partner.</a></h5>
                    <span class="place"
                      >On-site / Menlo Park, California, United States.</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">healthcare /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Public Policy Lead.</a></h5>
                    <span class="place"
                      >On-site / Menlo Park, California, United States.</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-row">
              <div class="group-header bg-grey">
                <h6>Community</h6>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">community /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Community Manager</a></h5>
                    <span class="place"
                      >On-site / Menlo Park, California, United States.</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">design /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Principal Product Designer</a></h5>
                    <span class="place"
                      >On-site / Menlo Park, California, United States.</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-row">
              <div class="group-header bg-grey">
                <h6>Consumer</h6>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">consumer /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Community Manager</a></h5>
                    <span class="place">
                      Partner, Consumer Growth Marketing</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">consumer /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5>
                      <a href="#">Partner, Consumer Growth Marketing, SEO</a>
                    </h5>
                    <span class="place"
                      >On-site / Menlo Park, California, United States.</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-row">
              <div class="group-header bg-grey">
                <h6>Crypto</h6>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">crypto /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">a16z Crypto Research Summer Intern</a></h5>
                    <span class="place">
                      Partner, Consumer Growth Marketing</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">crypto /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Member of Technical Staff</a></h5>
                    <span class="place"
                      >On-site / Menlo Park, California, United States.</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">crypto /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Senior Operations Manager</a></h5>
                    <span class="place"
                      >On-site / Menlo Park, California, United States.</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="category-row">
              <div class="group-header bg-grey">
                <h6>Games</h6>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">american Dynamism /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Analyst, Games Investing Team.</a></h5>
                    <span class="place">
                      Partner, Consumer Growth Marketing</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article">
                <div class="row">
                  <div class="col-sm-2">
                    <span class="category-title">games /</span>
                  </div>
                  <div class="col-sm-8 col-md-9">
                    <h5><a href="#">Business Development Partner.</a></h5>
                    <span class="place"
                      >On-site / Menlo Park, California, United States.</span
                    >
                  </div>
                  <div class="col-sm-2 col-md-1">
                    <span class="cta-wrap">
                      <a href="#" class="cta-w-arrow underlined">Button</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "CareesJobWithUs",
};
</script>
