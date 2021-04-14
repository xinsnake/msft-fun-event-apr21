<template>
  <b-container class="title-page">
    <b-row>
      <b-col class="text-center">
        <h1 class="title-text">Team Quokka Fun Event<br/>Apr 2021</h1>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
      <b-col></b-col>
      <b-col class="text-right">
        <router-link to="/intro">Go To Intro</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'TitlePage'
}
</script>

<style scoped>
.title-text {
  margin-top: 15rem;
  margin-bottom: 15rem;
}
</style>
