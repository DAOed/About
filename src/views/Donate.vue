<template>
  <div
    id="mission"
    class="container"
  >
    <div class="content">
      <div class="title">
        Donate
      </div>
      <div class="body">
        Thank you in-advance for your donation. It will go a long way to building the decentralized Internet.
      </div>
      <div class="addresses">
        <div
          v-for="(address, index) in addresses"
          :key="index"
        >
          <span class="coin">{{ address.coin }}</span> <span class="address">{{ address.address }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addresses: [
        {
          coin: "Bitcoin",
          address: "1Hf4NZ9yqGPxwJDMr3xaGVcuQc8v3Dkik9"
        },
        {
          coin: "Bitcoin Cash",
          address: "qzmtfg3jv29ms3sjass2l0jjv4wa4ea7ty5wunz0kz"
        },
        {
          coin: "Ethereum",
          address: "0x8f1e1e63c6138429ac437c558502f5816a4d53f0"
        }
      ]
    }
  }
}
</script>

<style scoped>
.coin {
  font-size: 80%;
  font-weight: 400;
}
.address {
  font-weight: 800;
}
.addresses {
  margin-top: 4rem;
}
</style>
