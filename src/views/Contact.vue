<template>
  <div
    id="mission"
    class="container"
  >
    <div class="content">
      <div class="title">
        Contact
      </div>
      <div class="body">
        Sorry, for the test. We just need to make sure you are a human.
      </div>

      <br>
      <br>

      <div v-if="!humanTestPass">
        <div>Prove you are human: {{ quo1 }} + {{ quo2 }} = </div>
        <zi-input
          v-model="ans"
          placeholder="placeholder"
        />
      </div>

      <div v-else>
        <b>daoeddev@gmail.com</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quo1: 0,
      quo2: 0,
      ans: 0
    }
  },
  computed: {
    humanTestPass () {
      return Number(this.ans) === this.quo1 + this.quo2
    }
  },
  mounted () {
    this.quo1 = this.genNum()
    this.quo2 = this.genNum()
  },
  methods: {
    genNum () {
      return Math.ceil(Math.random() * 20)
    }
  }
}
</script>

<style scoped>
</style>
