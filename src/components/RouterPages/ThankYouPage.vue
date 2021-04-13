<template>
  <b-container class="thank-you-page">
    <b-row>
      <b-col>
        ThankYouPage
      </b-col>
    </b-row>
    <b-row class="mt-4">
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
  name: 'ThankYouPage'
}
</script>

<style scoped>

</style>
