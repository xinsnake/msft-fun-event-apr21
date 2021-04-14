<template>
  <b-container class="section-4-selection-page">
    <b-row class="mt-2 mb-2">
      <b-col>
        <h2>Questions:</h2>
      </b-col>
    </b-row>
    <b-row class="mt-2 mb-2">
      <b-col>
        <b-button block variant="primary" size="lg" :disabled="isQuestionUsed('english1')" @click="selectQuestion('english1')">Question 1</b-button>
        <b-button block variant="secondary" size="lg" :disabled="isQuestionUsed('english3')" @click="selectQuestion('english3')">Question 3</b-button>
        <b-button block variant="warning" size="lg" :disabled="isQuestionUsed('english5')" @click="selectQuestion('english5')">Question 5</b-button>
      </b-col>
      <b-col>
        <b-button block variant="success" size="lg" :disabled="isQuestionUsed('english2')" @click="selectQuestion('english2')">Question 2</b-button>
        <b-button block variant="danger" size="lg" :disabled="isQuestionUsed('english4')" @click="selectQuestion('english4')">Question 4</b-button>
        <b-button block variant="info" size="lg" :disabled="isQuestionUsed('english6')" @click="selectQuestion('english6')">Question 6</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
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
  name: 'Section4SelectionPage',
  methods: {
    selectQuestion(qid) {
      this.$router.push(`/section-4/${qid}`);
    },
    isQuestionUsed(qid) {
      const usedQuestions = this.$store.state.game.usedQuestions;
      return usedQuestions.indexOf(qid) > -1;
    }
  }
}
</script>

<style scoped>

</style>
