<template>
  <div
    id="support"
    class="content support-section"
  >
    <div class="w-400 s-120 mg-d-1">
      Support us!
    </div>
    <div class="body">
      Support us by using our products, following and sharing our products on social media, or voting for our products on Product hunt. You can also donate. Thank you for supporting our effort to make the Internet free of manipulation, censorship and surveillance.
    </div>

    <zi-button
      type="abort"
      style="margin: 2rem;"
      auto
      @click="go('/community')"
    >
      Community
    </zi-button>
    <zi-button
      type="abort"
      style="margin: 2rem;"
      auto
      @click="go('/donate')"
    >
      Donate
    </zi-button>
  </div>
</template>

<script>
export default {
  methods: {
    go (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.support-section {
  margin-bottom: 4rem;
}
</style>
