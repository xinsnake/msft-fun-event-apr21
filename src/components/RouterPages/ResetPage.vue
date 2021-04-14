<template>
  <b-container class="reset-page">
    <b-row>
      <b-col class="text-center">
        <h2 class="mt-5 mb-5">ResetPage</h2>
        <div class="mt-5 mb-5">
          <b-button variant="danger" size="lg" @click="resetGame()">Click to Reset Game Status</b-button>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
      <b-col>
        <router-link to="/">Back To Home</router-link>
      </b-col>
      <b-col class="text-right">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ResetPage',
  methods: {
    resetGame() {
      this.$store.commit("game/resetGame");
    }
  }
}
</script>

<style scoped>

</style>
