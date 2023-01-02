import Vue from "vue";
import VueApexCharts from "vue-apexcharts";

import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

Vue.component("VueSlider", VueSlider);

Vue.component("apexchart", {
  extends: VueApexCharts,
});
