<template>
  <b-container class="section-1-selection-page">
    <b-row>
      <b-col>
        <h2>Questions:</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button block variant="primary" size="lg">Software 100</b-button>
        <b-button block variant="primary" size="lg">Software 200</b-button>
        <b-button block variant="primary" size="lg">Software 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="success" size="lg">Security 100</b-button>
        <b-button block variant="success" size="lg">Security 200</b-button>
        <b-button block variant="success" size="lg">Security 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="warning" size="lg">Database 100</b-button>
        <b-button block variant="warning" size="lg">Database 200</b-button>
        <b-button block variant="warning" size="lg">Database 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="outline-dark" size="lg">Architecture 100</b-button>
        <b-button block variant="outline-dark" size="lg">Architecture 200</b-button>
        <b-button block variant="outline-dark" size="lg">Architecture 300</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col>
        <b-button block variant="dark" size="lg">Linux 100</b-button>
        <b-button block variant="dark" size="lg">Linux 200</b-button>
        <b-button block variant="dark" size="lg">Linux 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="danger" size="lg">Web 100</b-button>
        <b-button block variant="danger" size="lg">Web 200</b-button>
        <b-button block variant="danger" size="lg">Web 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="info" size="lg">Office 100</b-button>
        <b-button block variant="info" size="lg">Office 200</b-button>
        <b-button block variant="info" size="lg">Office 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="secondary" size="lg">Theory 100</b-button>
        <b-button block variant="secondary" size="lg">Theory 200</b-button>
        <b-button block variant="secondary" size="lg">Theory 300</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <router-link to="/section-1">Back To Section Intro</router-link>
      </b-col>
      <b-col class="text-right">
        <router-link to="/section-2">Go to Section 2</router-link>
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
