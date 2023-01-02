<template>
  <section class="mt-5">
    <div class="row">
      <div class="col-12">
        <h2 class="titile">Reports</h2>
      </div>
      <div class="col-12 mt-4">
        <p class="heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore magna aliqua.
        </p>
      </div>
      <div class="col-12 mt-4 mb-5">
        <button class="btn btn--sm">download report</button>
      </div>

      <div class="col-12 secleft">
        <p id="titleNote">Links of interest</p>

        <div class="row">
          <div class="col-12 col-md-3">
            <div class="card-news decor-style-1">
              <div class="content-t">
                <h5 class="sub-title">
                  <span>State of Crypto</span>
                  <span>2022</span>
                </h5>
              </div>
              <div class="content-b">
                <p class="mb-0">Report</p>
                <img src="@/assets/images/file.svg" alt="file" />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="card-news decor-style-2">
              <div class="content-t">
                <h5 class="sub-title">
                  <span>web3 with</span>
                  <span>15z crypto</span>
                </h5>
              </div>
              <div class="content-b">
                <p class="mb-0">Podcast</p>
                <img src="@/assets/images/podcast.svg" alt="file" />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="card-news decor-style-3">
              <div class="content-t">
                <h5 class="sub-title">
                  <span>inteoducing the</span>
                  <span>State of Crypto</span>
                  <span>Report</span>
                </h5>
              </div>
              <div class="content-b">
                <p class="mb-0">Article</p>
                <img src="@/assets/images/article.svg" alt="file" />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="card-news decor-style-4">
              <div class="content-t">
                <h5 class="sub-title">
                  <span>State of Crypto</span>
                  <span>2021</span>
                </h5>
              </div>
              <div class="content-b">
                <p class="mb-0">Report</p>
                <img src="@/assets/images/file.svg" alt="file" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Reports",
  layout: "new",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.titile {
  font-family: $sixteen-mono-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 100%;
  color: $grey-dark;
  margin-bottom: 0px;
}
.heading {
  font-family: $abcfavorit;
  font-style: normal;
  font-weight: 350;
  font-size: 18px;
  line-height: 140%;
  color: $grey-dark;
}

#titleNote {
  border-top: 1.5px solid;
  border-top-style: dashed;
  line-height: 30px;
  font-family: $abcfavorit-mono;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: $grey-dark;
}

.card-news {
  min-height: 296px;
  padding: 17px 17px;
  display: flex;
  flex-direction: column;
  background: $grey-light;
  margin: 8px 0 24px;
  position: relative;
}
.card-news .content-t {
  flex: 1;
  padding-bottom: 20px;
}
.card-news h5 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: $grey-dark;
  transition: color 0.3s ease-in-out;
  line-height: 1.2188;
  font-size: 32px;
  cursor: pointer;
}
.card-news h5 span {
  font-family: $abcfavorit;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  background: #fff;
  transition: background 0.3s ease-in-out;
  padding-left: 2px;
}
.card-news h5:hover {
  color: color(white);

  span {
    background: color(black, 3);
  }
  transition: background 0.3s ease-in-out;
}
.card-news .content-b {
  flex-basis: 0;
  flex-shrink: 0;
  font-family: $abcfavorit-mono;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  color: $grey-dark;
}

.card-news .content-b p {
  font-family: $abcfavorit-mono;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  color: $grey-dark;
}

.card-news:before {
  background: $grey-light;
}
.card-news:before {
  height: 8px;
  position: absolute;
  top: -8px;
  width: 62%;
  content: "";
  background: inherit;
}
.card-news.decor-style-1:before {
  left: 28%;
}
.card-news.decor-style-2:before {
  left: 6%;
}
.card-news.decor-style-3:before {
  left: 0;
}
.card-news.decor-style-4:before {
  right: 0;
  left: 30%;
}
@media screen and (max-width: 767px) {
  .titile {
    font-size: 44px !important;
  }
}
</style>
