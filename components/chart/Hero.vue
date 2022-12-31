<!-- Please remove this file from your project -->
<template>
  <section class="hero heroStartup">
    <div class="highlightDisplay hldPacificCustom">
      <h1><span>State of</span><span>crypto</span><span>index</span></h1>
    </div>
    <br />
  </section>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.hero {
  margin-top: 120px;
  border-bottom: 2px solid #2c2222;
}
.heroStartup {
  overflow: hidden;
}
.highlightDisplay {
  margin-bottom: 7px;
  position: relative;
  z-index: 1;
}

.heroStartup h1 {
  font-family: "Sixteen Mono", "Arial";
  font-size: 80px;
  line-height: 64px;
}
.hldPacificCustom h1 {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  text-transform: uppercase;
}

.hldPacificCustom h1 span {
  padding-right: 0;
}
.hldPacificCustom span {
  background: #dcdcdc;
}
.hldPacificCustom span:nth-child(1) {
  padding-left: 150px;
}
.hldPacificCustom span:nth-child(2) {
  margin-left: 308px;
}
.hldPacificCustom span:nth-child(3) {
  margin-left: 200px;
}

@media (max-width: 1279px) {
  .heroStartup {
    overflow: hidden;
    min-height: 100px;
  }
  .heroStartup h1 {
    font-size: 100px;
  }
  .hldPacificCustom span:nth-child(1) {
    padding-left: 70px;
  }
  .hldPacificCustom span:nth-child(2) {
    margin-left: 120px;
  }
  .hldPacificCustom span:nth-child(3) {
    margin-left: 90px;
  }
}

@media (max-width: 1023px) {
  .heroStartup h1 {
    font-size: 80px;
  }
}

@media (max-width: 767px) {
  .heroStartup h1 {
    font-size: 44px;
  }
}
</style>
