<template>
  <div class="header">
    <div class="container">
      <div class="justified">
        <router-link to="/">
          <img
            src="/img/daoed-wordmark.png"
            class="wordmark"
          >
        </router-link>
        <div>
          <zi-button
            type="abort"
            auto
            @click="toggle"
          >
            Lights!
          </zi-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZeitUI from "@zeit-ui/vue"

export default {
  data: () => {
    return {
      theme: "light"
    }
  },
  methods: {
    toggle () {
      if (this.theme === "light") {
        ZeitUI.theme.enableDark()
        this.theme = "dark"
      } else {
        ZeitUI.theme.enableLight()
        this.theme = "light"
      }
    }
  }
}
</script>

<style scoped>
.header {
  margin: 1rem 0rem;
}
.wordmark {
  height: 30px;
}
</style>
