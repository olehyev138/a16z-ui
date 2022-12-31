import Vue from "vue";
import VueApexCharts from "vue-apexcharts";

import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";

Vue.component("apexchart", {
  extends: VueApexCharts,
});

Vue.component("VueRangeSlider", VueRangeSlider);
