<template>
  <div
    id="dapps"
    class="container"
  >
    <div class="content">
      <div class="title">
        Decentralized Apps
      </div>
      <div
        class="three-grid-container"
        style="margin-top: 2rem;"
      >
        <a
          v-for="(dapp, index) in dapps"
          :key="index"
          class="item"
          :href="dapp.link"
          :title="dapp.title"
        >
          <img
            :src="dapp.img"
            class="img"
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    dapps: [
      {
        title: "Decentralized Search",
        img: "./img/dapps/daoed-search-wordmark.png",
        link: "https://daoed.com"
      }
    ]
  })
}
</script>

<style scoped>
.img {
  width: 8rem;
}
</style>
