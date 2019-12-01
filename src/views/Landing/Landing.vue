<template>
  <div class="landing">
    <div class="logo-div">
      <img
        alt="Daoed"
        :src="'./img/daoed-wordmark-1.png'"
        class="logo"
      >
    </div>
    <div class="more-div">
      <a @click="scroll">
        <img
          alt="More"
          :src="'./img/more.png'"
          class="more"
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scroll () {
      this.$scrollTo("#mission", 1500)
    }
  }
}
</script>

<style scoped>
.logo-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
}
.logo {
  height: 25rem;
}
.more {
  width: 5rem;
}
</style>
