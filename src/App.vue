<template>
  <div id="app">
    <div class="header">
      <app-header />
    </div>
    <div class="">
      <router-view />
    </div>
    <div class="footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppHeader from "@components/partials/header"
import AppFooter from "@components/partials/footer"

export default {
  components: {
    AppHeader,
    AppFooter
  },
  watch: {
    $route (newRoute) {
      // This goes through the matched routes from last to first, finding the closest route with a title.
      // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
      const nearestWithTitle = newRoute.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.title)

      // Find the nearest route element with meta tags.
      const nearestWithMeta = newRoute.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags)
      // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

      // If a route with a title was found, set the document (page) title to that value.
      if (nearestWithTitle) document.title = nearestWithTitle.meta.title

      // Remove any stale meta tags from the document using the key attribute we set below.
      Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
        el => el.parentNode.removeChild(el)
      )

      // Skip rendering meta tags if there are none.
      if (!nearestWithMeta) return false

      // Turn the meta tag definitions into actual elements in the head.
      nearestWithMeta.meta.metaTags
        .map(tagDef => {
          const tag = document.createElement("meta")

          Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key])
          })

          // We use this to track which meta tags we create, so we don't interfere with other ones.
          tag.setAttribute("data-vue-router-controlled", "")

          return tag
        })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag))
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
