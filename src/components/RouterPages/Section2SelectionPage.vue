<template>
  <b-container class="section-2-selection-page">
    <b-row>
      <b-col>
        <h2>Questions:</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button block variant="primary" size="lg">Service 1</b-button>
        <b-button block variant="secondary" size="lg">Service 2</b-button>
      </b-col>
      <b-col>
        <b-button block variant="success" size="lg">Service 3</b-button>
        <b-button block variant="danger" size="lg">Service 4</b-button>
      </b-col>
      <b-col>
        <b-button block variant="warning" size="lg">Service 5</b-button>
        <b-button block variant="info" size="lg">Service 6</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <router-link to="/section-2">Back To Section Intro</router-link>
      </b-col>
      <b-col class="text-right">
        <router-link to="/section-3">Go to Section 3</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Section1SelectionPage'
}
</script>

<style scoped>

</style>
