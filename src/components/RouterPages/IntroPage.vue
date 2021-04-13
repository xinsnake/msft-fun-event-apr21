<template>
  <b-container class="intro-page">
    <b-row>
      <b-col class="text-center">
        Introduction Page
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <router-link to="/">Back To Title</router-link>
      </b-col>
      <b-col class="text-right">
        <router-link to="/section-1">Go To Section 1</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'IntroPage'
}
</script>

<style scoped>

</style>
