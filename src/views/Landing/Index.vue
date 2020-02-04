<template>
  <div>
    <Landing />

    <div class="medium-container">
      <Mission class="item-section" />
      <DApps class="item-section" />
      <Support class="item-section last-section" />
    </div>
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

<style>
.item-section {
  margin: 14rem 0rem;
}
.last-section {
  margin-bottom: 10rem !important;
}
@media only screen and (max-width: 600px) {
  .item-section {
    margin: 5rem 0rem;
  }
  .last-section {
    margin-bottom: 5rem !important;
  }
}
</style>
