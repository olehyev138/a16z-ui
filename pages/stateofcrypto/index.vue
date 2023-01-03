<template>
  <section>
    <Header></Header>
    <Hero />
    <!-- <b-nav class="scrollspyNavItems mb-4">
      <b-nav-item href="javascript:void(0)" v-scroll-to="'#overview'"
        >overview</b-nav-item
      >
      <b-nav-item href="javascript:void(0)" v-scroll-to="'#interactive'"
        >interactive</b-nav-item
      >

      <b-nav-item href="javascript:void(0)" v-scroll-to="'#methodology'"
        >methodology</b-nav-item
      >
      <b-nav-item href="javascript:void(0)" v-scroll-to="'#report'"
        >report</b-nav-item
      >
    </b-nav> -->
    <div class="main">
      <section id="overview" class="my-4">
        <Overview />
      </section>
      <section id="interactive" class="my-4">
        <OverallIndex />
      </section>
      <section id="methodology" class="my-4">
        <Methodology></Methodology>
      </section>
      <section id="report" class="my-4">
        <Reports />
      </section>
    </div>
    <Footer></Footer>
  </section>
</template>

<script>
export default {
  name: "StateofcryptoPage",
  head() {
    return {
      title: "State of Crypto Index",
    };
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
#overview {
  height: auto;
  overflow: hidden;
}
#interactive {
  height: auto;
  overflow: hidden;
}
#methodology {
  height: auto;
  overflow: hidden;
}
#report {
  height: auto;
  overflow: hidden;
}
.scrollspyNavItems {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  width: 474px;
  height: 42px;
  background: #f1f1f1;
  border-radius: 2px;
}
.scrollspyNavItems li a {
  font-family: "ABCFavoritMono";
  text-transform: uppercase;
}
.main {
  min-height: 100vh;
  padding: 1.8rem 3.8rem;
  overflow: hidden;
}

@media screen and (max-width: 767px) {
  .main {
    padding: 20px;
    overflow: hidden;
  }
  .scrollspyNavItems {
    width: 100%;
    font-size: 10px !important;
    line-height: 20px;
  }
}
</style>
