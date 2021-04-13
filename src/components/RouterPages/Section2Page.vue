<template>
  <b-container class="section-2-page">
    <b-row>
      <b-col>
        <h3>Section 2 - Read &amp; Guess Azure</h3>
        <p>There will be 6 sentences to describe each service in Azure, to guess the service correctly:</p>
        <ul>
          <li>Within the first sentence: 300 points.</li>
          <li>Within the second sentence: 250 points.</li>
          <li>...</li>
          <li>In the last sentence: 50 points.</li>
        </ul>
        <p>Each person can only guess <strong>once</strong>!</p>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <router-link to="/section-1-selection">Back To Section 1 Questions</router-link>
      </b-col>
      <b-col class="text-right">
        <router-link to="/section-2-selection">Go to Questions</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Section2Page'
}
</script>

<style scoped>

</style>
