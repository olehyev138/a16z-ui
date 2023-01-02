<!-- Please remove this file from your project -->
<template>
  <section class="mt-3">
    <div class="row">
      <div class="col-12 col-md-4 py-2 px-md-3 px-0">
        <button
          :class="
            calculate1MChange(aggregateData.length > 0 ? aggregateData : []) >=
            0
              ? 'performanceBtnUp'
              : 'performanceBtnDown'
          "
        >
          <fa
            :icon="[
              'fas',
              setUpDownArrow(
                calculate1MChange(aggregateData.length > 0 ? aggregateData : [])
              ),
            ]"
          />
          {{ calculate1MChange(aggregateData) }}% (1- month change)
        </button>
      </div>
      <div class="col-12 col-md-4 py-2 px-md-3 px-0">
        <button
          :class="
            calculate1YChange(aggregateData.length > 0 ? aggregateData : []) >=
            0
              ? 'performanceBtnUp'
              : 'performanceBtnDown'
          "
        >
          <fa
            :icon="[
              'fas',
              setUpDownArrow(
                calculate1YChange(aggregateData.length > 0 ? aggregateData : [])
              ),
            ]"
          />
          {{ calculate1YChange(aggregateData) }}% (1- year change)
        </button>
      </div>
      <div class="col-12 col-md-4 py-2 px-md-3 px-0">
        <button
          :class="
            calculate3YChange(aggregateData.length > 0 ? aggregateData : []) >=
            0
              ? 'performanceBtnUp'
              : 'performanceBtnDown'
          "
        >
          <fa
            :icon="[
              'fas',
              setUpDownArrow(
                calculate3YChange(aggregateData.length > 0 ? aggregateData : [])
              ),
            ]"
          />
          {{ calculate3YChange(aggregateData) }}% (3- year change)
        </button>
      </div>
    </div>
  </section>
</template>

