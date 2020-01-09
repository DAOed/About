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
        <div class="menu-buttons">
          <zi-button
            type="abort"
            auto
            @click="goScroll('#dapps')"
          >
            DApps
          </zi-button>
          <zi-button
            type="abort"
            auto
            @click="toggle"
          >
            <div class="theme-toggle-icons">
              <sun-icon
                v-if="theme === 'dark'"
                size="1.5x"
              />
              <moon-icon
                v-else
                size="1.5x"
              />
            </div>
          </zi-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZeitUI from "@zeit-ui/vue"
import { SunIcon, MoonIcon } from "vue-feather-icons"

export default {
  components: {
    SunIcon,
    MoonIcon
  },
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
    },
    goScroll (target) {
      this.$scrollTo(target, 1500)
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
.menu-buttons {
  display: flex;
  align-items: center;
}
.theme-toggle-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
