<template>
  <b-container class="section-1-page">
    <b-row>
      <b-col>
        <h3>Section 1 - Tech Select &amp; Answer</h3>
        <p>Teams take turns to pick the topic and question level:</p>
        <ul>
          <li>If you get it <strong>right</strong>, you win the points!</li>
          <li>If you get it <strong>wrong</strong>, you lose the <strong>same</strong> amount of points, and your
            opponent gets the option to answer.
          </li>
          <li>
            <ul>
              <li>If they get it right, they win <strong>half</strong> of the points the question is worth,</li>
              <li>If they also get it wrong, they lose <strong>half</strong> of the amount of above points.</li>
            </ul>
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-row class="mt-4">
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
