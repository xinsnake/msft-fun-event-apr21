<template>
  <b-container class="section-4-page">
    <b-row>
      <b-col>
        <h3>Section 4 - English!</h3>
        <ul>
          <li>Two teams take turns to answer multiple choice questions.</li>
          <li>Only <strong>1</strong> member in the team can participate each question, and you <strong>must
            rotate</strong> the member who is answering.
          </li>
          <li>Then you answer the question:</li>
          <li>
            <ul>
              <li>If you get it correct you win <strong>100</strong> points.</li>
              <li>If you get it wrong you <strong>do not</strong> lose points.</li>
            </ul>
          </li>
          <li>There are in total <strong>10</strong> questions worth total of 500 points for each team.</li>
        </ul>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col>
        <router-link to="/section-3-selection">Back To Section 3 Questions</router-link>
      </b-col>
      <b-col class="text-right">
        <router-link to="/section-4-selection">Go To Questions</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Section4Page'
}
</script>

<style scoped>

</style>
