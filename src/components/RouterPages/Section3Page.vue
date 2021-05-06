<template>
  <b-container class="section-3-page">
    <b-row>
      <b-col>
        <h2>Section 3 - Non-Tech Select &amp; Answer</h2>
        <p>Teams take turns to pick the topic and question level:</p>
        <ul>
          <li>If you get it <strong>right</strong>, you win the points!</li>
          <li>If you get it <strong>wrong</strong>, your opponent gets the option to answer. If they get it right, they win <strong>half</strong> of the points the question is worth
          </li>
        </ul>
        <p>We are going to do a total of <strong>12</strong> questions!</p>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
      <b-col>
        <router-link to="/section-2-selection">Back To Section 2 Questions</router-link>
      </b-col>
      <b-col class="text-right">
        <router-link to="/section-3-selection">Go to Questions</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Section3Page'
}
</script>

<style scoped>

</style>
