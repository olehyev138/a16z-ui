<!-- Please remove this file from your project -->
<template>
  <footer id="footer">
    <div class="footer-t">
      <div class="container">
        <div class="box">
          <div class="row">
            <div class="col-md-6">
              <form class="subscribe-form" action="#">
                <div class="heading">
                  <h6><span>newsletter: web3 weekly</span></h6>
                  <p>
                    A newsletter from a16z crypto, and your go-to guide to the
                    next internet
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

            <div class="col-md-6">
              <div class="podcast-box">
                <div class="heading">
                  <h6><span>podcast: web3 with a16z</span></h6>
                  <p>
                    A show about building the next internet, from a16z crypto
                  </p>
                </div>

                <ul class="podcast-list">
                  <li>
                    <a href="#">
                      <span class="text">Apple music</span>
                      <span class="icon-apple-music"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="text">Spotify</span>
                      <span class="icon-spotify"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="text">Google podcast</span>
                      <span class="icon-podcasts"></span>
                    </a>
                  </li>
                  <li>
                    <a class="more" data-more data-outside href="#">
                      <span class="text">More</span>
                    </a>
                    <div class="slide">
                      <ul class="podcast-list">
                        <li>
                          <a href="#">
                            <span class="text">Apple music</span>
                            <span class="icon-apple-music"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="text">Spotify</span>
                            <span class="icon-spotify"></span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="text">Google podcasts</span>
                            <span class="icon-podcasts"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-m">
      <div class="container">
        <div class="follow-us-block">
          <div class="row">
            <div class="col-md-4">
              <span class="title">Follow us </span>
            </div>
            <div class="col-md-8">
              <ul class="follow-us">
                <li>
                  <a href="#"><span class="icon-twitter"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-youtube"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-github"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-linkedin"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-tiktok"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-discord"></span></a>
                </li>
                <li>
                  <a href="#"><span class="icon-farcaster"></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-nav-wrap">
          <div class="row items-center">
            <div class="col-md-4">
              <div class="logo">
                <a href="#"
                  ><img src="@/assets/images/logo01.svg" alt="a16zcrypto"
                /></a>
              </div>
            </div>
            <div class="col-md-8">
              <ul class="footer-nav">
                <li><a href="#">Research</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Crypto Startup School</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">a16z.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-b">
      <div class="container">
        <p>
          Any investments or portfolio companies mentioned, referred to, or
          described on this page are not representative of all investments in
          vehicles managed by a16z and there can be no assurance that the
          investments will be profitable or that other investments made in the
          future will have similar characteristics or results. Exits include
          current and former a16z portfolio companies which have been acquired
          as well as companies which have undergone an initial public offering
          or direct public offering of shares. Certain publicly traded companies
          on this list may still be held in Andreessen Horowitz funds. A list of
          investments made by funds managed by a16z is available here:
          https://a16z.com/investments/. Excluded from this list are investments
          for which the issuer has not provided permission for a16z to disclose
          publicly as well as unannounced investments in publicly traded digital
          assets. Further, the list of investments is updated monthly and as
          such may not reflect most recent a16z investments. Past results of
          Andreessen Horowitz’s investments, pooled investment vehicles, or
          investment strategies are not necessarily indicative of future
          results.
        </p>
        <p><span class="copyright">&copy; 2022 Andreessen Horowitz</span></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
