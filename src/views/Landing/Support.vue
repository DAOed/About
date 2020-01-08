<template>
  <div class="container">
    <div
      id="support"
      class="content support-section"
    >
      <div class="title">
        Support us!
      </div>
      <div class="body">
        Support us by using our products, following and sharing our products on social media, or voting for our products on Product hunt. You can also donate. Thank you for supporting our effort to make the Internet free of manipulation, censorship and spying.
      </div>

      <zi-button
        type="abort"
        style="margin: 5rem;"
        auto
        @click="donate"
      >
        Donate
      </zi-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    donate () {
      this.$router.push("/donate")
    }
  }
}
</script>

<style scoped>
.support-section {
  margin-bottom: 4rem;
}
</style>
