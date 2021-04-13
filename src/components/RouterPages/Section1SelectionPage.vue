<template>
  <b-container class="section-1-selection-page">
    <b-row>
      <b-col>
        <h2>Questions:</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button block variant="primary" size="lg" :disabled="isQuestionUsed('software100')" @click="selectQuestion('software100')">Software 100</b-button>
        <b-button block variant="primary" size="lg" :disabled="isQuestionUsed('software200')" @click="selectQuestion('software200')">Software 200</b-button>
        <b-button block variant="primary" size="lg" :disabled="isQuestionUsed('software300')" @click="selectQuestion('software300')">Software 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="success" size="lg" :disabled="isQuestionUsed('security100')" @click="selectQuestion('security100')">Security 100</b-button>
        <b-button block variant="success" size="lg" :disabled="isQuestionUsed('security200')" @click="selectQuestion('security200')">Security 200</b-button>
        <b-button block variant="success" size="lg" :disabled="isQuestionUsed('security300')" @click="selectQuestion('security300')">Security 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="warning" size="lg" :disabled="isQuestionUsed('database100')" @click="selectQuestion('database100')">Database 100</b-button>
        <b-button block variant="warning" size="lg" :disabled="isQuestionUsed('database200')" @click="selectQuestion('database200')">Database 200</b-button>
        <b-button block variant="warning" size="lg" :disabled="isQuestionUsed('database300')" @click="selectQuestion('database300')">Database 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="outline-dark" size="lg" :disabled="isQuestionUsed('architecture100')" @click="selectQuestion('architecture100')">Architecture 100</b-button>
        <b-button block variant="outline-dark" size="lg" :disabled="isQuestionUsed('architecture200')" @click="selectQuestion('architecture200')">Architecture 200</b-button>
        <b-button block variant="outline-dark" size="lg" :disabled="isQuestionUsed('architecture300')" @click="selectQuestion('architecture300')">Architecture 300</b-button>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col>
        <b-button block variant="dark" size="lg" :disabled="isQuestionUsed('linux100')" @click="selectQuestion('linux100')">Linux 100</b-button>
        <b-button block variant="dark" size="lg" :disabled="isQuestionUsed('linux200')" @click="selectQuestion('linux200')">Linux 200</b-button>
        <b-button block variant="dark" size="lg" :disabled="isQuestionUsed('linux300')" @click="selectQuestion('linux300')">Linux 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="danger" size="lg" :disabled="isQuestionUsed('web100')" @click="selectQuestion('web100')">Web 100</b-button>
        <b-button block variant="danger" size="lg" :disabled="isQuestionUsed('web200')" @click="selectQuestion('web200')">Web 200</b-button>
        <b-button block variant="danger" size="lg" :disabled="isQuestionUsed('web300')" @click="selectQuestion('web300')">Web 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="info" size="lg" :disabled="isQuestionUsed('office100')" @click="selectQuestion('office100')">Office 100</b-button>
        <b-button block variant="info" size="lg" :disabled="isQuestionUsed('office200')" @click="selectQuestion('office200')">Office 200</b-button>
        <b-button block variant="info" size="lg" :disabled="isQuestionUsed('office300')" @click="selectQuestion('office300')">Office 300</b-button>
      </b-col>
      <b-col>
        <b-button block variant="secondary" size="lg" :disabled="isQuestionUsed('theory100')" @click="selectQuestion('theory100')">Theory 100</b-button>
        <b-button block variant="secondary" size="lg" :disabled="isQuestionUsed('theory200')" @click="selectQuestion('theory200')">Theory 200</b-button>
        <b-button block variant="secondary" size="lg" :disabled="isQuestionUsed('theory300')" @click="selectQuestion('theory300')">Theory 300</b-button>
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
  name: 'Section1SelectionPage',
  methods: {
    selectQuestion(qid) {
      this.$router.push(`/section-1/${qid}`);
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
