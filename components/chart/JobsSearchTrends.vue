<template>
  <section class="mt-3">
    <div id="chart" v-if="show">
      <apexchart
        type="bar"
        height="300"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </section>
</template>

<script>
import jobs_search_trends from "@/data/jobs_search_trends.json";
export default {
  name: "SearchInterest",
  data() {
    return {
      show: false,
      series: [
        {
          name: "Search Interest",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },

        fill: {
          colors: "#711858",
          opacity: 1,
          type: "solid",
        },

        dataLabels: {
          enabled: false,
        },

        stroke: {
          show: false,
          colors: ["#711858"],
          lineCap: "butt",
          width: 2,
        },
        grid: {
          show: true,
          row: {
            colors: ["#e5e5e5", "transparent"],
            opacity: 0,
          },
          column: {
            colors: ["#f8f8f8", "transparent"],
            opacity: 0,
          },
          xaxis: {
            lines: {
              show: true,
            },
          },
          borderColor: "#9da1a4d4",
          strokeDashArray: 4,
        },

        labels: [],
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          opposite: false,
          labels: {
            formatter: function (value) {
              if (value < 1e3) return value;
              if (value >= 1e3 && value < 1e6)
                return (value / 1e3).toFixed(1) + "K";
              if (value >= 1e6 && value < 1e9)
                return (value / 1e6).toFixed(1) + "M";
              if (value >= 1e9 && value < 1e12)
                return (value / 1e9).toFixed(1) + "B";
              if (value >= 1e12) return (value / 1e12).toFixed(1) + "T";
            },
          },
        },
        tooltip: {
          x: {
            formatter: function (value, timestamp) {
              var date = new Date(value);
              var newdate =
                date.getMonth() +
                1 +
                "/" +
                date.getDate() +
                "/" +
                date.getFullYear();
              return newdate; // The formatter function overrides format property
            },
          },
          y: {
            formatter: function (value) {
              return value.toLocaleString();
            },
          },
        },
      },
    };
  },
  methods: {
    aggregateDimensions(jobs_search_trends) {
      jobs_search_trends.forEach((element) => {
        this.chartOptions.labels = [
          ...this.chartOptions.labels,
          element["month"],
        ];
        this.series[0].data = [
          ...this.series[0].data,
          element["Search Interest"],
        ];
      });
      return [];
    },
  },
  async mounted() {
    await this.aggregateDimensions(jobs_search_trends);
    // console.log("aggregateDimensions ", JSON.stringify(this.series[0].data));
    this.show = true;
  },
};
</script>
<style>
.apexcharts-tooltip {
  background: #f3f3f3;
  width: auto !important;
}
</style>
