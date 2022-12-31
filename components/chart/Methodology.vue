<template>
  <section class="mt-5">
    <div class="row">
      <div class="col-12">
        <h2 class="titile">Methodology</h2>
      </div>
      <div class="col-12 mt-4">
        <p class="heading">
          The State of Crypto Index is calculated based on the
          dimension-weighted average monthly growth of all included categories.
        </p>
      </div>

      <div class="col-12 col-md-6 secleft">
        <p id="titleNote">Notes</p>

        <p>
          <span class="me-2">-</span>The index starts on January 1st, 2011 with
          a value of 100.
        </p>
        <p>
          <span class="me-2">-</span>TDimensions only contribute to the index
          once they meet their minimum threshold for inclusion.
        </p>
        <div>
          <span class="me-2">-</span>The default minimum threshold for inclusion
          parameters have been set based on these guiding principles:
          <p class="ms-3 mb-0">
            1. growth in the first 6 months should not exceed 1,000%
          </p>
          <p class="ms-3">
            2. the values should be at a level where the tracked dimension is
            reasonably relevant within the context of the broader crypto
            industry
          </p>
        </div>
        <p>
          <span class="me-2">-</span>The default weights and thresholds can be
          changed.
        </p>
      </div>
      <div class="col-12 col-md-6 secright">
        <p id="titleNote">How is the index calculated</p>
        <p>
          For each period (month), the qualifying dimensions are evaluated based
          on their percentage change from their first qualifying month. The
          dimension weights are then used to calculate the weighted average
          monthly change and resulting index value.
        </p>

        <div class="secrightlast">
          <p class="ms-3">
            In a mature state (i.e., recent months and going forward), the
            month-over-month change in the index value will reflect the weighted
            average month-over-month change across all the dimensions. However,
            the historical shape of the index and its values are heavily
            influenced by when new dimensions are introduced (which is
            determined by the minimum threshold for inclusion parameters).
          </p>
        </div>
      </div>
      <div class="col-12" style="margin-top: 50px">
        <Button
          class="discloserBtn"
          href="https://a16z.com/disclosures/"
          target="_blank"
          >See Disclosures <fa class="ms-2 icon" :icon="['fas', 'arrow-right']"
        /></Button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Methodology",
  layout: "new",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.titile {
  font-family: "Sixteen Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 100%;
  color: #2c2222;
  margin-bottom: 0px;
}
.heading {
  font-family: "ABC Favorit";
  font-style: normal;
  font-weight: 350;
  font-size: 18px;
  line-height: 140%;
  color: #2c2222;
}
#titleNote {
  border-top: 1.5px solid;
  border-top-style: dashed;
  line-height: 30px;
  font-family: "ABC Favorit Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #2c2222;
}
.secleft p {
  font-family: "ABC Favorit";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 140%;

  color: #2c2222;
}

.secrightlast {
  border-left: 2px solid #f1f1f1;
}
.secrightlast p {
  font-family: "ABC Favorit";
  font-style: normal;
  font-weight: 350;
  font-size: 12px;
  line-height: 140%;
  color: #2c2222;
}
.discloserBtn {
  font-family: "ABC Favorit Mono";
  font-style: normal;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.75;
  text-transform: lowercase;
  min-width: 64px;
  padding: 5px;
  border-radius: 4px;
  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: #2c2222;
}
.discloserBtn .icon {
  color: #2c2222;
}
.discloserBtn:hover {
  text-decoration: none;
  background-color: rgba(25, 118, 210, 0.04);
}

@media screen and (max-width: 767px) {
  .titile {
    font-size: 34px !important;
  }
}
</style>
