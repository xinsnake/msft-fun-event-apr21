<template>
  <b-container class="intro-page">
    <b-row>
      <b-col class="text-right">
        <b-img :src="require('@/assets/images/quiz-time.png')" class="no-panic-image"/>
      </b-col>
      <b-col>
        <div class="flex-center">
          <h2 class="mt-2 mb-2">Everyone loves QUIZ TIME!</h2>
          <p>
            We need everyone to group to 2 teams!
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
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
.no-panic-image {
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
