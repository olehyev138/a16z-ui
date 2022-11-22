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

    <div class="instructors-section">
      <div class="container">
        <h6>Instructors</h6>
        <ul class="instructors-list">
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-brian.png"
                  alt="Brian Armstrong"
                />
              </div>
              <div class="infos">
                <span class="name">Brian Armstrong</span>
                <span class="designation">Co-Founder and CEO, Coinbase</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-ben.png" alt="Ben Horowitz" />
              </div>
              <div class="infos">
                <span class="name">Ben Horowitz</span>
                <span class="designation">Co-Founder, a16z</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-chris.png" alt="Chris Dixon" />
              </div>
              <div class="infos">
                <span class="name">Chris Dixon</span>
                <span class="designation">Founder, a16z crypto</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-balaji.png"
                  alt="Balaji Srinivasan"
                />
              </div>
              <div class="infos">
                <span class="name">Balaji Srinivasan</span>
                <span class="designation">Angel investor and entrepreneur</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-katie.png" alt="Katie Haun" />
              </div>
              <div class="infos">
                <span class="name">Katie Haun</span>
                <span class="designation">Co-Founder, Haun Ventures</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-tom.png"
                  alt="Tom Preston-Werner"
                />
              </div>
              <div class="infos">
                <span class="name">Tom Preston-Werner</span>
                <span class="designation">Co-Founder, GitHub</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-robert.png"
                  alt="Robert Leshner"
                />
              </div>
              <div class="infos">
                <span class="name">Robert Leshner</span>
                <span class="designation">Co-Founder, Compound Labs</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-jesse.png"
                  alt="Jesse Walden"
                />
              </div>
              <div class="infos">
                <span class="name">Jesse Walden</span>
                <span class="designation">Co-Founder, Variant Fund</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-sam.png" alt="Sam Williams" />
              </div>
              <div class="infos">
                <span class="name">Sam Williams</span>
                <span class="designation">Co-Founder, Arweave</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-jutta.png"
                  alt="Jutta Steiner"
                />
              </div>
              <div class="infos">
                <span class="name">Jutta Steiner</span>
                <span class="designation">Co-Founder, Parity Technologies</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-dan.png" alt="Dan Boneh" />
              </div>
              <div class="infos">
                <span class="name">Dan Boneh</span>
                <span class="designation">Professor, Stanford University</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-brian-a.png"
                  alt="Brian Brooks"
                />
              </div>
              <div class="infos">
                <span class="name">Brian Brooks</span>
                <span class="designation">CEO, Bitfury</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-josh.png"
                  alt="Josh Williams"
                />
              </div>
              <div class="infos">
                <span class="name">Josh Williams</span>
                <span class="designation">Co-Founder and CEO, Forte</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-ali.png" alt="Ali Yahya" />
              </div>
              <div class="infos">
                <span class="name">Ali Yahya</span>
                <span class="designation">General Partner, a16z crypto</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-nitya.png"
                  alt="Nitya Subramanian"
                />
              </div>
              <div class="infos">
                <span class="name">Nitya Subramanian</span>
                <span class="designation">Former Product Lead, Celo</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-tina.png"
                  alt="Tina Ferguson"
                />
              </div>
              <div class="infos">
                <span class="name">Tina Ferguson</span>
                <span class="designation">Talent Partner, a16z crypto</span>
              </div>
            </a>
          </li>
        </ul>
        <h6>Advisors</h6>
        <ul class="instructors-list">
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-arianna.png"
                  alt="Arianna Simpson"
                />
              </div>
              <div class="infos">
                <span class="name">Arianna Simpson</span>
                <span class="designation">General Partner, a16z crypto</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-avicha.png"
                  alt="Avichal Garg"
                />
              </div>
              <div class="infos">
                <span class="name">Avichal Garg</span>
                <span class="designation"
                  >Co-Founder and Managing Partner, Electric Capital</span
                >
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-alex.png" alt="Alex Pruden" />
              </div>
              <div class="infos">
                <span class="name">Alex Pruden</span>
                <span class="designation">CEO, Aleo</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-jacob.png" alt="Jacob Horne" />
              </div>
              <div class="infos">
                <span class="name">Jacob Horne</span>
                <span class="designation">Co-Founder, Zora</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-soona.png" alt="Soona Amhaz" />
              </div>
              <div class="infos">
                <span class="name">Soona Amhaz</span>
                <span class="designation">Managing Partner, Volt Capital</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-morgan.png"
                  alt="Morgan Beller"
                />
              </div>
              <div class="infos">
                <span class="name">Morgan Beller</span>
                <span class="designation">General Partner, NFX</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-jil.png" alt="Jill Gunter" />
              </div>
              <div class="infos">
                <span class="name">Jill Gunter</span>
                <span class="designation">Co-Founder, Espresso Systems</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-dani.png" alt="Dani Grant" />
              </div>
              <div class="infos">
                <span class="name">Dani Grant</span>
                <span class="designation">Analyst, Union Square Ventures</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-michael.png"
                  alt="Michael Jordan"
                />
              </div>
              <div class="infos">
                <span class="name">Michael Jordan</span>
                <span class="designation">Investor, Galaxy Digital</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-spencer.png"
                  alt="Spencer Noon"
                />
              </div>
              <div class="infos">
                <span class="name">Spencer Noon</span>
                <span class="designation">Co-Founder, Variant Fund</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-niraj.png" alt="Niraj Pant" />
              </div>
              <div class="infos">
                <span class="name">Niraj Pant</span>
                <span class="designation"
                  >General Partner, Polychain Capital</span
                >
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-haseeb.png"
                  alt="Haseeb Qureshi"
                />
              </div>
              <div class="infos">
                <span class="name">Haseeb Qureshi</span>
                <span class="designation"
                  >Managing Partner, Dragonfly Capital</span
                >
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-dan-r.png"
                  alt="Dan Robinson"
                />
              </div>
              <div class="infos">
                <span class="name">Dan Robinson</span>
                <span class="designation">Research Partner, Paradigm</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img
                  src="@/assets/images/avatar-kartik.png"
                  alt="Kartik Talwar"
                />
              </div>
              <div class="infos">
                <span class="name">Kartik Talwar</span>
                <span class="designation"
                  >General Partner, ACapital Ventures</span
                >
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-nick.png" alt="Nick Tomaino" />
              </div>
              <div class="infos">
                <span class="name">Nick Tomaino</span>
                <span class="designation"
                  >Founder and General Partner, 1confirmation</span
                >
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-alok.png" alt="Alok Vasudev" />
              </div>
              <div class="infos">
                <span class="name">Alok Vasudev</span>
                <span class="designation">Co-Founder, Standard Crypto</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card-instructors">
              <div class="avatar">
                <img src="@/assets/images/avatar-linda.png" alt="Linda Xie" />
              </div>
              <div class="infos">
                <span class="name">Linda Xie</span>
                <span class="designation">Co-Founder, Scalar</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
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
