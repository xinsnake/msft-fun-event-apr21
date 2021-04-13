<template>
  <b-container class="section-4-selection-page">
    <b-row>
      <b-col>
        <h2>Questions:</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button block variant="primary" size="lg">Question 1</b-button>
        <b-button block variant="secondary" size="lg">Question 3</b-button>
        <b-button block variant="outline-dark" size="lg">Question 5</b-button>
        <b-button block variant="warning" size="lg">Question 7</b-button>
      </b-col>
      <b-col>
        <b-button block variant="success" size="lg">Question 2</b-button>
        <b-button block variant="danger" size="lg">Question 4</b-button>
        <b-button block variant="dark" size="lg">Question 6</b-button>
        <b-button block variant="info" size="lg">Question 8</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <router-link to="/section-4">Back To Section Intro</router-link>
      </b-col>
      <b-col class="text-right">
        <router-link to="/thank-you">Finish</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Section3SelectionPage'
}
</script>

<style scoped>

</style>
