<template>
  <div
    id="mission"
    class="medium-container"
  >
    <div class="mg-t-5 mg-d-5">
      <div class="w-400 s-120 mg-d-1">
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
