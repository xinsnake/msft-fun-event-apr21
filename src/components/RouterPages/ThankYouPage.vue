<template>
  <b-container class="thank-you-page">
    <b-row>
      <b-col class="text-right">
        <b-img :src="require('@/assets/images/thank-you.jpg')" class="thank-you-image"/>
      </b-col>
      <b-col>
        <div class="flex-center">
          <h2 class="mt-2 mb-2">The Winner is...</h2>
          <h1><strong>{{getWinner()}}</strong></h1>
          <br/><br/>
          <p>Hope you enjoyed the game!</p>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
      <b-col>
        <router-link to="/">Back To Home</router-link>
      </b-col>
      <b-col class="text-right">
        <router-link to="/reset">Go To Reset Page</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ThankYouPage',
  methods: {
    getWinner() {
      const a = this.$store.state.game.teamAPoint;
      const b = this.$store.state.game.teamBPoint;
      if (a > b) {
        return 'Team A';
      } else if (a < b) {
        return 'Team B';
      } else {
        return 'Everyone'
      }
    }
  }
}
</script>

<style scoped>
.thank-you-image {
  width: 400px;
  height: auto;
}
.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
