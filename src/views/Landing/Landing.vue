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
  height: 40vh;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .logo {
    height: 10rem;
  }
  .logo-div {
    height: 40vh;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .logo {
    height: 15rem;
  }
  .logo-div {
    height: 50vh;
  }
}

/* Medium devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .logo {
    height: 20rem;
  }
  .logo-div {
    height: 60vh;
  }
}

/* Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .logo {
    height: 25rem;
  }
  .logo-div {
    height: 85vh;
  }
}

.more {
  width: 5rem;
}
</style>
