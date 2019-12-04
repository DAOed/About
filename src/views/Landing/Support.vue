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
        Do you believe in the decentralized Internet? An Internet free of censorship, algorithms with an agenda, centralized control and one that is truly open?
        We believe in that also, and work everyday to bring you applications that make it a reality. If you are impressed with our work so far, consider supporting us by making a generous donation.
      </div>

      <zi-button
        type="abort"
        style="margin: 5rem;"
        auto
        @click="donate"
      >
        Donate now
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
