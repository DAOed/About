<template>
  <div
    id="mission"
    class="container"
  >
    <div class="content">
      <div class="title">
        Media
      </div>

      <div class="body">
        Our media asset bundle.
      </div>

      <zi-button
        type="abort"
        auto
        @click="download"
      >
        Download
      </zi-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    download () {
      window.open("./assets/media.zip")
    }
  }

}
</script>

<style scoped>
</style>
