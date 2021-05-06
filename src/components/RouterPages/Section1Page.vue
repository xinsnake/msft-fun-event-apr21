<template>
  <b-container class="section-1-page">
    <b-row>
      <b-col>
        <h2>Section 1 - Tech Select &amp; Answer</h2>
        <p>Teams take turns to pick the topic and question level:</p>
        <ul>
          <li>If you get it <strong>right</strong>, you win the points!</li>
          <li>If you get it <strong>wrong</strong>, your opponent gets the option to answer. If they get it right, they win <strong>half</strong> of the points the question is worth</li>
        </ul>
        <p>We are going to do a total of <strong>12</strong> questions!</p>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
      <b-col>
        <router-link to="/intro">Back To Intro</router-link>
      </b-col>
      <b-col class="text-right">
        <router-link to="/section-1-selection">Go To Question</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Section1Page'
}
</script>

<style scoped>

</style>
