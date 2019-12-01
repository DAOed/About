<template>
  <div class="footer">
    <div class="container">
      <div class="justified">
        <div>
          <span
            class="foot-item"
            style="margin-left: 0"
          > A
            <router-link to="/">Daoed</router-link> Company</span>
        </div>
        <div>
          <router-link
            to="/contact"
            class="foot-item"
          >
            Contact
          </router-link>
          <router-link
            to="media"
            class="foot-item"
          >
            Media
          </router-link>
          <router-link
            to="terms"
            class="foot-item"
          >
            Terms
          </router-link>
          <router-link
            to="privacy"
            class="foot-item"
          >
            Privacy
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  margin: 4rem 0rem 1rem 0rem;
}
.footer * {
  color: #666 !important;
}
.foot-item {
  font-size: 70% !important;
  margin-left: 0.5rem;
}
</style>
