<template>
  <div class="mt-5" v-if="show" style="mmin-height: 600px">
    <div class="row m-0 overallIndex">
      <div :class="mainDivWidth">
        <div class="row">
          <div class="col-12">
            <h3 class="chartTitle">
              Overall index
              <Tooltip
                bgColor="989aa5"
                iconColor="fff"
                title="Composite score based on Active Addresses, Transactions, Mobile Wallet Users, DEX Volume, NFT
                    Volume, Stablecoin Volume, and Transaction Fees Paid <br>-<br>See tooltips below for a description of each dimension."
              />
            </h3>
            <apexchart
              type="area"
              :height="chartHeight"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
          <div :class="mainDivChild" v-if="show">
            <InnovationIndex :height="chartHeight" />
          </div>
          <div :class="mainDivChild">
            <AdoptionIndex :height="chartHeight" />
          </div>
        </div>
      </div>
      <div class="col-3 p-0 indexParameter">
        <div class="px-3 pt-3 pb-0">
          <h3 class="titleInxPara">Index Parameters</h3>
          <hr />
        </div>
        <div class="px-2 pt-3 pb-0">
          <div class="row m-0 mb-3 align-items-baseline">
            <div class="col-2 text-left">2011</div>
            <div class="col-8 p-0"><div class="rule"></div></div>
            <div class="col-2 text-end">2022</div>
          </div>
        </div>
        <div class="content">
          <section class="innovationSec">
            <div class="row m-0 px-3 mt-3 mb-4">
              <div class="col-6 ps-0 text-start">
                <p class="m-0 titleInnovatio">Innovation</p>
              </div>
              <div class="col-6 pe-0 text-end">
                <p class="m-0 titleThreshold">Threshold</p>
              </div>
            </div>
            <div v-for="(inno, i) in innovation_rows" :key="i + 'inno'">
              <div
                class="row m-0 px-3 py-2 my-1"
                :class="[
                  indexParameterInnoActive == i ? 'indexParameterActive' : '',
                ]"
              >
                <div
                  class="col-6 ps-0 text-start dimensionTitle"
                  role="button"
                  @click="showSpecifiqChart(inno, i)"
                >
                  {{ inno.dimension }}
                </div>
                <div class="col-6 pe-0 text-right">
                  <input
                    type="number"
                    class="customInpNum"
                    v-model="inno.min_threshold_for_inclusion"
                    @input="updateThresholds(inno)"
                  />
                </div>
                <div class="col-12 p-0">
                  <vue-slider
                    :key="i + 'ics'"
                    :min="0"
                    :max="100"
                    tooltip="hover"
                    v-model="inno.dimension_weight"
                    @drag-end="updateWeights(inno)"
                    :tooltip-formatter="'{value}%'"
                    :rail-style="{ backgroundColor: '#dcdcdc' }"
                    :process-style="{ backgroundColor: '#711858' }"
                    :tooltip-style="{
                      backgroundColor: 'black',
                      borderColor: 'black',
                    }"
                  >
                    <template v-slot:dot="{ focus }">
                      <div :class="['custom-dot', { focus }]"></div>
                    </template>
                  </vue-slider>
                </div>
              </div>
            </div>
          </section>
          <section class="adaptionSec">
            <div class="row px-3 m-0 my-4">
              <div class="col-12 p-0">
                <p class="m-0 titleAdoption">Adoption</p>
              </div>
            </div>
            <div v-for="(adp, i) in adoption_rows" :key="i + 'adp'">
              <div
                class="row px-3 py-2 m-0 my-1"
                :class="[
                  indexParameterAdoActive == i ? 'indexParameterActive' : '',
                ]"
              >
                <div
                  class="col-6 ps-0 text-start dimensionTitle"
                  role="button"
                  @click="showSpecifiqChart(adp, i)"
                >
                  {{ adp.dimension }}
                </div>
                <div class="col-6 text-right pe-0">
                  <input
                    type="number"
                    class="customInpNum"
                    v-model="adp.min_threshold_for_inclusion"
                    @input="updateThresholds(adp)"
                  />
                </div>
                <div class="col-12 p-0">
                  <vue-slider
                    :key="i + 'ics'"
                    :min="0"
                    :max="100"
                    tooltip="hover"
                    v-model="adp.dimension_weight"
                    @drag-end="updateWeights(inno)"
                    :tooltip-formatter="'{value}%'"
                    :rail-style="{ backgroundColor: '#dcdcdc' }"
                    :process-style="{ backgroundColor: '#711858' }"
                    :tooltip-style="{
                      backgroundColor: 'black',
                      borderColor: 'black',
                    }"
                  >
                    <template v-slot:dot="{ focus }">
                      <div :class="['custom-dot', { focus }]"></div>
                    </template>
                  </vue-slider>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="row px-3 m-0">
          <div class="col-6 ps-0">
            <button class="btnC btnReset my-3">Reset</button>
          </div>
          <div class="col-6 pe-0">
            <button v-scroll-to="'#report'" class="btnC btnDownload my-3">
              Download
            </button>
          </div>
        </div>
      </div>
      <div :class="secondaryDivWidth" class="showSpicifiqChart px-4">
        <div class="row py-3 m-0">
          <div class="col-6 ps-0">
            <p class="mb-0">
              {{
                !$util.isEmpty(showSpecifiqChartData.category) &&
                showSpecifiqChartData.category + " /"
              }}
            </p>
          </div>
          <div class="col-6 pe-0 text-end">
            <fa
              role="button"
              @click="closeSpecifiqChart()"
              :icon="['fas', 'xmark']"
            />
          </div>
        </div>
        <h2>
          {{
            !$util.isEmpty(showSpecifiqChartData.dimension) &&
            showSpecifiqChartData.dimension
          }}
        </h2>
        <section>
          <p class="description">
            {{
              !$util.isEmpty(showSpecifiqChartData.description) &&
              showSpecifiqChartData.description
            }}
          </p>
          <keep-alive>
            <component v-bind:is="currentSelectedChartComponent"></component>
          </keep-alive>
          <div class="mt-md-5">
            <p class="mb-0 source">
              {{
                !$util.isEmpty(showSpecifiqChartData.source) &&
                showSpecifiqChartData.source
              }}
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import academic_publications from "@/data/academic_publications.json";
import active_addresses from "@/data/active_addresses.json";
import active_developers from "@/data/active_developers.json";
import contract_deployers from "@/data/contract_deployers.json";
import dex_volume from "@/data/dex_volume.json";
import interested_developers from "@/data/interested_developers.json";
import job_search_trends from "@/data/jobs_search_trends.json";
import mobile_wallet_maus from "@/data/mobile_wallet_maus.json";
import nft_volume from "@/data/nft_volume.json";
import stablecoin_volume from "@/data/stablecoin_volume.json";
import transaction_fees_paid from "@/data/transaction_fees_paid.json";
import transactions from "@/data/transactions.json";
import verified_smart_contracts from "@/data/verified_smart_contracts.json";
import web3_ethers_downloads from "@/data/web3_ethers_downloads.json";
export default {
  name: "OverallIndex",
  data() {
    return {
      value: 20,
      innovation_rows: [],
      adoption_rows: [],
      showSpecifiqChartData: [],
      indexParameterInnoActive: null,
      indexParameterAdoActive: null,
      currentSelectedChartComponent: "ActiveDevelopers",
      chartHeight: "350",
      mainDivWidth: "col-9",
      mainDivChild: "col-12 col-md-6",
      secondaryDivWidth: "d-none",
      show: false,
      series: [
        {
          name: "Index",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          type: "area",
          height: 230,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#24c5c9"],
        fill: {
          type: ["gradient"],
          opacity: [1, 0, 0],
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },

        stroke: {
          show: true,
          colors: ["#24C5C9", "#52D891", "#12335A"],
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
          yaxis: {
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
        },
      },
    };
  },

  methods: {
    showSpecifiqChart(val, i) {
      console.log("showSpecifiqChart");
      this.mainDivWidth = "col-5";
      this.secondaryDivWidth = "col-4";
      this.mainDivChild = "col-12 col-md-12";
      this.chartHeight = "230";
      this.chartOptions.chart.height = "230";

      this.showSpecifiqChartData = val;
      if (val.category.toLowerCase() == "innovation") {
        this.indexParameterInnoActive = i;
        this.indexParameterAdoActive = null;
      } else {
        this.indexParameterAdoActive = i;
        this.indexParameterInnoActive = null;
      }

      switch (val.dimension) {
        case "Active Developers":
          this.currentSelectedChartComponent = "ActiveDevelopers";
          break;
        case "Interested Developers":
          this.currentSelectedChartComponent = "InterestedDevelopers";
          break;
        case "Contract Deployers":
          this.currentSelectedChartComponent = "ContractDeployers";
          break;
        case "Verified Smart Contracts":
          this.currentSelectedChartComponent = "VerifiedSmartContracts";
          break;
        case "web3+ethers Downloads":
          this.currentSelectedChartComponent = "Web3EthersDownloads";
          break;
        case "Academic Publications":
          this.currentSelectedChartComponent = "AcademicPublications";
          break;
        case "Job Search Trends":
          this.currentSelectedChartComponent = "JobsSearchTrends";
          break;
        case "Active Addresses":
          this.currentSelectedChartComponent = "ActiveAddresses";
          break;
        case "Transactions":
          this.currentSelectedChartComponent = "Transactions";
          break;
        case "Mobile Wallet Users":
          this.currentSelectedChartComponent = "MobileWalletMaus";
          break;
        case "DEX Volume":
          this.currentSelectedChartComponent = "DexVolume";
          break;
        case "NFT Volume":
          this.currentSelectedChartComponent = "NftVolume";
          break;
        case "Stablecoin Volume":
          this.currentSelectedChartComponent = "StablecoinVolume";
          break;
        case "Transaction Fees Paid":
          this.currentSelectedChartComponent = "TransactionFeesPaid";
          break;
        default:
          this.currentSelectedChartComponent = "ActiveDevelopers";
          break;
      }
    },
    closeSpecifiqChart() {
      console.log("closeSpecifiqChart");
      this.mainDivWidth = "col-9";
      this.secondaryDivWidth = "d-none";
      this.mainDivChild = "col-12 col-md-6";
      this.chartHeight = "350";
      this.chartOptions.chart.height = "350";
      this.indexParameterInnoActive = null;
      this.indexParameterAdoActive = null;
    },
    getDimensionValues(dimension, value_name, dimension_weight, min_threshold) {
      // Get qualifying status
      for (var record = 0; record < dimension.length; record++) {
        if (dimension[record][value_name] >= min_threshold) {
          dimension[record]["qualifying"] = 1; // Above minimum threshold
        } else {
          if (record == 0) {
            dimension[record]["qualifying"] = 0; // First record, not qualifying
          } else if (dimension[record - 1]["qualifying"] == 1) {
            dimension[record]["qualifying"] = 1; // Previous record qualifies
          } else {
            dimension[record]["qualifying"] = 0; // Not qualifying
          }
        }
      }

      // Get anchor value
      for (var record = 0; record < dimension.length; record++) {
        if (dimension[record]["qualifying"] == 1 && record == 0) {
          dimension[record]["anchor_value"] = dimension[record][value_name];
        } else if (
          dimension[record]["qualifying"] == 1 &&
          dimension[record - 1]["qualifying"] == 0
        ) {
          dimension[record]["anchor_value"] = dimension[record][value_name];
        } else if (dimension[record]["qualifying"] == 0) {
          dimension[record]["anchor_value"] = 1; //doesn't matter what we set this to, just can't be zero
        } else {
          dimension[record]["anchor_value"] =
            dimension[record - 1]["anchor_value"];
        }
      }

      // Calculate MoM Growth
      for (var record = 0; record < dimension.length; record++) {
        if (record == 0) {
          dimension[record]["mom_growth"] = 0; // First month, assign growth = 0
        } else if (dimension[record - 1][value_name] == 0) {
          dimension[record]["mom_growth"] = 0; // Previous month is zero, assign growth = 0
        } else {
          dimension[record]["mom_growth"] =
            (dimension[record][value_name] -
              dimension[record]["anchor_value"]) /
            dimension[record]["anchor_value"];
        }
      }

      // Apply weights to MoM Growth
      for (var record = 0; record < dimension.length; record++) {
        dimension[record]["weighted_growth"] =
          dimension[record]["mom_growth"] *
          (dimension_weight / 100) *
          dimension[record]["qualifying"];
      }

      return dimension;
    },

    aggregateDimensions(
      active_developers,
      interested_developers,
      contract_deployers,
      verified_smart_contracts,
      web3_ethers_downloads,
      academic_publications,
      job_search_trends,
      active_addresses,
      transactions,
      mobile_wallet_maus,
      dex_volume,
      nft_volume,
      stablecoin_volume,
      transaction_fees_paid
    ) {
      const state = this.$store.state;

      var active_developers = this.getDimensionValues(
        active_developers,
        "Active Developers",
        state.dimension1Weight,
        state.dimension1Threshold
      );
      var interested_developers = this.getDimensionValues(
        interested_developers,
        "Interested Developers",
        state.dimension2Weight,
        state.dimension2Threshold
      );
      var contract_deployers = this.getDimensionValues(
        contract_deployers,
        "Contract Deployers",
        state.dimension3Weight,
        state.dimension3Threshold
      );
      var verified_smart_contracts = this.getDimensionValues(
        verified_smart_contracts,
        "Verified Smart Contracts",
        state.dimension4Weight,
        state.dimension4Threshold
      );
      var web3_ethers_downloads = this.getDimensionValues(
        web3_ethers_downloads,
        "web3+ethers Downloads",
        state.dimension5Weight,
        state.dimension5Threshold
      );
      var academic_publications = this.getDimensionValues(
        academic_publications,
        "Academic Publications",
        state.dimension6Weight,
        state.dimension6Threshold
      );
      var job_search_trends = this.getDimensionValues(
        job_search_trends,
        "Search Interest",
        state.dimension7Weight,
        state.dimension7Threshold
      );
      var active_addresses = this.getDimensionValues(
        active_addresses,
        "Active Addresses",
        state.dimension8Weight,
        state.dimension8Threshold
      );
      var transactions = this.getDimensionValues(
        transactions,
        "Transactions",
        state.dimension9Weight,
        state.dimension9Threshold
      );
      var mobile_wallet_maus = this.getDimensionValues(
        mobile_wallet_maus,
        "Mobile Wallet Users",
        state.dimension10Weight,
        state.dimension10Threshold
      );
      var dex_volume = this.getDimensionValues(
        dex_volume,
        "DEX Volume",
        state.dimension11Weight,
        state.dimension11Threshold
      );
      var nft_volume = this.getDimensionValues(
        nft_volume,
        "NFT Volume",
        state.dimension12Weight,
        state.dimension12Threshold
      );
      var stablecoin_volume = this.getDimensionValues(
        stablecoin_volume,
        "Stablecoin Volume",
        state.dimension13Weight,
        state.dimension13Threshold
      );
      var transaction_fees_paid = this.getDimensionValues(
        transaction_fees_paid,
        "Transaction Fees Paid",
        state.dimension14Weight,
        state.dimension14Threshold
      );

      var soc_index = new Array(active_developers.length);

      for (var record = 0; record < active_developers.length; record++) {
        soc_index[record] = {
          month: active_developers[record]["month"],
          weighted_growth:
            active_developers[record]["weighted_growth"] +
            interested_developers[record]["weighted_growth"] +
            contract_deployers[record]["weighted_growth"] +
            verified_smart_contracts[record]["weighted_growth"] +
            web3_ethers_downloads[record]["weighted_growth"] +
            academic_publications[record]["weighted_growth"] +
            job_search_trends[record]["weighted_growth"] +
            active_addresses[record]["weighted_growth"] +
            transactions[record]["weighted_growth"] +
            mobile_wallet_maus[record]["weighted_growth"] +
            dex_volume[record]["weighted_growth"] +
            nft_volume[record]["weighted_growth"] +
            stablecoin_volume[record]["weighted_growth"] +
            transaction_fees_paid[record]["weighted_growth"],
        };
        soc_index[record]["index_value"] =
          soc_index[record]["weighted_growth"] * 100;

        this.chartOptions.labels = [
          ...this.chartOptions.labels,
          active_developers[record]["month"],
        ];

        var posNum =
          soc_index[record]["weighted_growth"] * 100 > 0
            ? soc_index[record]["weighted_growth"] * 100
            : 0;

        this.series[0].data = [...this.series[0].data, posNum.toFixed(2)];
      }

      return soc_index;
    },
    createData(
      dimension,
      dimension_weight,
      min_threshold_for_inclusion,
      category,
      description,
      source
    ) {
      return {
        dimension: dimension,
        dimension_weight: dimension_weight,
        min_threshold_for_inclusion: min_threshold_for_inclusion,
        category: category,
        description: description,
        source: source,
      };
    },
    updateWeights(val) {
      if (val.dimension === "Active Developers") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION1WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "Interested Developers") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION2WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "Contract Deployers") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION3WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "Verified Smart Contracts") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION4WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "web3+ethers Downloads") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION5WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "Academic Publications") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION6WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "Job Search Trends") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION7WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "Active Addresses") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION8WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "Transactions") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION9WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "Mobile Wallet Users") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION10WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "DEX Volume") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION11WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "NFT Volume") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION12WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "Stablecoin Volume") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION13WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else if (val.dimension === "Transaction Fees Paid") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION14WEIGHT",
          payload: parseFloat(val.dimension_weight),
        });
      } else {
        console.log("Invalid dimension passed.");
      }
    },

    updateThresholds(val) {
      if (val.dimension === "Active Developers") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION1THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "Interested Developers") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION2THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "Contract Deployers") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION3THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "Verified Smart Contracts") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION4THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "web3+ethers Downloads") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION5THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "Academic Publications") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION6THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "Crypto/Web3 Job Search Trends") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION7THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "Active Addresses") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION8THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "Transactions") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION9THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "Mobile Wallet MAUs") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION10WEIGHT",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "DEX Volume") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION11THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "NFT Volume") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION12THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "Stablecoin Volume") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION13THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else if (val.dimension === "Transaction Fees Paid") {
        this.$store.dispatch("setDataIntoStore", {
          type: "SET_DIMENSION14THRESHOLD",
          payload: val.min_threshold_for_inclusion,
        });
      } else {
        console.log("Invalid dimension passed.");
      }
    },
    recalculateIndexes() {
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION1WEIGHT",
        payload: parseFloat(this.dim1Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION2WEIGHT",
        payload: parseFloat(this.dim2Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION3WEIGHT",
        payload: parseFloat(this.dim3Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION4WEIGHT",
        payload: parseFloat(this.dim4Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION5WEIGHT",
        payload: parseFloat(this.dim5Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION6WEIGHT",
        payload: parseFloat(this.dim6Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION7WEIGHT",
        payload: parseFloat(this.dim7Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION8WEIGHT",
        payload: parseFloat(this.dim8Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION9WEIGHT",
        payload: parseFloat(this.dim9Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION10WEIGHT",
        payload: parseFloat(this.dim10Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION11WEIGHT",
        payload: parseFloat(this.dim11Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION12WEIGHT",
        payload: parseFloat(this.dim12Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION13WEIGHT",
        payload: parseFloat(this.dim13Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION14WEIGHT",
        payload: parseFloat(this.dim14Weight),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION1THRESHOLD",
        payload: parseFloat(this.dim1Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION2THRESHOLD",
        payload: parseFloat(this.dim2Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION3THRESHOLD",
        payload: parseFloat(this.dim3Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION4THRESHOLD",
        payload: parseFloat(this.dim4Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION5THRESHOLD",
        payload: parseFloat(this.dim5Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION6THRESHOLD",
        payload: parseFloat(this.dim6Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION7THRESHOLD",
        payload: parseFloat(this.dim7Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION8THRESHOLD",
        payload: parseFloat(this.dim8Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION9THRESHOLD",
        payload: parseFloat(this.dim9Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION10THRESHOLD",
        payload: parseFloat(this.dim10Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION11THRESHOLD",
        payload: parseFloat(this.dim11Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION12THRESHOLD",
        payload: parseFloat(this.dim12Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION13THRESHOLD",
        payload: parseFloat(this.dim13Threshold),
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION14THRESHOLD",
        payload: parseFloat(this.dim14Threshold),
      });

      this.innovation_rows = this.getInnovationRows();
      this.adoption_rows = this.getAdoptionRows();
    },
    resetIndexes() {
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION1WEIGHT",
        payload: 15,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION2WEIGHT",
        payload: 10,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION3WEIGHT",
        payload: 5,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION4WEIGHT",
        payload: 5,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION5WEIGHT",
        payload: 5,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION6WEIGHT",
        payload: 7.5,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION7WEIGHT",
        payload: 2.5,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION8WEIGHT",
        payload: 10,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION9WEIGHT",
        payload: 5,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION10WEIGHT",
        payload: 10,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION11WEIGHT",
        payload: 5,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION12WEIGHT",
        payload: 5,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION13WEIGHT",
        payload: 5,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION14WEIGHT",
        payload: 10,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION1THRESHOLD",
        payload: 5000,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION2THRESHOLD",
        payload: 10000,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION3THRESHOLD",
        payload: 1000,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION4THRESHOLD",
        payload: 10000,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION5THRESHOLD",
        payload: 500000,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION6THRESHOLD",
        payload: 100,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION7THRESHOLD",
        payload: 10,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION8THRESHOLD",
        payload: 1000000,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION9THRESHOLD",
        payload: 10000000,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION10THRESHOLD",
        payload: 500000,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION11THRESHOLD",
        payload: 10000000000,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION12THRESHOLD",
        payload: 100000000,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION13THRESHOLD",
        payload: 10000000000,
      });
      this.$store.dispatch("setDataIntoStore", {
        type: "SET_DIMENSION14THRESHOLD",
        payload: 10000000,
      });
      this.innovation_rows = this.getInnovationRows();
      this.adoption_rows = this.getAdoptionRows();
    },
    getInnovationRows() {
      return [
        this.createData(
          "Active Developers",
          this.dim1Weight,
          this.dim1Threshold,
          "Innovation",
          "Number of unique Github users who have committed to or forked a public crypto repository during the month.",
          "Source: https://github.com/electric-capital/crypto-ecosystems."
        ),
        this.createData(
          "Interested Developers",
          this.dim2Weight,
          this.dim2Threshold,
          "Innovation",
          "Number of unique Github users who have starred, committed to, or forked a public crypto repository during the month.",
          "Source: https://github.com/electric-capital/crypto-ecosystems."
        ),
        this.createData(
          "Contract Deployers",
          this.dim3Weight,
          this.dim3Threshold,
          "Innovation",
          "Number of unique contract deployers across all tracked blockchains (EOAs only) during the month. Tracked blockchains include Ethereum, Polygon, Solana, Avalanche, Fantom, Celo, Optimism, and Arbitrum.",
          "Source: On-Chain Data."
        ),
        this.createData(
          "Verified Smart Contracts",
          this.dim4Weight,
          this.dim4Threshold,
          "Innovation",
          "The total number of smart contracts verified on Ethereum, Polygon, Fantom, Celo, Arbitrum, and Optimism during the month.",
          "Source: Etherscan and affiliated block explorers."
        ),
        this.createData(
          "web3+ethers Downloads",
          this.dim5Weight,
          this.dim5Threshold,
          "Innovation",
          "The number of npm downloads for web3.js and ethers.js developer libraries during the month.",
          "Source: npm."
        ),
        this.createData(
          "Academic Publications",
          this.dim6Weight,
          this.dim6Threshold,
          "Innovation",
          'The number of crypto-related acedemic publications released during the month. Based on a keyword search for "cryptocurrency", "blockchain", "bitcoin", or "ethereum".',
          "Source: dblp."
        ),
        this.createData(
          "Job Search Trends",
          this.dim7Weight,
          this.dim7Threshold,
          "Innovation",
          'The combined, normalized Interest over Time score of Worldwide searches for "crypto jobs", "cryptocurrency jobs", and "web3 jobs".',
          "Source: Google Trends."
        ),
      ];
    },
    getAdoptionRows() {
      return [
        this.createData(
          "Active Addresses",
          this.dim8Weight,
          this.dim8Threshold,
          "Adoption",
          "Number of unique active (sending) addresses across all tracked blockchains during the month. Tracked blockchains include Ethereum, Polygon, Solana, Avalanche, Fantom, Celo, Optimism, and Arbitrum.",
          "Source: On-Chain Data."
        ),
        this.createData(
          "Transactions",
          this.dim9Weight,
          this.dim9Threshold,
          "Adoption",
          "Number of successful transactions across all tracked blockchains during the month. Tracked blockchains include Ethereum, Polygon, Solana, Avalanche, Fantom, Celo, Optimism, and Arbitrum.",
          "Source: On-Chain Data."
        ),
        this.createData(
          "Mobile Wallet Users",
          this.dim10Weight,
          this.dim10Threshold,
          "Adoption",
          "Number of estimated mobile wallet active users across all tracked mobile wallets during the month. Tracked mobile wallets include Argent, Coinbase Wallet, Crypto.com DeFi Wallet, Exodus, Glow, Ledger Live, MetaMask, MEW Wallet, Phantom, Rainbow, Ronin Wallet, Trust Wallet, Valora, and Zerion.",
          "Source: Apptopia."
        ),
        this.createData(
          "DEX Volume",
          this.dim11Weight,
          this.dim11Threshold,
          "Adoption",
          "Total on-chain DEX volume (denominated in USD) during the month.",
          "Source: DeFi Llama."
        ),
        this.createData(
          "NFT Volume",
          this.dim12Weight,
          this.dim12Threshold,
          "Adoption",
          "Total on-chain NFT volume (denominated in USD) during the month.",
          "Source: CryptoSlam."
        ),
        this.createData(
          "Stablecoin Volume",
          this.dim13Weight,
          this.dim13Threshold,
          "Adoption",
          "Total on-chain stablecoin volume during the month.",
          "Source: Coin Metrics"
        ),
        this.createData(
          "Transaction Fees Paid",
          this.dim14Weight,
          this.dim14Threshold,
          "Adoption",
          "The aggregate amount of transaction fees (denominated in USD) paid by users across all tracked blockchains during the month. Tracked blockchains include Ethereum, Polygon, Solana, Avalanche, Fantom, Celo, Optimism, and Arbitrum.",
          "Source: On-Chain Data."
        ),
      ];
    },
  },
  async mounted() {
    await this.aggregateDimensions(
      active_developers,
      interested_developers,
      contract_deployers,
      verified_smart_contracts,
      web3_ethers_downloads,
      academic_publications,
      job_search_trends,
      active_addresses,
      transactions,
      mobile_wallet_maus,
      dex_volume,
      nft_volume,
      stablecoin_volume,
      transaction_fees_paid
    );
    // console.log("aggregateDimensions ", JSON.stringify(this.series[0].data));
    this.innovation_rows = await this.getInnovationRows();
    this.adoption_rows = await this.getAdoptionRows();
    this.show = true;
  },
  computed: {
    dim1Weight() {
      return this.$store.state.dimension1Weight;
    },
    dim2Weight() {
      return this.$store.state.dimension2Weight;
    },
    dim3Weight() {
      return this.$store.state.dimension3Weight;
    },
    dim4Weight() {
      return this.$store.state.dimension4Weight;
    },
    dim5Weight() {
      return this.$store.state.dimension5Weight;
    },
    dim6Weight() {
      return this.$store.state.dimension6Weight;
    },
    dim7Weight() {
      return this.$store.state.dimension7Weight;
    },
    dim8Weight() {
      return this.$store.state.dimension8Weight;
    },
    dim9Weight() {
      return this.$store.state.dimension9Weight;
    },
    dim10Weight() {
      return this.$store.state.dimension10Weight;
    },
    dim11Weight() {
      return this.$store.state.dimension11Weight;
    },
    dim12Weight() {
      return this.$store.state.dimension12Weight;
    },
    dim13Weight() {
      return this.$store.state.dimension13Weight;
    },
    dim14Weight() {
      return this.$store.state.dimension14Weight;
    },
    dim1Threshold() {
      return this.$store.state.dimension1Threshold;
    },
    dim2Threshold() {
      return this.$store.state.dimension2Threshold;
    },
    dim3Threshold() {
      return this.$store.state.dimension3Threshold;
    },
    dim4Threshold() {
      return this.$store.state.dimension4Threshold;
    },
    dim5Threshold() {
      return this.$store.state.dimension5Threshold;
    },
    dim6Threshold() {
      return this.$store.state.dimension6Threshold;
    },
    dim7Threshold() {
      return this.$store.state.dimension7Threshold;
    },
    dim8Threshold() {
      return this.$store.state.dimension8Threshold;
    },
    dim9Threshold() {
      return this.$store.state.dimension9Threshold;
    },
    dim10Threshold() {
      return this.$store.state.dimension10Threshold;
    },
    dim11Threshold() {
      return this.$store.state.dimension11Threshold;
    },
    dim12Threshold() {
      return this.$store.state.dimension12Threshold;
    },
    dim13Threshold() {
      return this.$store.state.dimension13Threshold;
    },
    dim14Threshold() {
      return this.$store.state.dimension14Threshold;
    },
  },
};
</script>
<style lang="scss" scoped>
.overallIndex {
  overflow: hidden;
  height: 850px;
}
.showSpicifiqChart {
  overflow: hidden;
  padding: 15px;
  background: $grey-light !important;
}
.chartTitle {
  font-family: $abcfavorit;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $grey-dark;
}
.indexParameter {
  height: 850px;
  overflow: hidden;
  background: $grey-01;
}
.indexParameter .content {
  overflow-y: auto;
  overflow-x: hidden;
  // padding: 0px 15px 15px 15px;
  height: 660px;
}
/* width */
.indexParameter .content::-webkit-scrollbar {
  width: 8px;
}

/* Track */
.indexParameter .content::-webkit-scrollbar-track {
  background: $grey-01;
}

/* Handle */
.indexParameter .content::-webkit-scrollbar-thumb {
  background: #888;
  border: 2px solid #888;
  border-radius: 8px;
  background-clip: padding-box;
}

/* Handle on hover */
.indexParameter .content::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.indexParameterActive {
  background: $grey-light;
}
.btnC {
  font-family: $abcfavorit-mono;
  font-style: normal;
  font-size: 12px;
  padding: 6px 19px 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  vertical-align: middle;
  height: 34px;
  position: relative;
  border: none;
  margin: 0;
  outline: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $grey-dark;
}
.btnC:focus {
  outline: none !important;
  box-shadow: none !important;
}
.btnReset {
  width: 100%;
  height: 40px;
  background: #ebebeb;
  border-radius: 2px;
}
.btnReset:hover {
  background: #e0e0e0;
}
.btnDownload {
  width: 100%;
  height: 40px;
  background: #dcdcdc;
  border-radius: 2px;
}
.btnDownload:hover {
  background: #e0e0e0;
}

/* section innovatio */
.titleInxPara {
  font-family: $abcfavorit-mono;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $grey-dark;
}
.titleInnovatio,
.titleThreshold,
.titleAdoption {
  font-family: $abcfavorit-mono;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $grey-dark;
}
.titleInnovatio:before {
  content: "";
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 10px;
  background: $mulberry !important;
}
.titleAdoption:before {
  content: "";
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 10px;
  background: $azure !important;
}
.dimensionTitle {
  font-family: "ABC Favorit";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 140%;
  text-transform: lowercase;
  color: $grey-dark;
}
.customInpNum {
  font-family: $abcfavorit-mono;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: right;
  color: $grey-dark;
}

.showSpicifiqChart p {
  font-family: $abcfavorit-mono;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $grey-dark;
}
.showSpicifiqChart h2 {
  font-family: $abcfavorit;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  color: $grey-dark;
}
.showSpicifiqChart .description {
  font-family: $abcfavorit !important;
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  line-height: 140%;
  color: $grey-dark;
}
.showSpicifiqChart .source {
  font-family: $abcfavorit !important;
  font-style: normal;
  font-weight: 350;
  font-size: 12px;
  line-height: 140%;
  color: $grey-dark;
}
.rule {
  height: 2px;
  background: #000;
}

.rule:before,
.rule:after {
  content: "";
  float: left;
  border: 2px solid $black !important;
  height: 10px !important;
  width: 10px !important;
  background: #000;
  margin-top: -4px;
}
.rule:after {
  float: right;
}
</style>
<style lang="scss">
.vue-slider-dot-tooltip-top {
  font-family: $abcfavorit-mono !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #ffffff !important;
  background: $black !important;
  padding: 5px !important;
  text-align: center !important;
}

.custom-dot {
  border: 2px solid $black !important;
  height: 8px !important;
  width: 8px !important;
  border-radius: 2px !important;
  background: #ffffff;
  cursor: pointer !important;
  transition: all 0.3s;
}
.custom-dot:hover {
  transform: rotateZ(45deg);
  background: $black;
}
.custom-dot.focus {
  border-radius: 50%;
}

.apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid $grey-dark !important;
  background: rgba(255, 255, 255, 0.96);
}
.apexcharts-tooltip {
  border-radius: 0px !important;
  box-shadow: 2px 2px 6px -4px #999;
  font-family: $abcfavorit-mono !important;
  font-style: normal !important;
  font-weight: 350 !important;
  font-size: 12px !important;
  color: $grey-dark !important;
}
.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: #ffffff !important;
  border-bottom: none !important;
  font-family: $abcfavorit-mono !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 10px !important;
  line-height: 100% !important;

  letter-spacing: 0.1em !important;
  text-transform: uppercase !important;

  color: $grey-dark !important;
}
</style>
