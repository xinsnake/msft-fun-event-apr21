<template>
  <b-container class="section-2-page">
    <b-row>
      <b-col>
        <h2>Section 2 - Read &amp; Guess Azure</h2>
        <p>There will be 6 sentences to describe each service in Azure, to guess the service correctly:</p>
        <ul>
          <li>Within the first sentence: <strong>300</strong> points.</li>
          <li>Within the second sentence: <strong>250</strong> points.</li>
          <li>Within the third sentence: <strong>200</strong> points.</li>
          <li>Within the fourth sentence: <strong>150</strong> points.</li>
          <li>Within the fifth sentence: <strong>100</strong> points.</li>
          <li>Within the last sentence: <strong>50</strong> points.</li>
        </ul>
        <p>Anyone in any team can guess, but each person can only guess <strong>once</strong>!</p>
        <p>We are going to do a total of <strong>6</strong> questions!</p>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
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
