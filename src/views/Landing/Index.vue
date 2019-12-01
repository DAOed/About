<template>
  <div class="">
    <Landing />
    <Mission />
    <DApps />
    <Support />
  </div>
</template>

<script>
import Landing from "./Landing.vue"
import Mission from "./Mission.vue"
import DApps from "./DApps.vue"
import Support from "./Support.vue"

export default {
  components: {
    Landing,
    Mission,
    DApps,
    Support
  }
}
</script>
