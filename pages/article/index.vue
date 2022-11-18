<template>
  <div id="wrapper">
    <section class="article-single container">
      <header class="head">
        <div class="highlight-display hld--lemonchiffon">
          <h2>Supporting Public Goods with Gitcoin Grants</h2>
        </div>
        <p>
          <a href="#">Valeria Nikolaenko</a> and <a href="#">Sam Ragsdale</a>
        </p>
        <ul class="tags">
          <li><a class="tag small-tag" href="#">Crypto &amp; Web3</a></li>
          <li><a class="tag small-tag" href="#">Blockchain</a></li>
          <li><a class="tag small-tag" href="#">NFTs</a></li>
        </ul>
      </header>

      <div class="meta">
        <span class="caption-2">02.19.23</span>
        <div class="share">
          <a href="#" class="btn btn--outline-black btn--sm">Share</a>
        </div>
      </div>

      <!-- add active class on toc when clicked on toc-opener for mobile -->
      <div class="toc">
        <a href="#" class="toc-opener">Table of contents</a>
        <div class="inner">
          <h3 class="caption-2">Table of content</h3>
          <ul>
            <li class="active">
              <a href="#section-1">Understand your product value framework</a>
            </li>
            <li><a href="#section-2">Define your enterprise ICP</a></li>
            <li>
              <a href="#section-3"
                >Map your ICP to your product roadmap and sales motion</a
              >
            </li>
            <li><a href="#section-4">Hit enterprise product-market fit</a></li>
          </ul>
          <div class="info">
            <i class="icon-info"></i>
            <span
              >While you’re reading hover <strong>Bold</strong
              ><sup>(1)</sup> text for more info.</span
            >
          </div>
        </div>
      </div>

      <div class="article-right">
        <!-- tooltip after selection for sharing -->
        <!-- <div class="tooltip">
          <a href="#" class="twitter-share">
            <i class="icon-twitter"></i>
            <span>Share highlight</span>
          </a>
        </div> -->
        <h5>
          In a typical trusted setup ceremony, a group of participants will
          collaboratively generate a set of cryptographic parameters. Each
          participating party uses secret information, generated locally, to
          generate data that helps create these parameters.
        </h5>
        <h6 id="section-1">
          <mark>Understand your product value framework</mark>
        </h6>
        <p>
          The trusted setup ceremony is one of the pains – and excitements – of
          crypto communities. The goal of a ceremony is to generate trustworthy
          cryptographic keys for securing crypto wallets, blockchain protocols,
          or zero-knowledge proof systems. These (sometimes flamboyant)
          procedures are frequently the root of trust for a given project’s
          security, and they are therefore extremely important to get right.
          Blockchain projects run ceremonies in numerous creative ways –
          involving blowtorches, radioactive dust, and airplanes – but all share
          something in common: they all involve a centralized coordinator. With
          this work we demonstrate how to decentralize the process by replacing
          the centralized coordinator with a smart contract. In addition, we’re
          open-sourcing a library that allows anyone to run such a ceremony –
          known to crypto practitioners as a Kate-Zaverucha-Goldberg (KZG) or
          “<strong>powers-of-tau</strong><sup>(01)</sup>” ceremony – on the
          Ethereum chain1. Anyone can participate simply by paying the
          transaction fees!
        </p>
        <p>
          Our decentralized approach has limitations, but it’s still useful. Due
          to current on-chain data constraints, the size of the cryptographic
          parameters has to be kept short, i.e. no more than 64 KB. But the
          number of participants has no cap and people can keep submitting
          contributions in perpetuity. Applications for these short parameters
          include small zero-knowledge <strong>SNARKs</strong
          ><sup>(02)</sup> data- availability sampling, and Verkle trees.In a
          typical trusted setup ceremony, a group of participants will
          collaboratively generate a set of cryptographic parameters. Each
          participating party uses secret information, generated locally, to
          generate data that helps create these parameters. Proper setups ensure
          secrets do not leak, that secrets are only used as designated by the
          protocol, and that these secrets are completely destroyed at the end
          of the ceremony. As long as at least one party in the ceremony behaves
          honestly, is not compromised, and destroys its local secret, the
          entire setup can be considered secure. (Of course, that is assuming
          the math is correct and the code has no bugs..
        </p>
        <br />
        <p>
          Some of the most prominent ceremonies were run by Zcash, a
          privacy-oriented blockchain project. Participants in these ceremonies
          generated public parameters designed to allow Zcash users to construct
          and verify private crypto transactions. Six participants carried out
          the first Zcash ceremony, Sprout, in 2016. Two years later, crypto
          researcher <strong>Ariel Gabizon</strong><sup>(03)</sup>, now a Chief
          Scientist at Aztec, found a devastating bug in the design of the
          ceremony which was inherited from a foundational research paper. The
          vulnerability could have enabled attackers to create unlimited Zcash
          coins without being detected. The Zcash team kept the vulnerability
          secret for seven months until a system upgrade,
          <strong>Sapling</strong><sup>(04)</sup>, whose ceremony involved 90
          participants, addressed the issue. While an attack based on the
          security hole would not have affected the privacy of users’
          transactions, the prospect of infinite counterfeiting undermined
          Zcash’s security premise. (It’s theoretically impossible to know
          whether an attack took place.)
        </p>
        <p>
          Another notable example of a trusted setup is the perpetual
          “powers-of-tau” ceremony designed primarily for Semaphore, a privacy
          preserving technology for anonymous signaling on Ethereum. The setup
          used a BN254 elliptic curve and has had 71 participants so far. Other
          prominent projects later used this setup to run their own ceremonies
          on top, including Tornado.Cash (recently sanctioned by the U.S.
          government), Hermez network, and Loopring. Aztec ran a similar
          ceremony on a <strong>BLS12_3814</strong><sup>(05)</sup> elliptic
          curve with 176 participants for zkSync, a “layer two” Ethereum scaling
          solution that uses zero knowledge rollups. Filecoin, a decentralized
          data storage protocol, ran a ceremony with 19 and 33 participants, in
          first and second phase respectively, forking the original repo. Celo,
          a layer-1 blockchain, ran a ceremony for their light-client Plumo too.
        </p>

        <div class="card-related">
          <h4 class="caption-2">Related</h4>
          <p>
            <a href="#"
              >lightspeed democracy: what web3 organizations can learn from the
              history of governance</a
            >
          </p>
        </div>

        <p>
          In a typical trusted setup ceremony, a group of participants will
          collaboratively generate a set of cryptographic parameters. Each
          participating party uses secret information, generated locally, to
          generate data that helps create these parameters. Proper setups ensure
          secrets do not leak, that secrets are only used as designated by the
          protocol, and that these secrets are completely destroyed at the end
          of the ceremony. As long as at least one party in the ceremony behaves
          honestly, is not compromised, and destroys its local secret, the
          entire setup can be considered secure. (Of course, that is assuming
          the math is correct and the code has no bugs.)
        </p>
        <p>
          Some of the most prominent ceremonies were run by Zcash, a
          privacy-oriented blockchain project. Participants in these ceremonies
          generated public parameters designed to allow Zcash users to construct
          and verify private crypto transactions. Six participants carried out
          the first Zcash ceremony, Sprout, in 2016. Two years later, crypto
          researcher Ariel Gabizon, now a Chief Scientist at Aztec, found a
          devastating bug in the design of the ceremony which was inherited from
          a foundational research paper. The vulnerability could have enabled
          attackers to create unlimited Zcash coins without being detected. The
          Zcash team kept the vulnerability secret for seven months until a
          system upgrade, Sapling, whose ceremony involved 90 participants,
          addressed the issue. While an attack based on the security hole would
          not have affected the privacy of users’ transactions, the prospect of
          infinite counterfeiting undermined Zcash’s security premise. (It’s
          theoretically impossible to know whether an attack took place.)
        </p>

        <div class="wp-caption">
          <img src="@/assets/images/article-img01.jpg" alt="" />
          <p>
            Game concept from HyperLoot, a Loot Project derivative, showing
            multiple cc0 projects as playable characters within the fictional
            game
          </p>
        </div>

        <h6 id="section-2">
          <mark>Understanding the KZG or ‘powers-of-tau’ ceremony</mark>
        </h6>
        <p>
          The trusted setup ceremony is one of the pains – and excitements – of
          crypto communities. The goal of a ceremony is to generate trustworthy
          cryptographic keys for securing crypto wallets, blockchain protocols,
          or zero-knowledge proof systems. These (sometimes flamboyant)
          procedures are frequently the root of trust for a given project’s
          security, and they are therefore extremely important to get right.
          Blockchain projects run ceremonies in numerous creative ways –
          involving blowtorches, radioactive dust, and airplanes – but all share
          something in common: they all involve a centralized coordinator. With
          this work we demonstrate how to decentralize the process by replacing
          the centralized coordinator with a smart contract. In addition, we’re
          open-sourcing a library that allows anyone to run such a ceremony –
          known to crypto practitioners as a Kate-Zaverucha-Goldberg (KZG) or
          “<strong>powers-of-tau</strong><sup>(01)</sup>” ceremony – on the
          Ethereum chain1. Anyone can participate simply by paying the
          transaction fees!
        </p>
        <p>
          Our decentralized approach has limitations, but it’s still useful. Due
          to current on-chain data constraints, the size of the cryptographic
          parameters has to be kept short, i.e. no more than 64 KB. But the
          number of participants has no cap and people can keep submitting
          contributions in perpetuity. Applications for these short parameters
          include small zero-knowledge <strong>SNARKs</strong
          ><sup>(02)</sup> data- availability sampling, and Verkle trees.In a
          typical trusted setup ceremony, a group of participants will
          collaboratively generate a set of cryptographic parameters. Each
          participating party uses secret information, generated locally, to
          generate data that helps create these parameters. Proper setups ensure
          secrets do not leak, that secrets are only used as designated by the
          protocol, and that these secrets are completely destroyed at the end
          of the ceremony. As long as at least one party in the ceremony behaves
          honestly, is not compromised, and destroys its local secret,
        </p>

        <blockquote class="card-quote">
          <p>
            Focus on innovation and the potential of platforms. We generally
            don’t weigh in on speculative value.
          </p>
          <cite>
            <span>
              <span>First Lastname</span>
              <span>Job title / Additional info</span>
            </span>
            <a href="#" class="twitter-share">
              <i class="icon-twitter"></i>
              <span>Share</span>
            </a>
          </cite>
        </blockquote>

        <p>
          All of these ceremonies relied on a centralized coordinator. The
          coordinator is an individual or private server or some other entity
          who is entrusted to register and order participants, to act as a relay
          by forwarding information from the previous participant to the next,
          and to keep a centralized log of all communications for auditability
          purposes. The coordinator is typically also in charge of making the
          log available to the public in perpetuity; of course, it’s always a
          possibility with a centralized system for data to get lost or
          mismanaged. (Perpetual-powers-of-tau for example is stored on
          Microsoft Azure and Github.)
        </p>
        <p>
          It struck us as ironic that crypto projects must rely on centralized
          trusted setup ceremonies when decentralization is such a core tenet of
          the crypto ethos. So we decided to demonstrate the feasibility of
          running a small ceremony for perpetual-powers-of-tau directly on the
          Ethereum blockchain! The setup is fully decentralized, permissionless,
          censorship resistant, and is secure as long as any single one of the
          participants is honest [see disclaimers]. Participating in the
          ceremony costs only 292,600 to 17,760,000 gas (about $7 to $400 at
          current prices), depending on the size of the desired resulting
          parameters (in this case between 8 and 1024 powers-of-tau). (See the
          Table below for concrete costs – we go into more detail about these
          calculations later in the post.)
        </p>

        <div class="code">
          <img src="@/assets/images/placeholder-code.png" alt="" />
        </div>

        <p>
          Here is a example on inline code:
          <code>&lt;h1&gt;Codehere&lt;/h1&gt;</code> Due to current on-chain
          data constraints, the size of the cryptographic parameters has to be
          kept short, i.e. no more than 64 KB. But the number of participants
          has no cap and people can keep submitting contributions in perpetuity.
          Applications for these short parameters include small zero-knowledge
          SNARKs(02) data- availability sampling, and Verkle trees.In a typical
          trusted setup ceremony, a group of participants will collaboratively
          generate a set of cryptographic parameters. Each participating party
          uses secret information, generated locally, to generate data that
          helps create these parameters. Proper setups ensure secrets do not
          leak, that secrets are only used as designated by the protocol, and
          that these secrets are completely destroyed at the end of the
          ceremony. As long as at least one party in the ceremony behaves
          honestly, is not compromised, and destroys its local secret, the
          entire setup can be considered secure. (Of course, that is assuming
          the code has no bugs..)
        </p>

        <form class="subscribe-form banner-newsletter" action="#">
          <div class="heading">
            <h6><span>A16z crypto newsletter</span></h6>
            <p>
              A newsletter from a16z crypto, and your go-to guide to the next
              internet
            </p>
          </div>
          <div class="form-group">
            <div class="input">
              <input type="email" placeholder="Enter email address" />
              <button type="submit" value="Subscribe">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <div class="section-divider">
      <div class="container">
        <span class="block-title">Related</span>
      </div>
    </div>
    <section class="profile-featured">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="box">
              <span class="category-title">article /</span>
              <h6><a href="#">a legal framework for Web3</a></h6>
              <div class="authors">
                <a href="#">Sam Ragsdale</a>
              </div>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto &amp; web</a></li>
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
                  >LVR: quantifying the cost of providing liquidity to automated
                  market makers.</a
                >
              </h6>
              <div class="authors">
                <a href="#">Valeria Nikolaenko</a> and
                <a href="#">Sam Ragsdale</a>
              </div>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto &amp; web</a></li>
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
                <a href="#">Valeria Nikolaenko</a>
              </div>
              <ul class="tags">
                <li><a class="tag small-tag" href="#">crypto &amp; web</a></li>
                <li><a class="tag small-tag" href="#">blockchain</a></li>
                <li><a class="tag small-tag" href="#">nfts</a></li>
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
  name: "Article",
};
</script>
