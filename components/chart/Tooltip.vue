<!-- Please remove this file from your project -->
<template>
  <span
    class="tooltipDiv"
    :style="`background:#${bgColor};width:${size};height:${size};font-size:${iconZize} !important`"
    v-b-tooltip.html.bottom
    :title="title"
    ><fa :icon="['fas', 'info']" :color="`#${iconColor}`"
  /></span>
</template>

<script>
export default {
  name: "Tooltip",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
    bgColor: {
      type: String,
      required: false,
    },
    iconColor: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
      default: "20px",
    },
    iconZize: {
      type: String,
      required: false,
      default: "13px",
    },
  },
};
</script>
<style scoped>
.tooltipDiv {
  cursor: pointer;
  background: #000;
  width: 20px;
  height: 20px;
  display: inline-flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
</style>