<script>
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
import academic_publications from "@/data/academic_publications.json";
export default {
  name: "Performance",
  data() {
    return { aggregateData: [] };
  },
  methods: {
    getSizeOfDimensionWeights(month) {
      const state = this.$store.state;

      var dimension1Weight = state.dimension1Weight;
      var dimension2Weight = state.dimension2Weight;
      var dimension3Weight = state.dimension3Weight;
      var dimension4Weight = state.dimension4Weight;
      var dimension5Weight = state.dimension5Weight;
      var dimension6Weight = state.dimension6Weight;
      var dimension7Weight = state.dimension7Weight;
      var dimension8Weight = state.dimension8Weight;
      var dimension9Weight = state.dimension9Weight;
      var dimension10Weight = state.dimension10Weight;
      var dimension11Weight = state.dimension11Weight;
      var dimension12Weight = state.dimension12Weight;
      var dimension13Weight = state.dimension13Weight;
      var dimension14Weight = state.dimension14Weight;

      var dimension1Threshold = state.dimension1Threshold;
      var dimension2Threshold = state.dimension2Threshold;
      var dimension3Threshold = state.dimension3Threshold;
      var dimension4Threshold = state.dimension4Threshold;
      var dimension5Threshold = state.dimension5Threshold;
      var dimension6Threshold = state.dimension6Threshold;
      var dimension7Threshold = state.dimension7Threshold;
      var dimension8Threshold = state.dimension8Threshold;
      var dimension9Threshold = state.dimension9Threshold;
      var dimension10Threshold = state.dimension10Threshold;
      var dimension11Threshold = state.dimension11Threshold;
      var dimension12Threshold = state.dimension12Threshold;
      var dimension13Threshold = state.dimension13Threshold;
      var dimension14Threshold = state.dimension14Threshold;

      var sumOfQualifyingWeights = new Array(active_developers.length);

      for (var record = 0; record < active_developers.length; record++) {
        if (
          active_developers[record]["Active Developers"] >= dimension1Threshold
        ) {
          active_developers[record]["weight_contribution"] = dimension1Weight; // Above minimum threshold
          sumOfQualifyingWeights[record] = {
            month: active_developers[record]["month"],
            weight_1: active_developers[record]["weight_contribution"],
          };
        } else {
          if (record == 0) {
            active_developers[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record] = {
              month: active_developers[record]["month"],
              weight_1: 0,
            };
          } else if (
            active_developers[record - 1]["weight_contribution"] ==
            dimension1Weight
          ) {
            active_developers[record]["weight_contribution"] = dimension1Weight; // Previous record qualifies
            sumOfQualifyingWeights[record] = {
              month: active_developers[record]["month"],
              weight_1: active_developers[record]["weight_contribution"],
            };
          } else {
            active_developers[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record] = {
              month: active_developers[record]["month"],
              weight_1: 0,
            };
          }
        }
      }

      for (var record = 0; record < interested_developers.length; record++) {
        if (
          interested_developers[record]["Interested Developers"] >=
          dimension2Threshold
        ) {
          interested_developers[record]["weight_contribution"] =
            dimension2Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_2"] =
            interested_developers[record]["weight_contribution"];
        } else {
          if (record == 0) {
            interested_developers[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_2"] = 0;
          } else if (
            interested_developers[record - 1]["weight_contribution"] ==
            dimension2Weight
          ) {
            interested_developers[record]["weight_contribution"] =
              dimension2Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_2"] =
              interested_developers[record]["weight_contribution"];
          } else {
            interested_developers[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_2"] = 0;
          }
        }
      }

      for (var record = 0; record < contract_deployers.length; record++) {
        if (
          contract_deployers[record]["Contract Deployers"] >=
          dimension3Threshold
        ) {
          contract_deployers[record]["weight_contribution"] = dimension3Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_3"] =
            contract_deployers[record]["weight_contribution"];
        } else {
          if (record == 0) {
            contract_deployers[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_3"] = 0;
          } else if (
            contract_deployers[record - 1]["weight_contribution"] ==
            dimension3Weight
          ) {
            contract_deployers[record]["weight_contribution"] =
              dimension3Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_3"] =
              contract_deployers[record]["weight_contribution"];
          } else {
            contract_deployers[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_3"] = 0;
          }
        }
      }

      for (var record = 0; record < verified_smart_contracts.length; record++) {
        if (
          verified_smart_contracts[record]["Verified Smart Contracts"] >=
          dimension4Threshold
        ) {
          verified_smart_contracts[record]["weight_contribution"] =
            dimension4Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_4"] =
            verified_smart_contracts[record]["weight_contribution"];
        } else {
          if (record == 0) {
            verified_smart_contracts[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_4"] = 0;
          } else if (
            verified_smart_contracts[record - 1]["weight_contribution"] ==
            dimension4Weight
          ) {
            verified_smart_contracts[record]["weight_contribution"] =
              dimension4Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_4"] =
              verified_smart_contracts[record]["weight_contribution"];
          } else {
            verified_smart_contracts[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_4"] = 0;
          }
        }
      }

      for (var record = 0; record < web3_ethers_downloads.length; record++) {
        if (
          web3_ethers_downloads[record]["web3+ethers Downloads"] >=
          dimension5Threshold
        ) {
          web3_ethers_downloads[record]["weight_contribution"] =
            dimension5Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_5"] =
            web3_ethers_downloads[record]["weight_contribution"];
        } else {
          if (record == 0) {
            web3_ethers_downloads[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_5"] = 0;
          } else if (
            web3_ethers_downloads[record - 1]["weight_contribution"] ==
            dimension5Weight
          ) {
            web3_ethers_downloads[record]["weight_contribution"] =
              dimension5Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_5"] =
              web3_ethers_downloads[record]["weight_contribution"];
          } else {
            web3_ethers_downloads[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_5"] = 0;
          }
        }
      }

      for (var record = 0; record < academic_publications.length; record++) {
        if (
          academic_publications[record]["Academic Publications"] >=
          dimension6Threshold
        ) {
          academic_publications[record]["weight_contribution"] =
            dimension6Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_6"] =
            academic_publications[record]["weight_contribution"];
        } else {
          if (record == 0) {
            academic_publications[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_6"] = 0;
          } else if (
            academic_publications[record - 1]["weight_contribution"] ==
            dimension6Weight
          ) {
            academic_publications[record]["weight_contribution"] =
              dimension6Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_6"] =
              academic_publications[record]["weight_contribution"];
          } else {
            academic_publications[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_6"] = 0;
          }
        }
      }

      for (var record = 0; record < job_search_trends.length; record++) {
        if (
          job_search_trends[record]["Search Interest"] >= dimension7Threshold
        ) {
          job_search_trends[record]["weight_contribution"] = dimension7Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_7"] =
            job_search_trends[record]["weight_contribution"];
        } else {
          if (record == 0) {
            job_search_trends[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_7"] = 0;
          } else if (
            job_search_trends[record - 1]["weight_contribution"] ==
            dimension7Weight
          ) {
            job_search_trends[record]["weight_contribution"] = dimension7Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_7"] =
              job_search_trends[record]["weight_contribution"];
          } else {
            job_search_trends[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_7"] = 0;
          }
        }
      }

      for (var record = 0; record < active_addresses.length; record++) {
        if (
          active_addresses[record]["Active Addresses"] >= dimension8Threshold
        ) {
          active_addresses[record]["weight_contribution"] = dimension8Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_8"] =
            active_addresses[record]["weight_contribution"];
        } else {
          if (record == 0) {
            active_addresses[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_8"] = 0;
          } else if (
            active_addresses[record - 1]["weight_contribution"] ==
            dimension8Weight
          ) {
            active_addresses[record]["weight_contribution"] = dimension8Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_8"] =
              active_addresses[record]["weight_contribution"];
          } else {
            active_addresses[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_8"] = 0;
          }
        }
      }

      for (var record = 0; record < transactions.length; record++) {
        if (transactions[record]["Transactions"] >= dimension9Threshold) {
          transactions[record]["weight_contribution"] = dimension9Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_9"] =
            transactions[record]["weight_contribution"];
        } else {
          if (record == 0) {
            transactions[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_9"] = 0;
          } else if (
            transactions[record - 1]["weight_contribution"] == dimension9Weight
          ) {
            transactions[record]["weight_contribution"] = dimension9Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_9"] =
              transactions[record]["weight_contribution"];
          } else {
            transactions[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_9"] = 0;
          }
        }
      }

      for (var record = 0; record < mobile_wallet_maus.length; record++) {
        if (
          mobile_wallet_maus[record]["Mobile Wallet Users"] >=
          dimension10Threshold
        ) {
          mobile_wallet_maus[record]["weight_contribution"] = dimension10Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_10"] =
            mobile_wallet_maus[record]["weight_contribution"];
        } else {
          if (record == 0) {
            mobile_wallet_maus[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_10"] = 0;
          } else if (
            mobile_wallet_maus[record - 1]["weight_contribution"] ==
            dimension10Weight
          ) {
            mobile_wallet_maus[record]["weight_contribution"] =
              dimension10Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_10"] =
              mobile_wallet_maus[record]["weight_contribution"];
          } else {
            mobile_wallet_maus[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_10"] = 0;
          }
        }
      }

      for (var record = 0; record < dex_volume.length; record++) {
        if (dex_volume[record]["DEX Volume"] >= dimension11Threshold) {
          dex_volume[record]["weight_contribution"] = dimension11Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_11"] =
            dex_volume[record]["weight_contribution"];
        } else {
          if (record == 0) {
            dex_volume[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_11"] = 0;
          } else if (
            dex_volume[record - 1]["weight_contribution"] == dimension11Weight
          ) {
            dex_volume[record]["weight_contribution"] = dimension11Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_11"] =
              dex_volume[record]["weight_contribution"];
          } else {
            dex_volume[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_11"] = 0;
          }
        }
      }

      for (var record = 0; record < nft_volume.length; record++) {
        if (nft_volume[record]["NFT Volume"] >= dimension12Threshold) {
          nft_volume[record]["weight_contribution"] = dimension12Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_12"] =
            nft_volume[record]["weight_contribution"];
        } else {
          if (record == 0) {
            nft_volume[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_12"] = 0;
          } else if (
            nft_volume[record - 1]["weight_contribution"] == dimension12Weight
          ) {
            nft_volume[record]["weight_contribution"] = dimension12Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_12"] =
              nft_volume[record]["weight_contribution"];
          } else {
            nft_volume[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_12"] = 0;
          }
        }
      }

      for (var record = 0; record < stablecoin_volume.length; record++) {
        if (
          stablecoin_volume[record]["Stablecoin Volume"] >= dimension13Threshold
        ) {
          stablecoin_volume[record]["weight_contribution"] = dimension13Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_13"] =
            stablecoin_volume[record]["weight_contribution"];
        } else {
          if (record == 0) {
            stablecoin_volume[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_13"] = 0;
          } else if (
            stablecoin_volume[record - 1]["weight_contribution"] ==
            dimension13Weight
          ) {
            stablecoin_volume[record]["weight_contribution"] =
              dimension13Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_13"] =
              stablecoin_volume[record]["weight_contribution"];
          } else {
            stablecoin_volume[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_13"] = 0;
          }
        }
      }

      for (var record = 0; record < transaction_fees_paid.length; record++) {
        if (
          transaction_fees_paid[record]["Transaction Fees Paid"] >=
          dimension14Threshold
        ) {
          transaction_fees_paid[record]["weight_contribution"] =
            dimension14Weight; // Above minimum threshold
          sumOfQualifyingWeights[record]["weight_14"] =
            transaction_fees_paid[record]["weight_contribution"];
        } else {
          if (record == 0) {
            transaction_fees_paid[record]["weight_contribution"] = 0; // First record, not qualifying
            sumOfQualifyingWeights[record]["weight_14"] = 0;
          } else if (
            transaction_fees_paid[record - 1]["weight_contribution"] ==
            dimension14Weight
          ) {
            transaction_fees_paid[record]["weight_contribution"] =
              dimension14Weight; // Previous record qualifies
            sumOfQualifyingWeights[record]["weight_14"] =
              transaction_fees_paid[record]["weight_contribution"];
          } else {
            transaction_fees_paid[record]["weight_contribution"] = 0; // Not qualifying
            sumOfQualifyingWeights[record]["weight_14"] = 0;
          }
        }
      }

      for (var record = 0; record < sumOfQualifyingWeights.length; record++) {
        sumOfQualifyingWeights[record]["total_contributing_weight"] =
          sumOfQualifyingWeights[record]["weight_1"] +
          sumOfQualifyingWeights[record]["weight_2"] +
          sumOfQualifyingWeights[record]["weight_3"] +
          sumOfQualifyingWeights[record]["weight_4"] +
          sumOfQualifyingWeights[record]["weight_5"] +
          sumOfQualifyingWeights[record]["weight_6"] +
          sumOfQualifyingWeights[record]["weight_7"] +
          sumOfQualifyingWeights[record]["weight_8"] +
          sumOfQualifyingWeights[record]["weight_9"] +
          sumOfQualifyingWeights[record]["weight_10"] +
          sumOfQualifyingWeights[record]["weight_11"] +
          sumOfQualifyingWeights[record]["weight_12"] +
          sumOfQualifyingWeights[record]["weight_13"] +
          sumOfQualifyingWeights[record]["weight_14"];
      }

      return sumOfQualifyingWeights[month]["total_contributing_weight"];
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
        soc_index[record]["Index Value"] =
          soc_index[record]["weighted_growth"] * 100;
      }

      return soc_index;
    },
    calculate1MChange(data = []) {
      if (data.length == 0) {
        return 0.0;
      }
      var numberOfMonths = data.length - 1;
      var t0Value = data[numberOfMonths]["Index Value"];
      var t1Value = data[numberOfMonths - 1]["Index Value"];
      var change = ((t0Value - t1Value) / t1Value) * 100;
      return change.toFixed(2);
    },

    calculate1YChange(data = []) {
      if (data.length == 0) {
        return 0.0;
      }
      var numberOfMonths = data.length - 1;
      var t0Value = data[numberOfMonths]["Index Value"];
      var t12Value = data[numberOfMonths - 12]["Index Value"];
      var change = ((t0Value - t12Value) / t12Value) * 100;
      return change.toFixed(2);
    },

    calculate3YChange(data = []) {
      if (data.length == 0) {
        return 0.0;
      }
      var numberOfMonths = data.length - 1;
      var t0Value = data[numberOfMonths]["Index Value"];
      var t36Value = data[numberOfMonths - 36]["Index Value"];
      var change = ((t0Value - t36Value) / t36Value) * 100;
      return change.toFixed(2);
    },
    setUpDownArrow(num) {
      if (num >= 0) {
        return "arrow-up-long";
      } else {
        return "arrow-down-long";
      }
    },
  },
  mounted() {
    this.aggregateData = this.aggregateDimensions(
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
  },
};
</script>
<style scoped>
.performanceBtnDown {
  cursor: pointer;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(174, 59, 10, 0.5);
  color: #ae3b0a;
  font-size: 18px;
  background-color: #ffffff;
  padding: 5px 15px;
  border-radius: 4px;
  font-family: "ABC Favorit";
  min-width: 370px;
  max-width: 90vw;
}

.performanceBtnDown:hover {
  background-color: rgba(174, 59, 10, 0.04);
  border: 1px solid #ae3b0a;
}

.performanceBtnUp {
  cursor: pointer;
  font-weight: 500;

  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  padding: 5px 15px;
  border-radius: 4px;
  -webkit-transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(60, 87, 44, 0.5);
  color: #3c572c;
  font-size: 18px;
  background-color: #ffffff;
  font-family: "ABC Favorit";
  min-width: 370px;
  max-width: 90vw;
}
.performanceBtnUp:hover {
  background-color: rgba(60, 87, 44, 0.04);
  border: 1px solid #3c572c;
}

@media (max-width: 767px) {
  .performanceBtnDown,
  .performanceBtnUp {
    min-width: 353px;
    max-width: 90vw;
  }
}
</style>
