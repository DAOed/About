<template>
  <div
    id="mission"
    class="medium-container"
  >
    <div class="mg-t-5 mg-d-5">
      <div class="w-400 s-120 mg-d-1">
        Community
      </div>
      <div class="body">
        <zi-button
          v-for="(account, index) in accounts"
          :key="index"
          type="abort"
          style="margin: 2rem;"
          auto
          @click="go(account.link)"
        >
          {{ account.name }}
        </zi-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      accounts: [
        {
          name: "Facebook",
          link: "https://facebook.com/DAOed-100509058111781/"
        },
        {
          name: "Twitter",
          link: "https://twitter.com/daoed_com"
        },
        {
          name: "LinkedIn",
          link: "https://linkedin.com/company/daoed"
        },
        {
          name: "Steem",
          link: "https://steem.online/@daoed"
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    go (route) {
      window.open(route)
    }
  }
}
</script>

<style scoped>
</style>
