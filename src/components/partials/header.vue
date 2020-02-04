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
          <zi-popover
            :hoverable="true"
            @command="app"
          >
            <zi-button
              size="small"
              type="abort"
              auto
              title="More dapps"
            >
              <span style="display: flex; align-items: center;">
                <grid-icon
                  class="icon-class"
                  size="1.5x"
                />
              </span>
            </zi-button>
            <template v-slot:dropdown>
              <zi-popover-item command="search">
                DAOed Search
              </zi-popover-item>
              <zi-popover-item command="drive">
                DAOed Drive
              </zi-popover-item>
              <zi-popover-item command="library">
                DAOed Library
              </zi-popover-item>
            </template>
          </zi-popover>

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
            @click="open('https://github.com/DAOed')"
          >
            Github
          </zi-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZeitUI from "@zeit-ui/vue"
import { SunIcon, MoonIcon, GridIcon } from "vue-feather-icons"

export default {
  components: {
    SunIcon,
    MoonIcon,
    GridIcon
  },
  data: () => {
    return {
      theme: "light"
    }
  },
  methods: {
    app (name) {
      let url = ""

      switch (name) {
      case "search":
        url = "https://daoed.com"
        break
      case "drive":
        url = "https://drive.daoed.com"
        break
      case "library":
        url = "https://library.daoed.com"
        break
      default:
      }

      window.open(url)
    },
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
      if (this.$route.path !== "/") {
        this.$router.push("/").then(() => this.$scrollTo(target, 1500))
      } else {
        this.$scrollTo(target, 1500)
      }
    },
    open (url) {
      window.open(url)
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
