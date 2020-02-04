<template>
  <div id="dapps">
    <div class="w-400 s-120 mg-d-1">
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
        target="_blank"
      >
        <img
          :src="dapp.img"
          class="img"
        >
      </a>
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
      },
      {
        title: "Decentralized Drive",
        img: "./img/dapps/daoed-drive-wordmark.png",
        link: "https://drive.daoed.com"
      },
      {
        title: "Decentralized Library",
        img: "./img/dapps/daoed-library-wordmark.png",
        link: "https://library.daoed.com"
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
