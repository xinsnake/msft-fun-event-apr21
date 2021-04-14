<template>
  <b-container class="section-2-selection-page">
    <b-row class="mt-2 mb-2">
      <b-col>
        <h2>Questions:</h2>
      </b-col>
    </b-row>
    <b-row class="mt-2 mb-2">
      <b-col>
        <b-button block variant="primary" size="lg" :disabled="isQuestionUsed('azure1')" @click="selectQuestion('azure1')">Service 1</b-button>
        <b-button block variant="secondary" size="lg" :disabled="isQuestionUsed('azure3')" @click="selectQuestion('azure3')">Service 3</b-button>
        <b-button block variant="success" size="lg" :disabled="isQuestionUsed('azure5')" @click="selectQuestion('azure5')">Service 5</b-button>
      </b-col>
      <b-col>
        <b-button block variant="danger" size="lg" :disabled="isQuestionUsed('azure2')" @click="selectQuestion('azure2')">Service 2</b-button>
        <b-button block variant="warning" size="lg" :disabled="isQuestionUsed('azure4')" @click="selectQuestion('azure4')">Service 4</b-button>
        <b-button block variant="info" size="lg" :disabled="isQuestionUsed('azure6')" @click="selectQuestion('azure6')">Service 6</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-4 pt-2 links-row">
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
  name: 'Section2SelectionPage',
  methods: {
    selectQuestion(qid) {
      this.$router.push(`/section-2/${qid}`);
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
